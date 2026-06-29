import { NextRequest, NextResponse } from "next/server";
import { getTenantClient, getTenantFromAuth, supabaseAdmin } from "@/lib/supabase";

/**
 * GET /api/dashboard/summary
 * Renvoie les vraies données du dashboard pour le tenant authentifié :
 * - CA du mois, impayés, devis en attente, heures récupérées (estimées)
 * - Actions en attente de validation humaine
 * - Journal agent du jour
 */
export async function GET(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization");
    if (!authHeader) {
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }

    const token = authHeader.replace("Bearer ", "");
    const { data: userData, error: userError } =
      await supabaseAdmin.auth.getUser(token);

    if (userError || !userData.user) {
      return NextResponse.json({ error: "Token invalide" }, { status: 401 });
    }

    const tenantData = await getTenantFromAuth(userData.user.id);
    if (!tenantData) {
      return NextResponse.json({ error: "Tenant introuvable" }, { status: 404 });
    }

    const tenant = tenantData.tenants as any;
    const db = getTenantClient(tenant.schema_name);

    const now = new Date();
    const firstOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
      .toISOString()
      .split("T")[0];

    // CA du mois (factures payées ce mois-ci)
    const { data: paidInvoices } = await db
      .from("invoices")
      .select("amount_ttc")
      .eq("status", "paid")
      .gte("paid_at", firstOfMonth);

    const revenueThisMonth = (paidInvoices ?? []).reduce(
      (sum: number, inv: any) => sum + Number(inv.amount_ttc),
      0
    );

    // Impayés (factures en retard)
    const { data: overdueInvoices } = await db
      .from("invoices")
      .select("amount_ttc")
      .eq("status", "overdue");

    const totalOverdue = (overdueInvoices ?? []).reduce(
      (sum: number, inv: any) => sum + Number(inv.amount_ttc),
      0
    );

    // Devis en attente de validation
    const { data: pendingQuotes, count: pendingQuotesCount } = await db
      .from("quotes")
      .select("amount_ttc", { count: "exact" })
      .eq("validated_by_human", false)
      .eq("status", "draft");

    const pendingQuotesValue = (pendingQuotes ?? []).reduce(
      (sum: number, q: any) => sum + Number(q.amount_ttc),
      0
    );

    // Actions en attente (devis + emails non validés)
    const { data: pendingQuoteActions } = await db
      .from("quotes")
      .select("id, reference, amount_ttc, created_at, clients(name)")
      .eq("validated_by_human", false)
      .order("created_at", { ascending: false })
      .limit(5);

    const { data: pendingEmailActions } = await db
      .from("email_logs")
      .select("id, recipient_name, subject, created_at")
      .eq("validated_by_human", false)
      .eq("status", "pending")
      .order("created_at", { ascending: false })
      .limit(5);

    // Journal agent du jour
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate())
      .toISOString();

    const { data: agentLogs } = await db
      .from("agent_logs")
      .select("*")
      .gte("created_at", todayStart)
      .order("created_at", { ascending: true })
      .limit(20);

    return NextResponse.json({
      success: true,
      tenant: {
        companyName: tenant.company_name,
        sector: tenant.sector,
        plan: tenant.plan,
        subscriptionStatus: tenant.subscription_status,
      },
      kpis: {
        revenueThisMonth,
        totalOverdue,
        pendingQuotesCount: pendingQuotesCount ?? 0,
        pendingQuotesValue,
      },
      pendingActions: {
        quotes: pendingQuoteActions ?? [],
        emails: pendingEmailActions ?? [],
      },
      agentLogs: agentLogs ?? [],
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message ?? "Erreur inconnue" },
      { status: 500 }
    );
  }
}


export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function GET(req: NextRequest) {
  try {
    const token = req.headers.get("authorization")?.replace("Bearer ", "");
    if (!token) return NextResponse.json({ error: "Non authentifié" }, { status: 401 });

    const supabaseAdmin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      { auth: { autoRefreshToken: false, persistSession: false } }
    );

    const { data: userData } = await supabaseAdmin.auth.getUser(token);
    if (!userData.user) return NextResponse.json({ error: "Token invalide" }, { status: 401 });

    const { data: tenantUser } = await supabaseAdmin
      .from("tenant_users")
      .select("tenant_id, tenants(*)")
      .eq("auth_user_id", userData.user.id)
      .single();

    if (!tenantUser) return NextResponse.json({ error: "Tenant introuvable" }, { status: 404 });

    const tenant = tenantUser.tenants as any;
    const schema = tenant.schema_name;

    const db = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      { db: { schema }, auth: { autoRefreshToken: false, persistSession: false } }
    );

    const now = new Date();
    const firstOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().split("T")[0];

    const [paidRes, overdueRes, quotesRes, logsRes] = await Promise.all([
      db.from("invoices").select("amount_ttc").eq("status", "paid").gte("paid_at", firstOfMonth),
      db.from("invoices").select("amount_ttc").eq("status", "overdue"),
      db.from("quotes").select("id, reference, amount_ttc, created_at").eq("validated_by_human", false).eq("status", "draft").limit(5),
      db.from("agent_logs").select("*").gte("created_at", new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString()).order("created_at").limit(20),
    ]);

    const revenue = (paidRes.data || []).reduce((s: number, i: any) => s + Number(i.amount_ttc), 0);
    const overdue = (overdueRes.data || []).reduce((s: number, i: any) => s + Number(i.amount_ttc), 0);

    return NextResponse.json({
      success: true,
      tenant: { companyName: tenant.company_name, sector: tenant.sector, plan: tenant.plan },
      kpis: { revenueThisMonth: revenue, totalOverdue: overdue, pendingQuotes: quotesRes.data?.length || 0 },
      pendingQuotes: quotesRes.data || [],
      agentLogs: logsRes.data || [],
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import { getTenantClient, supabaseAdmin } from "@/lib/supabase";

/**
 * Configuration paiement — RIB à compléter par Bilal.
 * Une fois rempli, apparaît automatiquement sur chaque facture générée.
 * Aucune commission, aucun intermédiaire — virement bancaire direct.
 */
const PAYMENT_CONFIG = {
  method: "bank_transfer", // "bank_transfer" | "stripe" (à activer plus tard si besoin)
  iban: process.env.COMPANY_IBAN || "[IBAN À CONFIGURER]",
  bic: process.env.COMPANY_BIC || "[BIC À CONFIGURER]",
  accountHolder: process.env.COMPANY_NAME || "NexAdmin",
};

/**
 * POST /api/invoices/create
 * Génère une facture pour un client du tenant, avec les coordonnées
 * de paiement par virement intégrées automatiquement.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { tenantSchema, clientId, amountHt, vatRate, description, dueInDays } =
      body;

    if (!tenantSchema || !clientId || !amountHt) {
      return NextResponse.json(
        { error: "tenantSchema, clientId et amountHt requis" },
        { status: 400 }
      );
    }

    const db = getTenantClient(tenantSchema);

    // Génère une référence unique : FAC-2026-XXXX
    const year = new Date().getFullYear();
    const { count } = await db
      .from("invoices")
      .select("*", { count: "exact", head: true });

    const reference = `FAC-${year}-${String((count ?? 0) + 1).padStart(4, "0")}`;

    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + (dueInDays ?? 30));

    const { data: invoice, error } = await db
      .from("invoices")
      .insert({
        reference,
        client_id: clientId,
        amount_ht: amountHt,
        vat_rate: vatRate ?? 0,
        description: description ?? "",
        due_at: dueDate.toISOString().split("T")[0],
        status: "draft",
        validated_by_human: false,
      })
      .select()
      .single();

    if (error || !invoice) {
      return NextResponse.json(
        { error: error?.message ?? "Erreur création facture" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      invoice,
      payment: {
        method: PAYMENT_CONFIG.method,
        iban: PAYMENT_CONFIG.iban,
        bic: PAYMENT_CONFIG.bic,
        accountHolder: PAYMENT_CONFIG.accountHolder,
        instructions: `Merci d'effectuer le virement à réception de cette facture, avec la référence ${reference} en libellé.`,
      },
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message ?? "Erreur inconnue" },
      { status: 500 }
    );
  }
}


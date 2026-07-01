export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: NextRequest) {
  try {
    const { tenantSchema, clientId, amountHt, vatRate, description, dueInDays } = await req.json();
    if (!tenantSchema || !clientId || !amountHt) {
      return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 });
    }

    const db = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      { db: { schema: tenantSchema }, auth: { autoRefreshToken: false, persistSession: false } }
    );

    const year = new Date().getFullYear();
    const { count } = await db.from("invoices").select("*", { count: "exact", head: true });
    const reference = `FAC-${year}-${String((count || 0) + 1).padStart(4, "0")}`;

    const due = new Date();
    due.setDate(due.getDate() + (dueInDays || 30));

    const { data: invoice, error } = await db.from("invoices").insert({
      reference, client_id: clientId, amount_ht: amountHt,
      vat_rate: vatRate || 0, description: description || "",
      due_at: due.toISOString().split("T")[0], status: "draft", validated_by_human: false,
    }).select().single();

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });

    return NextResponse.json({
      success: true, invoice,
      payment: { method: "bank_transfer", instructions: `Virement avec référence ${reference}` }
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

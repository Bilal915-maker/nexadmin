export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

function getAdmin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}

/**
 * POST /api/leads
 * Capture un prospect venant de la landing page publique.
 * Appelé par le JS des boutons "Demander une démo" / "Demande sectorielle".
 */
export async function POST(req: NextRequest) {
  try {
    const supabaseAdmin = getAdmin();
    const body = await req.json();
    const { name, email, phone, company, sector, message, source } = body;

    if (!email && !phone) {
      return NextResponse.json(
        { error: "Email ou téléphone requis" },
        { status: 400 }
      );
    }

    const { data, error } = await supabaseAdmin
      .from("leads")
      .insert({
        name: name || null,
        email: email || null,
        phone: phone || null,
        company: company || null,
        sector: sector || null,
        message: message || null,
        source: source || "landing",
        status: "new",
      })
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, lead: data });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message ?? "Erreur inconnue" },
      { status: 500 }
    );
  }
}

/**
 * GET /api/leads
 * Liste les prospects captés (pour toi, pas pour le public).
 * Protégé par une clé simple en query param en attendant un vrai auth admin.
 */
export async function GET(req: NextRequest) {
  try {
    const key = req.nextUrl.searchParams.get("key");
    if (key !== process.env.ADMIN_ACCESS_KEY) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }

    const supabaseAdmin = getAdmin();
    const { data, error } = await supabaseAdmin
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, leads: data });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message ?? "Erreur inconnue" },
      { status: 500 }
    );
  }
}

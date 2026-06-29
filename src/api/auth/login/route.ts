import { NextRequest, NextResponse } from "next/server";
import { supabase, supabaseAdmin, getTenantFromAuth } from "@/lib/supabase";

/**
 * POST /api/auth/login
 * Connecte un client existant et renvoie ses infos tenant
 */
export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email et mot de passe requis" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error || !data.user || !data.session) {
      return NextResponse.json(
        { error: "Email ou mot de passe incorrect" },
        { status: 401 }
      );
    }

    const tenantData = await getTenantFromAuth(data.user.id);

    if (!tenantData) {
      return NextResponse.json(
        { error: "Aucune entreprise associée à ce compte" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      session: {
        access_token: data.session.access_token,
        refresh_token: data.session.refresh_token,
        expires_at: data.session.expires_at,
      },
      tenant: tenantData.tenants,
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message ?? "Erreur inconnue" },
      { status: 500 }
    );
  }
}

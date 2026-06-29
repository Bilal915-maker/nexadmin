import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

/**
 * POST /api/auth/signup
 * Crée un nouveau compte client NexAdmin :
 * 1. Crée l'utilisateur dans Supabase Auth
 * 2. Crée la ligne tenant dans public.tenants
 * 3. Crée le schéma PostgreSQL isolé pour ce client
 * 4. Lie l'utilisateur au tenant
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password, companyName, sector, plan, phone, siret } = body;

    if (!email || !password || !companyName) {
      return NextResponse.json(
        { error: "Email, mot de passe et nom d'entreprise requis" },
        { status: 400 }
      );
    }

    // 1. Créer l'utilisateur dans Supabase Auth
    const { data: authData, error: authError } =
      await supabaseAdmin.auth.admin.createUser({
        email,
        password,
        email_confirm: true, // auto-confirme, pas besoin de validation email pour démarrer vite
      });

    if (authError || !authData.user) {
      return NextResponse.json(
        { error: authError?.message ?? "Erreur création utilisateur" },
        { status: 400 }
      );
    }

    const authUserId = authData.user.id;

    // 2. Créer le tenant
    const schemaSlug = companyName
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // enlève les accents
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "")
      .substring(0, 40);

    const schemaName = `tenant_${schemaSlug}_${Date.now().toString(36)}`;

    const { data: tenant, error: tenantError } = await supabaseAdmin
      .from("tenants")
      .insert({
        company_name: companyName,
        sector: sector ?? "BTP",
        plan: plan ?? "starter",
        email,
        phone: phone ?? null,
        siret: siret ?? null,
        subscription_status: "trial",
        schema_name: schemaName,
      })
      .select()
      .single();

    if (tenantError || !tenant) {
      // rollback: supprime l'utilisateur auth créé si le tenant échoue
      await supabaseAdmin.auth.admin.deleteUser(authUserId);
      return NextResponse.json(
        { error: tenantError?.message ?? "Erreur création tenant" },
        { status: 400 }
      );
    }

    // 3. Créer le schéma isolé pour ce client
    const { error: schemaError } = await supabaseAdmin.rpc(
      "create_tenant_schema",
      { tenant_id: tenant.id, schema_name: schemaName }
    );

    if (schemaError) {
      return NextResponse.json(
        { error: `Tenant créé mais schéma échoué: ${schemaError.message}` },
        { status: 500 }
      );
    }

    // 4. Lier l'utilisateur au tenant (owner)
    const { error: linkError } = await supabaseAdmin
      .from("tenant_users")
      .insert({
        tenant_id: tenant.id,
        auth_user_id: authUserId,
        role: "owner",
      });

    if (linkError) {
      return NextResponse.json(
        { error: `Erreur liaison utilisateur: ${linkError.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      tenant: {
        id: tenant.id,
        companyName: tenant.company_name,
        sector: tenant.sector,
        plan: tenant.plan,
        schemaName: tenant.schema_name,
      },
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message ?? "Erreur inconnue" },
      { status: 500 }
    );
  }
}

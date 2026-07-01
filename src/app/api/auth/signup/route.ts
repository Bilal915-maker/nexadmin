export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

function getAdmin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}

export async function POST(req: NextRequest) {
  try {
    const supabaseAdmin = getAdmin();
    const { email, password, companyName, sector } = await req.json();

    if (!email || !password || !companyName) {
      return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 });
    }

    const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email, password, email_confirm: true,
    });

    if (authError) return NextResponse.json({ error: authError.message }, { status: 400 });

    const schemaName = "tenant_" + Date.now().toString(36);

    const { data: tenant, error: tenantError } = await supabaseAdmin
      .from("tenants")
      .insert({ company_name: companyName, sector: sector || "BTP", email, plan: "starter", schema_name: schemaName })
      .select().single();

    if (tenantError) return NextResponse.json({ error: tenantError.message }, { status: 400 });

    await supabaseAdmin.from("tenant_users").insert({
      tenant_id: tenant.id,
      auth_user_id: authData.user!.id,
      role: "owner",
    });

    await supabaseAdmin.rpc("create_tenant_schema", {
      tenant_id: tenant.id,
      schema_name: schemaName,
    });

    return NextResponse.json({ success: true, tenant: { id: tenant.id, companyName, schemaName } });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Erreur inconnue" }, { status: 500 });
  }
}

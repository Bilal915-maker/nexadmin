export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return NextResponse.json({ error: error.message }, { status: 401 });
    
    const supabaseAdmin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      { auth: { autoRefreshToken: false, persistSession: false } }
    );
    const { data: tenantUser } = await supabaseAdmin
      .from("tenant_users")
      .select("tenant_id, tenants(*)")
      .eq("auth_user_id", data.user.id)
      .single();

    return NextResponse.json({ success: true, session: data.session, tenant: tenantUser?.tenants });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

export function getTenantClient(schemaName: string) {
  return createClient(supabaseUrl, supabaseServiceKey, {
    db: { schema: schemaName },
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

export async function getTenantFromAuth(authUserId: string) {
  const { data, error } = await supabaseAdmin
    .from("tenant_users")
    .select("tenant_id, tenants(*)")
    .eq("auth_user_id", authUserId)
    .single();
  if (error || !data) return null;
  return data;
}

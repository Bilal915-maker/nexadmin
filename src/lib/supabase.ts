import { createClient } from "@supabase/supabase-js";

import type { SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Clients créés au premier usage : le build ("collect page data") ne plante plus
// quand les variables Supabase ne sont pas définies dans l'environnement de build.
function lazy(factory: () => SupabaseClient): SupabaseClient {
  let client: SupabaseClient | undefined;
  return new Proxy({} as SupabaseClient, {
    get(_, prop) {
      client ??= factory();
      const value = Reflect.get(client, prop);
      return typeof value === "function" ? value.bind(client) : value;
    },
  });
}

export const supabase = lazy(() => createClient(supabaseUrl, supabaseAnonKey));

export const supabaseAdmin = lazy(() =>
  createClient(supabaseUrl, supabaseServiceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  })
);

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

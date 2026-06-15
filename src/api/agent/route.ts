import { NextRequest, NextResponse } from "next/server";
import { processAdminTask } from "../../agents/admin-agent";
import { getTenantFromAuth } from "../../lib/supabase";
import { createClient } from "@supabase/supabase-js";

export const maxDuration = 60;

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }
    const token = authHeader.substring(7);
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);
    if (authError || !user) {
      return NextResponse.json({ error: "Token invalide" }, { status: 401 });
    }
    const tenantData = await getTenantFromAuth(user.id);
    if (!tenantData) {
      return NextResponse.json({ error: "Tenant non trouvé" }, { status: 404 });
    }
    const body = await request.json();
    const { type, input } = body;
    const validTypes = ["generate_quote","generate_invoice","send_reminder","weekly_report","analyze_request","qualify_prospect"];
    if (!type || !validTypes.includes(type)) {
      return NextResponse.json({ error: `Type invalide: ${type}` }, { status: 400 });
    }
    const result = await processAdminTask({
      tenant_id: (tenantData as { tenant_id: string }).tenant_id,
      type,
      input: input ?? {},
    });
    return NextResponse.json(result);
  } catch (error) {
    console.error("Erreur API agent:", error);
    return NextResponse.json({ error: "Erreur interne" }, { status: 500 });
  }
}

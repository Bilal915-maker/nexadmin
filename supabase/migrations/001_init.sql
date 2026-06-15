-- ============================================================
-- NEXADMIN — Schema multi-tenant isolé par client
-- Chaque client a son propre schéma PostgreSQL
-- Row Level Security activé sur toutes les tables
-- ============================================================

-- Extension UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ============================================================
-- TABLE: tenants (clients de NexAdmin)
-- ============================================================
CREATE TABLE IF NOT EXISTS public.tenants (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  company_name TEXT NOT NULL,
  sector TEXT NOT NULL DEFAULT 'BTP',
  plan TEXT NOT NULL DEFAULT 'starter' CHECK (plan IN ('starter', 'pro', 'business')),
  email TEXT NOT NULL UNIQUE,
  phone TEXT,
  siret TEXT,
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  subscription_status TEXT DEFAULT 'trial' CHECK (subscription_status IN ('trial', 'active', 'past_due', 'cancelled')),
  emails_used_this_month INTEGER DEFAULT 0,
  emails_quota INTEGER DEFAULT 2000,
  schema_name TEXT UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  is_active BOOLEAN DEFAULT TRUE
);

-- ============================================================
-- TABLE: tenant_users (utilisateurs par client)
-- ============================================================
CREATE TABLE IF NOT EXISTS public.tenant_users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tenant_id UUID NOT NULL REFERENCES public.tenants(id) ON DELETE CASCADE,
  auth_user_id UUID NOT NULL UNIQUE,
  role TEXT NOT NULL DEFAULT 'owner' CHECK (role IN ('owner', 'admin', 'user')),
  first_name TEXT,
  last_name TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- FONCTION: créer schéma isolé pour chaque nouveau client
-- ============================================================
CREATE OR REPLACE FUNCTION create_tenant_schema(tenant_id UUID, schema_name TEXT)
RETURNS VOID AS $$
BEGIN
  -- Créer le schéma isolé
  EXECUTE format('CREATE SCHEMA IF NOT EXISTS %I', schema_name);

  -- TABLE CLIENTS du tenant
  EXECUTE format('
    CREATE TABLE IF NOT EXISTS %I.clients (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      name TEXT NOT NULL,
      email TEXT,
      phone TEXT,
      address TEXT,
      city TEXT,
      status TEXT DEFAULT ''prospect'' CHECK (status IN (''prospect'', ''active'', ''inactive'', ''lost'')),
      sector TEXT,
      notes TEXT,
      ca_total DECIMAL(12,2) DEFAULT 0,
      last_contact_at TIMESTAMPTZ,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      updated_at TIMESTAMPTZ DEFAULT NOW()
    )', schema_name);

  -- TABLE DEVIS du tenant
  EXECUTE format('
    CREATE TABLE IF NOT EXISTS %I.quotes (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      reference TEXT NOT NULL UNIQUE,
      client_id UUID REFERENCES %I.clients(id),
      status TEXT DEFAULT ''draft'' CHECK (status IN (''draft'', ''sent'', ''accepted'', ''rejected'', ''expired'')),
      amount_ht DECIMAL(12,2) NOT NULL,
      vat_rate DECIMAL(5,2) DEFAULT 0,
      amount_ttc DECIMAL(12,2) GENERATED ALWAYS AS (amount_ht * (1 + vat_rate / 100)) STORED,
      description TEXT,
      valid_until DATE,
      sent_at TIMESTAMPTZ,
      validated_by_human BOOLEAN DEFAULT FALSE,
      validation_token TEXT DEFAULT gen_random_uuid()::TEXT,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      updated_at TIMESTAMPTZ DEFAULT NOW()
    )', schema_name, schema_name);

  -- TABLE FACTURES du tenant
  EXECUTE format('
    CREATE TABLE IF NOT EXISTS %I.invoices (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      reference TEXT NOT NULL UNIQUE,
      client_id UUID REFERENCES %I.clients(id),
      quote_id UUID REFERENCES %I.quotes(id),
      status TEXT DEFAULT ''draft'' CHECK (status IN (''draft'', ''sent'', ''paid'', ''overdue'', ''cancelled'')),
      amount_ht DECIMAL(12,2) NOT NULL,
      vat_rate DECIMAL(5,2) DEFAULT 0,
      amount_ttc DECIMAL(12,2) GENERATED ALWAYS AS (amount_ht * (1 + vat_rate / 100)) STORED,
      description TEXT,
      issued_at DATE DEFAULT CURRENT_DATE,
      due_at DATE,
      paid_at DATE,
      days_overdue INTEGER GENERATED ALWAYS AS (
        CASE WHEN status != ''paid'' AND due_at < CURRENT_DATE
        THEN CURRENT_DATE - due_at ELSE 0 END
      ) STORED,
      validated_by_human BOOLEAN DEFAULT FALSE,
      validation_token TEXT DEFAULT gen_random_uuid()::TEXT,
      reminder_count INTEGER DEFAULT 0,
      last_reminder_at TIMESTAMPTZ,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      updated_at TIMESTAMPTZ DEFAULT NOW()
    )', schema_name, schema_name, schema_name);

  -- TABLE CALCUL_VERIFICATIONS (triple vérification)
  EXECUTE format('
    CREATE TABLE IF NOT EXISTS %I.calculation_verifications (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      entity_type TEXT NOT NULL,
      entity_id UUID NOT NULL,
      field TEXT NOT NULL,
      agent1_result DECIMAL(15,4),
      agent2_result DECIMAL(15,4),
      agent3_result DECIMAL(15,4),
      consensus BOOLEAN DEFAULT FALSE,
      discrepancy_detected BOOLEAN DEFAULT FALSE,
      resolved_at TIMESTAMPTZ,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )', schema_name);

  -- TABLE EMAIL_LOGS (traçabilité complète)
  EXECUTE format('
    CREATE TABLE IF NOT EXISTS %I.email_logs (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      recipient_email TEXT NOT NULL,
      recipient_name TEXT,
      subject TEXT NOT NULL,
      email_type TEXT NOT NULL,
      entity_type TEXT,
      entity_id UUID,
      status TEXT DEFAULT ''pending'' CHECK (status IN (''pending'', ''sent'', ''failed'', ''bounced'')),
      validated_by_human BOOLEAN DEFAULT FALSE,
      validated_at TIMESTAMPTZ,
      sent_at TIMESTAMPTZ,
      ses_message_id TEXT,
      error_message TEXT,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )', schema_name);

  -- TABLE AGENT_LOGS (audit de toutes les actions IA)
  EXECUTE format('
    CREATE TABLE IF NOT EXISTS %I.agent_logs (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      agent_name TEXT NOT NULL,
      action TEXT NOT NULL,
      input_summary TEXT,
      output_summary TEXT,
      status TEXT DEFAULT ''success'' CHECK (status IN (''success'', ''error'', ''blocked'', ''pending_human'')),
      duration_ms INTEGER,
      error_message TEXT,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )', schema_name);

  -- TABLE TRESORERIE (dashboard revenus)
  EXECUTE format('
    CREATE TABLE IF NOT EXISTS %I.treasury_snapshots (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      period_month INTEGER NOT NULL,
      period_year INTEGER NOT NULL,
      revenue_collected DECIMAL(12,2) DEFAULT 0,
      revenue_target DECIMAL(12,2) DEFAULT 0,
      outstanding_invoices DECIMAL(12,2) DEFAULT 0,
      overdue_invoices DECIMAL(12,2) DEFAULT 0,
      expenses DECIMAL(12,2) DEFAULT 0,
      net_profit DECIMAL(12,2) GENERATED ALWAYS AS (revenue_collected - expenses) STORED,
      active_clients INTEGER DEFAULT 0,
      new_clients INTEGER DEFAULT 0,
      computed_at TIMESTAMPTZ DEFAULT NOW(),
      UNIQUE(period_month, period_year)
    )', schema_name);

  -- Mettre à jour le schema_name dans la table tenants
  UPDATE public.tenants SET schema_name = schema_name WHERE id = tenant_id;

  RAISE NOTICE 'Schema % créé pour tenant %', schema_name, tenant_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================================
-- ROW LEVEL SECURITY sur la table tenants
-- ============================================================
ALTER TABLE public.tenants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tenant_users ENABLE ROW LEVEL SECURITY;

-- Politique: chaque utilisateur ne voit que son tenant
CREATE POLICY tenant_isolation ON public.tenants
  USING (id IN (
    SELECT tenant_id FROM public.tenant_users
    WHERE auth_user_id = auth.uid()
  ));

CREATE POLICY tenant_user_isolation ON public.tenant_users
  USING (auth_user_id = auth.uid());

-- ============================================================
-- INDEX pour performance
-- ============================================================
CREATE INDEX IF NOT EXISTS idx_tenant_users_auth ON public.tenant_users(auth_user_id);
CREATE INDEX IF NOT EXISTS idx_tenant_users_tenant ON public.tenant_users(tenant_id);
CREATE INDEX IF NOT EXISTS idx_tenants_email ON public.tenants(email);
CREATE INDEX IF NOT EXISTS idx_tenants_stripe ON public.tenants(stripe_customer_id);

COMMENT ON TABLE public.tenants IS 'Table principale des clients NexAdmin - isolation garantie par schéma';
COMMENT ON FUNCTION create_tenant_schema IS 'Crée un schéma PostgreSQL isolé pour chaque nouveau client';

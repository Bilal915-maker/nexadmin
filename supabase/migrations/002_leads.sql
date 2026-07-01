-- Table de capture des prospects venant de la landing page publique.
-- A exécuter dans Supabase SQL Editor (connexion directe Postgres bloquée depuis le conteneur).

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text,
  email text,
  phone text,
  company text,
  sector text,
  message text,
  source text default 'landing',
  status text default 'new', -- new | contacted | qualified | won | lost
  created_at timestamptz not null default now()
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx on public.leads (status);

-- RLS: seule la service role (utilisée côté serveur par /api/leads) peut lire/écrire.
alter table public.leads enable row level security;

drop policy if exists "service role full access" on public.leads;
create policy "service role full access" on public.leads
  for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');

'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useMemo, useState, type ReactNode } from 'react'
import {
  LIFECYCLE_STATUSES,
  SOURCE_TYPES,
  SPEC_GROUP_LABELS,
  SPEC_GROUPS,
  VALIDATION_STATUSES,
  VISUAL_KINDS,
  type ProductModel,
  type SpecGroupId,
  type ValidationStatus,
} from '@/lib/catalog/types'

interface FamilyMeta {
  slug: string
  name: string
  lines: { slug: string; name: string }[]
}
interface GenMeta {
  slug: string
  family: string
  name: string
  year: number
}

const inputCls = 'w-full rounded-lg border border-white/15 bg-ink px-3 py-2 text-sm outline-none focus:border-cyan-300/60'
const today = () => new Date().toISOString().slice(0, 10)
const slugify = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

function Section({ title, children, hint }: { title: string; children: ReactNode; hint?: string }) {
  return (
    <section className="rounded-2xl border border-white/10 p-5">
      <h2 className="font-display text-lg">{title}</h2>
      {hint && <p className="mt-1 text-xs text-graphite-400">{hint}</p>}
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  )
}

function Field({ label, children, wide }: { label: string; children: ReactNode; wide?: boolean }) {
  return (
    <label className={`block text-xs text-graphite-300 ${wide ? 'md:col-span-2' : ''}`}>
      <span className="mb-1 block">{label}</span>
      {children}
    </label>
  )
}

/** Éditeur générique de listes (ajout, suppression, réordonnancement). */
function Rows<T>({ items, onChange, empty, render, label }: { items: T[]; onChange: (v: T[]) => void; empty: T; render: (item: T, set: (v: T) => void, i: number) => ReactNode; label: string }) {
  return (
    <div className="space-y-2">
      {items.map((it, i) => (
        <div key={i} className="flex items-start gap-2 rounded-xl border border-white/[0.07] p-2">
          <div className="min-w-0 flex-1">{render(it, (v) => onChange(items.map((x, k) => (k === i ? v : x))), i)}</div>
          <div className="flex shrink-0 flex-col gap-1">
            <button type="button" aria-label="Monter" disabled={i === 0} onClick={() => onChange(items.map((x, k) => (k === i - 1 ? items[i] : k === i ? items[i - 1] : x)))} className="rounded border border-white/10 px-1.5 text-xs disabled:opacity-30">↑</button>
            <button type="button" aria-label="Supprimer" onClick={() => onChange(items.filter((_, k) => k !== i))} className="rounded border border-red-400/30 px-1.5 text-xs text-red-300">✕</button>
          </div>
        </div>
      ))}
      <button type="button" onClick={() => onChange([...items, structuredClone(empty)])} className="rounded-full border border-white/15 px-3 py-1 text-xs hover:border-white/40">
        + {label}
      </button>
    </div>
  )
}

const csv = (a: (string | number)[]) => a.join(', ')
const parseList = (s: string) => s.split(',').map((x) => x.trim()).filter(Boolean)
const parseNums = (s: string) => parseList(s).map(Number).filter((n) => Number.isFinite(n) && n > 0)

export function ModelEditor({ initial, families, generations, mode }: { initial: ProductModel; families: FamilyMeta[]; generations: GenMeta[]; mode: 'create' | 'edit' }) {
  const router = useRouter()
  const [m, setM] = useState<ProductModel>(() => structuredClone(initial))
  const [busy, setBusy] = useState(false)
  const [errors, setErrors] = useState<string[]>([])
  const [ok, setOk] = useState<string | null>(null)
  const [visualText, setVisualText] = useState(JSON.stringify(initial.visual.params, null, 2))
  const set = <K extends keyof ProductModel>(k: K, v: ProductModel[K]) => setM((cur) => ({ ...cur, [k]: v }))
  const fam = families.find((f) => f.slug === m.family)
  const gens = useMemo(() => generations.filter((g) => g.family === m.family).sort((a, b) => b.year - a.year), [generations, m.family])
  const hasConfirmedSource = m.sources.some((s) => s.status === 'confirmed' && s.checkedAt)

  const save = async () => {
    setBusy(true)
    setErrors([])
    setOk(null)
    let params: ProductModel['visual']['params']
    try {
      params = JSON.parse(visualText || '{}')
    } catch {
      setBusy(false)
      setErrors(['Paramètres visuels : JSON invalide'])
      return
    }
    const payload: ProductModel = {
      ...m,
      visual: { ...m.visual, params },
      specs: m.specs.map((g) => ({ ...g, label: SPEC_GROUP_LABELS[g.id], items: g.items.filter((i) => i.label && i.value).map((i) => ({ ...i, key: slugify(i.label) })) })).filter((g) => g.items.length),
      status: m.discontinued ? 'discontinued' : m.status,
    }
    const res = await fetch(mode === 'create' ? '/api/admin/models' : `/api/admin/models/${initial.slug}`, {
      method: mode === 'create' ? 'POST' : 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    const data = await res.json().catch(() => ({}))
    setBusy(false)
    if (!res.ok) {
      const details = Array.isArray(data.details) ? data.details.map((d: { path?: string[]; message: string }) => `${d.path?.join('.') ?? ''} : ${d.message}`) : []
      setErrors([data.error ?? 'Erreur', ...details])
      return
    }
    setOk('Fiche enregistrée. Le site public est revalidé.')
    if (data.slug !== initial.slug || mode === 'create') router.replace(`/admin/modeles/${data.slug}`)
    router.refresh()
  }

  const remove = async () => {
    if (!window.confirm(`Supprimer définitivement « ${initial.name} » ? Cette action est journalisée et irréversible.`)) return
    const res = await fetch(`/api/admin/models/${initial.slug}`, { method: 'DELETE' })
    if (res.ok) {
      router.replace('/admin/modeles')
      router.refresh()
    } else setErrors(['Suppression impossible'])
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-display text-3xl font-semibold">{mode === 'create' ? 'Nouvelle fiche' : m.name}</h1>
          {mode === 'edit' && (
            <Link href={`/${initial.family}/${initial.slug}`} className="text-xs text-cyan-300 hover:underline" target="_blank">
              Voir la fiche publique ↗
            </Link>
          )}
        </div>
        <div className="flex gap-2">
          {mode === 'edit' && (
            <button type="button" onClick={remove} className="rounded-full border border-red-400/40 px-4 py-2 text-sm text-red-300 hover:bg-red-400/10">
              Supprimer
            </button>
          )}
          <button type="button" onClick={save} disabled={busy} className="btn-primary disabled:opacity-60">
            {busy ? 'Enregistrement…' : 'Enregistrer'}
          </button>
        </div>
      </div>
      {errors.length > 0 && (
        <div role="alert" className="rounded-2xl border border-red-400/40 bg-red-400/5 p-4 text-sm text-red-200">
          <ul className="list-disc pl-5">{errors.map((e, i) => <li key={i}>{e}</li>)}</ul>
        </div>
      )}
      {ok && <p role="status" className="rounded-2xl border border-emerald-400/40 bg-emerald-400/5 p-4 text-sm text-emerald-200">{ok}</p>}

      <Section title="Identification">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Field label="Nom officiel">
            <input className={inputCls} value={m.name} onChange={(e) => set('name', e.target.value)} />
          </Field>
          <Field label="Slug (URL)">
            <div className="flex gap-2">
              <input className={inputCls} value={m.slug} onChange={(e) => set('slug', e.target.value)} />
              <button type="button" onClick={() => set('slug', slugify(m.name))} className="shrink-0 rounded-lg border border-white/15 px-2 text-xs">Générer</button>
            </div>
          </Field>
          <Field label="Famille">
            <select className={inputCls} value={m.family} onChange={(e) => setM((c) => ({ ...c, family: e.target.value as ProductModel['family'], line: families.find((f) => f.slug === e.target.value)?.lines[0]?.slug ?? '', generation: '' }))}>
              {families.map((f) => <option key={f.slug} value={f.slug}>{f.name}</option>)}
            </select>
          </Field>
          <Field label="Gamme">
            <select className={inputCls} value={m.line} onChange={(e) => set('line', e.target.value)}>
              {fam?.lines.map((l) => <option key={l.slug} value={l.slug}>{l.name}</option>)}
            </select>
          </Field>
          <Field label="Génération" wide>
            <select className={inputCls} value={m.generation} onChange={(e) => set('generation', e.target.value)}>
              <option value="">— choisir —</option>
              {gens.map((g) => <option key={g.slug} value={g.slug}>{g.year} · {g.name}</option>)}
            </select>
            <Link href="/admin/generations" className="mt-1 inline-block text-[11px] text-cyan-300 hover:underline">Créer une génération</Link>
          </Field>
          <Field label="Date d’annonce (AAAA-MM-JJ)"><input className={inputCls} value={m.announced ?? ''} onChange={(e) => set('announced', e.target.value || undefined)} /></Field>
          <Field label="Date de commercialisation"><input className={inputCls} value={m.released ?? ''} onChange={(e) => set('released', e.target.value || undefined)} /></Field>
          <Field label="Date de retrait (vide = commercialisé)"><input className={inputCls} value={m.discontinued ?? ''} onChange={(e) => set('discontinued', e.target.value || undefined)} /></Field>
          <Field label="Statut">
            <select className={inputCls} value={m.status} onChange={(e) => set('status', e.target.value as ProductModel['status'])}>
              {LIFECYCLE_STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </Field>
          <Field label="Précision sur le statut" wide><input className={inputCls} value={m.statusNote ?? ''} onChange={(e) => set('statusNote', e.target.value || undefined)} /></Field>
          <Field label="Résumé" wide><textarea className={inputCls} rows={2} value={m.summary} onChange={(e) => set('summary', e.target.value)} /></Field>
          <Field label="Points clés (un par ligne)" wide>
            <textarea className={inputCls} rows={3} value={m.highlights.join('\n')} onChange={(e) => set('highlights', e.target.value.split('\n').map((x) => x.trim()).filter(Boolean))} />
          </Field>
          <Field label="Alias (séparés par des virgules)"><input className={inputCls} value={csv(m.aliases)} onChange={(e) => set('aliases', parseList(e.target.value))} /></Field>
          <Field label="Identifiants matériels (iPhone16,1…)"><input className={inputCls} value={csv(m.identifiers)} onChange={(e) => set('identifiers', parseList(e.target.value))} /></Field>
        </div>
      </Section>

      <Section title="Caractéristiques structurées" hint="Utilisées pour les filtres et le comparateur.">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Field label="Stockage (Go, virgules)"><input className={inputCls} defaultValue={csv(m.storageGB)} onBlur={(e) => set('storageGB', parseNums(e.target.value))} /></Field>
          <Field label="Mémoire vive documentée (Go)"><input className={inputCls} defaultValue={csv(m.ramGB)} onBlur={(e) => set('ramGB', parseNums(e.target.value))} /></Field>
          <Field label="Puces"><input className={inputCls} defaultValue={csv(m.chips)} onBlur={(e) => set('chips', parseList(e.target.value))} /></Field>
          <Field label="Taille d’écran (pouces)"><input className={inputCls} defaultValue={m.screenInches ?? ''} onBlur={(e) => set('screenInches', e.target.value ? Number(e.target.value.replace(',', '.')) : undefined)} /></Field>
          <Field label="Tailles (boîtiers…)"><input className={inputCls} defaultValue={csv(m.sizes)} onBlur={(e) => set('sizes', parseList(e.target.value))} /></Field>
          <Field label="Connectivité (Wi-Fi, Wi-Fi + Cellular…)"><input className={inputCls} defaultValue={csv(m.connectivity)} onBlur={(e) => set('connectivity', parseList(e.target.value))} /></Field>
          <Field label="Connecteur"><input className={inputCls} value={m.connector ?? ''} onChange={(e) => set('connector', e.target.value || undefined)} /></Field>
          <Field label="Système d’origine"><input className={inputCls} value={m.os ?? ''} onChange={(e) => set('os', e.target.value || undefined)} /></Field>
        </div>
      </Section>

      <Section title="Couleurs officielles" hint="Nom officiel + approximation hexadécimale (jamais présentée comme officielle).">
        <Rows
          label="Ajouter une couleur"
          items={m.colors}
          onChange={(v) => set('colors', v)}
          empty={{ name: '', hex: '#999999' }}
          render={(c, setC) => (
            <div className="grid grid-cols-1 gap-2 md:grid-cols-[1.4fr_auto_1fr_1fr]">
              <input className={inputCls} placeholder="Nom officiel" value={c.name} onChange={(e) => setC({ ...c, name: e.target.value })} />
              <input type="color" aria-label="Teinte approximative" value={c.hex} onChange={(e) => setC({ ...c, hex: e.target.value })} className="h-9 w-14 rounded border border-white/15 bg-transparent" />
              <input className={inputCls} placeholder="Finition" value={c.finish ?? ''} onChange={(e) => setC({ ...c, finish: e.target.value || undefined })} />
              <input className={inputCls} placeholder="Note" value={c.note ?? ''} onChange={(e) => setC({ ...c, note: e.target.value || undefined })} />
            </div>
          )}
        />
      </Section>

      <Section title="Dimensions et poids" hint="Convention Apple : H × L × P (mm), poids en grammes.">
        <Rows
          label="Ajouter une ligne de dimensions"
          items={m.dimensions}
          onChange={(v) => set('dimensions', v)}
          empty={{}}
          render={(d, setD) => (
            <div className="grid grid-cols-2 gap-2 md:grid-cols-5">
              <input className={inputCls} placeholder="Libellé (taille…)" value={d.label ?? ''} onChange={(e) => setD({ ...d, label: e.target.value || undefined })} />
              {(['heightMm', 'widthMm', 'depthMm', 'weightG'] as const).map((k) => (
                <input key={k} className={inputCls} placeholder={k} inputMode="decimal" value={d[k] ?? ''} onChange={(e) => setD({ ...d, [k]: e.target.value ? Number(e.target.value.replace(',', '.')) : undefined })} />
              ))}
            </div>
          )}
        />
      </Section>

      <Section title="Prix de lancement">
        <Rows
          label="Ajouter un prix"
          items={m.prices}
          onChange={(v) => set('prices', v)}
          empty={{ market: 'US', currency: 'USD', amount: 0, date: today(), status: 'unverified' }}
          render={(p, setP) => (
            <div className="grid grid-cols-2 gap-2 md:grid-cols-6">
              <input className={inputCls} placeholder="Marché" value={p.market} onChange={(e) => setP({ ...p, market: e.target.value.toUpperCase() })} />
              <input className={inputCls} placeholder="Devise" value={p.currency} onChange={(e) => setP({ ...p, currency: e.target.value.toUpperCase() })} />
              <input className={inputCls} placeholder="Montant" inputMode="decimal" value={p.amount || ''} onChange={(e) => setP({ ...p, amount: Number(e.target.value.replace(',', '.')) })} />
              <input className={inputCls} placeholder="Configuration" value={p.config ?? ''} onChange={(e) => setP({ ...p, config: e.target.value || undefined })} />
              <input className={inputCls} placeholder="Date" value={p.date} onChange={(e) => setP({ ...p, date: e.target.value })} />
              <select className={inputCls} value={p.status} onChange={(e) => setP({ ...p, status: e.target.value as ValidationStatus })}>
                {VALIDATION_STATUSES.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
          )}
        />
      </Section>

      <Section title="Variantes matérielles (numéros de modèle)">
        <Rows
          label="Ajouter une variante"
          items={m.variants}
          onChange={(v) => set('variants', v)}
          empty={{ modelNumber: '', label: '' }}
          render={(v, setV) => (
            <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
              <input className={inputCls} placeholder="Axxxx" value={v.modelNumber} onChange={(e) => setV({ ...v, modelNumber: e.target.value.trim() })} />
              <input className={inputCls} placeholder="Libellé" value={v.label} onChange={(e) => setV({ ...v, label: e.target.value })} />
              <input className={inputCls} placeholder="Région" value={v.region ?? ''} onChange={(e) => setV({ ...v, region: e.target.value || undefined })} />
              <input className={inputCls} placeholder="Connectivité" value={v.connectivity ?? ''} onChange={(e) => setV({ ...v, connectivity: e.target.value || undefined })} />
            </div>
          )}
        />
      </Section>

      <Section title="Spécifications détaillées" hint="Groupes adaptés à la catégorie : seuls les groupes renseignés sont affichés.">
        <Rows
          label="Ajouter un groupe"
          items={m.specs}
          onChange={(v) => set('specs', v)}
          empty={{ id: 'other', label: SPEC_GROUP_LABELS.other, items: [{ key: '', label: '', value: '' }] }}
          render={(g, setG) => (
            <div className="space-y-2">
              <select className={inputCls} value={g.id} onChange={(e) => setG({ ...g, id: e.target.value as SpecGroupId, label: SPEC_GROUP_LABELS[e.target.value as SpecGroupId] })}>
                {SPEC_GROUPS.map((id) => <option key={id} value={id}>{SPEC_GROUP_LABELS[id]}</option>)}
              </select>
              <Rows
                label="Ajouter une caractéristique"
                items={g.items}
                onChange={(items) => setG({ ...g, items })}
                empty={{ key: '', label: '', value: '' }}
                render={(it, setIt) => (
                  <div className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_2fr]">
                    <input className={inputCls} placeholder="Libellé" value={it.label} onChange={(e) => setIt({ ...it, label: e.target.value })} />
                    <input className={inputCls} placeholder="Valeur (« Non documenté » si inconnu)" value={it.value} onChange={(e) => setIt({ ...it, value: e.target.value })} />
                  </div>
                )}
              />
            </div>
          )}
        />
      </Section>

      <Section title="Compatibilités" hint="Slugs des fiches compatibles, séparés par des virgules.">
        <input className={inputCls} defaultValue={m.compatibility.map((c) => c.target).join(', ')} onBlur={(e) => set('compatibility', parseList(e.target.value).map((target) => ({ target })))} />
      </Section>

      <Section title="Images autorisées" hint="Uniquement des images dont la licence permet l’usage ; crédit et licence obligatoires.">
        <Rows
          label="Ajouter une image"
          items={m.images}
          onChange={(v) => set('images', v)}
          empty={{ url: '', alt: '', license: '', credit: '' }}
          render={(im, setIm) => (
            <div className="grid grid-cols-1 gap-2 md:grid-cols-5">
              <input className={inputCls} placeholder="URL https://…" value={im.url} onChange={(e) => setIm({ ...im, url: e.target.value })} />
              <input className={inputCls} placeholder="Texte alternatif" value={im.alt} onChange={(e) => setIm({ ...im, alt: e.target.value })} />
              <input className={inputCls} placeholder="Licence" value={im.license} onChange={(e) => setIm({ ...im, license: e.target.value })} />
              <input className={inputCls} placeholder="Crédit" value={im.credit} onChange={(e) => setIm({ ...im, credit: e.target.value })} />
              <input className={inputCls} placeholder="Couleur associée" value={im.colorName ?? ''} onChange={(e) => setIm({ ...im, colorName: e.target.value || undefined })} />
            </div>
          )}
        />
      </Section>

      <Section title="Modèles 3D" hint="« Exact » uniquement pour un modèle fidèle provenant d’une source autorisée.">
        <Rows
          label="Ajouter un modèle 3D"
          items={m.assets3d}
          onChange={(v) => set('assets3d', v)}
          empty={{ url: '', format: 'glb', license: '', credit: '', isExact: false }}
          render={(a, setA) => (
            <div className="grid grid-cols-1 gap-2 md:grid-cols-6">
              <input className={inputCls} placeholder="URL" value={a.url} onChange={(e) => setA({ ...a, url: e.target.value })} />
              <input className={inputCls} placeholder="Format" value={a.format} onChange={(e) => setA({ ...a, format: e.target.value })} />
              <input className={inputCls} placeholder="Licence" value={a.license} onChange={(e) => setA({ ...a, license: e.target.value })} />
              <input className={inputCls} placeholder="Crédit" value={a.credit} onChange={(e) => setA({ ...a, credit: e.target.value })} />
              <label className="flex items-center gap-2 text-xs"><input type="checkbox" checked={a.isExact} onChange={(e) => setA({ ...a, isExact: e.target.checked })} /> Exact</label>
              <input className={inputCls} placeholder="Notes" value={a.notes ?? ''} onChange={(e) => setA({ ...a, notes: e.target.value || undefined })} />
            </div>
          )}
        />
      </Section>

      <Section title="Sources" hint="Marquer une source « vérifiée » uniquement après l’avoir consultée : la date du jour est enregistrée.">
        <Rows
          label="Ajouter une source"
          items={m.sources}
          onChange={(v) => set('sources', v)}
          empty={{ url: '', type: 'apple-specs', title: '', status: 'unverified' }}
          render={(s, setS) => (
            <div className="space-y-2">
              <div className="grid grid-cols-1 gap-2 md:grid-cols-[2fr_1fr_2fr]">
                <input className={inputCls} placeholder="URL" value={s.url} onChange={(e) => setS({ ...s, url: e.target.value })} />
                <select className={inputCls} value={s.type} onChange={(e) => setS({ ...s, type: e.target.value as typeof s.type })}>
                  {SOURCE_TYPES.map((t) => <option key={t}>{t}</option>)}
                </select>
                <input className={inputCls} placeholder="Titre" value={s.title} onChange={(e) => setS({ ...s, title: e.target.value })} />
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <select className="rounded-lg border border-white/15 bg-ink px-2 py-1" value={s.status} onChange={(e) => setS({ ...s, status: e.target.value as ValidationStatus })}>
                  {VALIDATION_STATUSES.map((v) => <option key={v}>{v}</option>)}
                </select>
                <input className="rounded-lg border border-white/15 bg-ink px-2 py-1" placeholder="Vérifiée le (AAAA-MM-JJ)" value={s.checkedAt ?? ''} onChange={(e) => setS({ ...s, checkedAt: e.target.value || undefined })} />
                <button type="button" onClick={() => setS({ ...s, status: 'confirmed', checkedAt: today() })} className="rounded-full border border-emerald-400/40 px-3 py-1 text-emerald-300">
                  Marquer vérifiée aujourd’hui
                </button>
                <input className="min-w-40 flex-1 rounded-lg border border-white/15 bg-ink px-2 py-1" placeholder="Note" value={s.note ?? ''} onChange={(e) => setS({ ...s, note: e.target.value || undefined })} />
              </div>
            </div>
          )}
        />
      </Section>

      <Section title="Validation de la fiche">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Field label="Statut de validation">
            <select className={inputCls} value={m.validation.status} onChange={(e) => set('validation', { ...m.validation, status: e.target.value as ValidationStatus })}>
              {VALIDATION_STATUSES.map((s) => (
                <option key={s} value={s} disabled={s === 'confirmed' && !hasConfirmedSource}>
                  {s}
                  {s === 'confirmed' && !hasConfirmedSource ? ' (nécessite une source vérifiée datée)' : ''}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Date de revue">
            <div className="flex gap-2">
              <input className={inputCls} value={m.validation.reviewedAt ?? ''} onChange={(e) => set('validation', { ...m.validation, reviewedAt: e.target.value || undefined })} />
              <button type="button" onClick={() => set('validation', { ...m.validation, reviewedAt: today() })} className="shrink-0 rounded-lg border border-white/15 px-2 text-xs">Aujourd’hui</button>
            </div>
          </Field>
          <Field label="Notes de validation (une par ligne)" wide>
            <textarea className={inputCls} rows={3} value={m.validation.notes.join('\n')} onChange={(e) => set('validation', { ...m.validation, notes: e.target.value.split('\n').map((x) => x.trim()).filter(Boolean) })} />
          </Field>
        </div>
      </Section>

      <Section title="Représentation procédurale" hint="Type de générateur 3D/2D et paramètres de forme (JSON).">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-[14rem_1fr]">
          <Field label="Type">
            <select className={inputCls} value={m.visual.kind} onChange={(e) => set('visual', { ...m.visual, kind: e.target.value as ProductModel['visual']['kind'] })}>
              {VISUAL_KINDS.map((k) => <option key={k}>{k}</option>)}
            </select>
          </Field>
          <Field label="Paramètres (JSON)">
            <textarea className={`${inputCls} font-mono`} rows={4} value={visualText} onChange={(e) => setVisualText(e.target.value)} />
          </Field>
        </div>
      </Section>

      <div className="flex justify-end">
        <button type="button" onClick={save} disabled={busy} className="btn-primary disabled:opacity-60">
          {busy ? 'Enregistrement…' : 'Enregistrer'}
        </button>
      </div>
    </div>
  )
}

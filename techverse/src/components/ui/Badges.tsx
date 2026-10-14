import { LIFECYCLE_LABEL, VALIDATION_HELP, VALIDATION_LABEL } from '@/lib/format'
import type { LifecycleStatus, ValidationStatus } from '@/lib/catalog/types'

const LIFECYCLE_STYLE: Record<LifecycleStatus, string> = {
  current: 'border-emerald-400/40 text-emerald-300',
  discontinued: 'border-graphite-400/50 text-graphite-200',
  announced: 'border-cyan-300/50 text-cyan-300',
}

const VALIDATION_STYLE: Record<ValidationStatus, string> = {
  confirmed: 'border-emerald-400/40 text-emerald-300',
  reported: 'border-amber-300/50 text-amber-200',
  unverified: 'border-volt-300/50 text-volt-300',
}

export function StatusBadge({ status, light = false }: { status: LifecycleStatus; light?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${light ? 'border-ink/15 text-ink/70' : LIFECYCLE_STYLE[status]}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${status === 'current' ? 'bg-emerald-400' : status === 'announced' ? 'bg-cyan-300' : 'bg-graphite-400'}`} aria-hidden />
      {LIFECYCLE_LABEL[status]}
    </span>
  )
}

export function ValidationBadge({ status, light = false }: { status: ValidationStatus; light?: boolean }) {
  return (
    <span
      title={VALIDATION_HELP[status]}
      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${light ? 'border-ink/15 text-ink/70' : VALIDATION_STYLE[status]}`}
    >
      {status === 'confirmed' ? '✓' : status === 'reported' ? '◐' : '○'} {VALIDATION_LABEL[status]}
    </span>
  )
}

export function Swatches({ colors, max = 8, size = 'sm' }: { colors: { name: string; hex: string }[]; max?: number; size?: 'sm' | 'md' }) {
  const dim = size === 'sm' ? 'h-3.5 w-3.5' : 'h-5 w-5'
  return (
    <span className="inline-flex items-center gap-1" aria-label={`Finitions : ${colors.map((c) => c.name).join(', ')}`}>
      {colors.slice(0, max).map((c) => (
        <span key={c.name} title={c.name} className={`${dim} rounded-full border border-white/25`} style={{ background: c.hex }} />
      ))}
      {colors.length > max && <span className="text-[11px] text-graphite-300">+{colors.length - max}</span>}
    </span>
  )
}

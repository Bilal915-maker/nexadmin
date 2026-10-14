import Link from 'next/link'
import { DeviceSilhouette } from '@/components/silhouette/DeviceSilhouette'
import { StatusBadge, Swatches } from '@/components/ui/Badges'
import { usPrice } from '@/lib/catalog/query'
import type { ProductModel } from '@/lib/catalog/types'
import { formatPrice } from '@/lib/format'
import { productHref } from '@/lib/routes'

export function ProductCard({ model, variant = 'default', light = false }: { model: ProductModel; variant?: 'default' | 'compact'; light?: boolean }) {
  const year = (model.released ?? model.announced)?.slice(0, 4)
  const price = usPrice(model)
  return (
    <Link
      href={productHref(model)}
      className={`group relative flex flex-col overflow-hidden rounded-3xl border transition duration-500 hover:-translate-y-1 ${
        light ? 'border-ink/10 bg-white hover:border-ink/25' : 'border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.06]'
      }`}
    >
      <div className={`relative flex items-center justify-center ${variant === 'compact' ? 'h-32 p-4 sm:h-36 sm:p-5' : 'h-32 p-4 sm:h-52 sm:p-7'}`}>
        <div className="pointer-events-none absolute inset-x-10 bottom-4 h-6 rounded-full bg-black/40 blur-xl" aria-hidden />
        <DeviceSilhouette model={model} className="relative h-full w-full transition duration-700 group-hover:scale-[1.04]" />
      </div>
      <div className={`flex flex-1 flex-col gap-2 border-t px-3.5 py-3.5 sm:px-5 sm:py-4 ${light ? 'border-ink/10' : 'border-white/[0.07]'}`}>
        <div className="flex flex-wrap items-center justify-between gap-1.5 text-[11px]">
          <span className={light ? 'text-ink/60' : 'text-graphite-300'}>{year ?? 'Date non documentée'}</span>
          <StatusBadge status={model.status} light={light} />
        </div>
        <h3 className={`font-display text-[13px] font-semibold leading-snug sm:text-[15px] ${light ? 'text-ink' : 'text-white'}`}>{model.name}</h3>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-1">
          {model.colors.length > 0 ? <Swatches colors={model.colors} max={6} /> : <span className="text-[11px] text-graphite-400">Couleurs non documentées</span>}
          {price != null && <span className={`text-xs ${light ? 'text-ink/70' : 'text-graphite-200'}`}>{formatPrice({ amount: price, currency: 'USD' })}</span>}
        </div>
      </div>
      {model.validation.status === 'reported' && (
        <span className="absolute right-3 top-3 rounded-full border border-amber-300/40 bg-ink/70 px-2 py-0.5 text-[10px] text-amber-200">Presse</span>
      )}
    </Link>
  )
}

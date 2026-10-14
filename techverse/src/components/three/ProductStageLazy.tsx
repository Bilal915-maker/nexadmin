'use client'

import dynamic from 'next/dynamic'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import type { StageModel } from './ProductStage'

const ProductStage = dynamic(() => import('./ProductStage'), { ssr: false })

/**
 * Charge la scène 3D à la demande (lorsqu'elle approche de l'écran) et seulement si WebGL
 * est disponible. Sinon, la représentation SVG fournie en `fallback` reste affichée.
 */
export function ProductStageLazy({ model, fallback }: { model: StageModel; fallback: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [mode, setMode] = useState<'fallback' | 'loading' | 'ready' | 'unsupported'>('fallback')
  const [requested, setRequested] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let ok = false
    try {
      const c = document.createElement('canvas')
      ok = !!(c.getContext('webgl2') || c.getContext('webgl'))
    } catch {
      ok = false
    }
    if (!ok) {
      setMode('unsupported')
      return
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRequested(true)
          setMode('loading')
          io.disconnect()
        }
      },
      { rootMargin: '200px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className="relative h-full w-full">
      {mode !== 'ready' && (
        <div className="absolute inset-0 flex flex-col">
          <div className="flex min-h-0 flex-1 items-center justify-center p-8">{fallback}</div>
          {mode === 'loading' && <p className="pb-4 text-center text-xs text-graphite-300">Chargement de la scène 3D…</p>}
          {mode === 'unsupported' && (
            <p className="pb-4 text-center text-xs text-graphite-300">WebGL indisponible : représentation 2D schématique affichée.</p>
          )}
        </div>
      )}
      {requested && (
        <div className={`absolute inset-0 transition-opacity duration-700 ${mode === 'ready' ? 'opacity-100' : 'opacity-0'}`}>
          <ProductStage model={model} onReady={() => setMode('ready')} />
        </div>
      )}
    </div>
  )
}

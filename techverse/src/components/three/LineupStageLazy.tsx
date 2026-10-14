'use client'

import dynamic from 'next/dynamic'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import type { StageModel } from './ProductStage'

const LineupStage = dynamic(() => import('./LineupStage'), { ssr: false })

export function LineupStageLazy({ models, fallback }: { models: StageModel[]; fallback: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState(false)
  const [webgl, setWebgl] = useState(true)
  useEffect(() => {
    try {
      const c = document.createElement('canvas')
      setWebgl(!!(c.getContext('webgl2') || c.getContext('webgl')))
    } catch {
      setWebgl(false)
    }
  }, [])
  return (
    <div ref={ref} className="relative h-full w-full">
      {!show || !webgl ? (
        <div className="flex h-full flex-col items-center justify-center gap-4">
          {fallback}
          {webgl ? (
            <button type="button" className="btn-ghost" onClick={() => setShow(true)}>
              Afficher la comparaison 3D
            </button>
          ) : (
            <p className="text-xs text-graphite-400">WebGL indisponible : comparaison 2D à l’échelle.</p>
          )}
        </div>
      ) : (
        <LineupStage models={models} />
      )}
    </div>
  )
}

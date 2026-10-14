'use client'

import { gsap } from 'gsap'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import type { ColorFinish, Dimensions, Visual } from '@/lib/catalog/types'
import { buildRig, type DeviceRig, type ViewName } from './builders'
import { createStudio, fitDistance, prefersReducedMotion, type Studio } from './studio'

export interface StageModel {
  name: string
  visual: Visual
  dimensions: Dimensions[]
  colors: ColorFinish[]
}

const VIEW_LABELS: Record<ViewName, string> = { front: 'Face', back: 'Dos', side: 'Profil', detail: 'Gros plan' }

export default function ProductStage({ model, onReady }: { model: StageModel; onReady?: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const ctx = useRef<{ studio: Studio; rig: DeviceRig; controls: OrbitControls; center: THREE.Vector3; radius: number } | null>(null)
  const [colorIdx, setColorIdx] = useState(0)
  const [view, setView] = useState<ViewName>('front')
  const [explode, setExplode] = useState(0)
  const [autoRotate, setAutoRotate] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [explodeLabel, setExplodeLabel] = useState<string | null>(null)
  const reduced = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    reduced.current = prefersReducedMotion()
    let studio: Studio
    try {
      studio = createStudio(canvas)
    } catch (e) {
      setError('Impossible d’initialiser WebGL sur cet appareil.')
      return
    }
    const rig = buildRig({ visual: model.visual, dimensions: model.dimensions, colorHex: model.colors[0]?.hex ?? '#b0b2b8' })
    studio.scene.add(rig.root)
    setExplodeLabel(rig.explodeLabel ?? null)

    const box = new THREE.Box3().setFromObject(rig.root)
    const sphere = box.getBoundingSphere(new THREE.Sphere())
    const center = sphere.center.clone()
    studio.ground.position.y = box.min.y - 0.002
    // Plans de découpe adaptés à la taille de l'objet (évite le z-fighting sur les petits détails)
    studio.camera.near = Math.max(sphere.radius * 0.02, 0.001)
    studio.camera.far = sphere.radius * 60
    studio.camera.updateProjectionMatrix()
    const controls = new OrbitControls(studio.camera, canvas)
    controls.enableDamping = true
    controls.dampingFactor = 0.08
    controls.enablePan = false
    controls.target.copy(center)
    controls.minDistance = sphere.radius * 1.2
    controls.maxDistance = sphere.radius * 6
    controls.autoRotate = !reduced.current
    controls.autoRotateSpeed = 0.9
    const dist = fitDistance(sphere.radius, studio.camera)
    const dir = rig.views.front.clone().normalize()
    studio.camera.position.copy(center).addScaledVector(dir, dist)
    controls.update()

    // Apparition progressive
    if (!reduced.current) {
      rig.root.scale.setScalar(0.88)
      rig.root.rotation.y = -0.6
      gsap.to(rig.root.scale, { x: 1, y: 1, z: 1, duration: 1.4, ease: 'expo.out' })
      gsap.to(rig.root.rotation, { y: 0, duration: 1.8, ease: 'expo.out' })
    }
    const off = studio.onFrame(() => controls.update())
    ctx.current = { studio, rig, controls, center, radius: sphere.radius }
    onReady?.()

    const stopAuto = () => setAutoRotate(false)
    controls.addEventListener('start', stopAuto)
    return () => {
      controls.removeEventListener('start', stopAuto)
      off()
      controls.dispose()
      rig.dispose()
      studio.dispose()
      ctx.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const c = ctx.current
    if (c) c.controls.autoRotate = autoRotate && !reduced.current
  }, [autoRotate])

  useEffect(() => {
    const hex = model.colors[colorIdx]?.hex
    if (hex) ctx.current?.rig.setColor(hex)
  }, [colorIdx, model.colors])

  useEffect(() => {
    const c = ctx.current
    if (!c) return
    const state = { t: explode }
    const prev = (c.rig as DeviceRig & { _t?: number })._t ?? 0
    state.t = prev
    if (reduced.current) {
      c.rig.setExplode(explode)
      ;(c.rig as DeviceRig & { _t?: number })._t = explode
      return
    }
    const tw = gsap.to(state, {
      t: explode,
      duration: 1.1,
      ease: 'power3.inOut',
      onUpdate: () => {
        c.rig.setExplode(state.t)
        ;(c.rig as DeviceRig & { _t?: number })._t = state.t
      },
    })
    return () => {
      tw.kill()
    }
  }, [explode])

  const goTo = (v: ViewName) => {
    setView(v)
    const c = ctx.current
    if (!c) return
    setAutoRotate(false)
    const isDetail = v === 'detail'
    const target = isDetail ? c.rig.detailTarget.clone().add(c.rig.root.position) : c.center.clone()
    const dist = fitDistance(c.radius, c.studio.camera) * (isDetail ? 0.42 : 1)
    const dir = c.rig.views[v].clone().normalize()
    const pos = target.clone().addScaledVector(dir, dist)
    if (reduced.current) {
      c.studio.camera.position.copy(pos)
      c.controls.target.copy(target)
      c.controls.update()
      return
    }
    gsap.to(c.studio.camera.position, { x: pos.x, y: pos.y, z: pos.z, duration: 1.3, ease: 'power3.inOut' })
    gsap.to(c.controls.target, { x: target.x, y: target.y, z: target.z, duration: 1.3, ease: 'power3.inOut' })
  }

  /** Vue de trois quarts pour lire les couches décomposées. */
  const showExploded = () => {
    const c = ctx.current
    if (!c) return
    setAutoRotate(false)
    const dir = new THREE.Vector3(1.1, 0.45, 0.75).normalize()
    const pos = c.center.clone().addScaledVector(dir, fitDistance(c.radius, c.studio.camera) * 1.35)
    if (reduced.current) {
      c.studio.camera.position.copy(pos)
      c.controls.target.copy(c.center)
      return
    }
    gsap.to(c.studio.camera.position, { x: pos.x, y: pos.y, z: pos.z, duration: 1.3, ease: 'power3.inOut' })
    gsap.to(c.controls.target, { x: c.center.x, y: c.center.y, z: c.center.z, duration: 1.3, ease: 'power3.inOut' })
  }

  const onKey = (e: React.KeyboardEvent) => {
    const c = ctx.current
    if (!c) return
    const step = e.shiftKey ? 0.4 : 0.15
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      e.preventDefault()
      setAutoRotate(false)
      const off = c.studio.camera.position.clone().sub(c.controls.target)
      off.applyAxisAngle(new THREE.Vector3(0, 1, 0), e.key === 'ArrowLeft' ? -step : step)
      c.studio.camera.position.copy(c.controls.target).add(off)
    }
  }

  if (error) {
    return <p className="p-6 text-sm text-graphite-300">{error}</p>
  }

  const current = model.colors[colorIdx]

  return (
    <div className="flex h-full w-full flex-col">
      <div className="relative min-h-0 flex-1">
        <canvas
          ref={canvasRef}
          className="h-full w-full cursor-grab touch-none outline-none active:cursor-grabbing"
          tabIndex={0}
          onKeyDown={onKey}
          aria-label={`Vue 3D interactive de ${model.name}. Glisser pour tourner, molette ou pincement pour zoomer, flèches gauche/droite pour pivoter.`}
          role="img"
        />
      </div>
      <div className="flex flex-col gap-3 border-t border-white/10 p-4 sm:flex-row sm:items-center sm:justify-between">
        {model.colors.length > 0 && (
          <div className="flex min-w-0 flex-col gap-2">
            <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Finitions officielles">
              {model.colors.map((c, i) => (
                <button
                  key={c.name}
                  type="button"
                  role="radio"
                  aria-checked={i === colorIdx}
                  title={c.name}
                  onClick={() => setColorIdx(i)}
                  className={`h-7 w-7 rounded-full border transition ${i === colorIdx ? 'scale-110 border-white ring-2 ring-white/40' : 'border-white/25 hover:scale-105'}`}
                  style={{ background: c.hex }}
                >
                  <span className="sr-only">{c.name}</span>
                </button>
              ))}
            </div>
            <p className="truncate text-xs text-graphite-300">
              {current?.name}
              {current?.finish ? ` · ${current.finish}` : ''} <span className="text-graphite-400">· teinte affichée approximative</span>
            </p>
          </div>
        )}
        <div className="flex flex-wrap items-center gap-1.5">
          {(Object.keys(VIEW_LABELS) as ViewName[]).map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => goTo(v)}
              aria-pressed={view === v}
              className={`rounded-full px-3 py-1.5 text-xs transition ${view === v ? 'bg-white text-ink' : 'border border-white/15 text-graphite-100 hover:border-white/40'}`}
            >
              {VIEW_LABELS[v]}
            </button>
          ))}
          {explodeLabel && <button
            type="button"
            onClick={() => {
              const next = explode > 0.5 ? 0 : 1
              setExplode(next)
              if (next) showExploded()
            }}
            aria-pressed={explode > 0.5}
            className={`rounded-full px-3 py-1.5 text-xs transition ${explode > 0.5 ? 'bg-cyan-300 text-ink' : 'border border-white/15 text-graphite-100 hover:border-white/40'}`}
          >
            {explode > 0.5 ? 'Réassembler' : explodeLabel}
          </button>}
          <button
            type="button"
            onClick={() => setAutoRotate((a) => !a)}
            aria-pressed={autoRotate}
            className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-graphite-100 hover:border-white/40"
          >
            {autoRotate ? 'Pause rotation' : 'Rotation 360°'}
          </button>
        </div>
      </div>
    </div>
  )
}

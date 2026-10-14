'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import type { StageModel } from './ProductStage'
import { buildRig, type DeviceRig } from './builders'
import { createStudio, prefersReducedMotion } from './studio'

export interface UniverseItem extends StageModel {
  slug: string
  href: string
  year?: number
}

function glowTexture(inner: string, outer: string): THREE.CanvasTexture {
  const c = document.createElement('canvas')
  c.width = c.height = 256
  const g = c.getContext('2d')!
  const grad = g.createRadialGradient(128, 128, 0, 128, 128, 128)
  grad.addColorStop(0, inner)
  grad.addColorStop(0.35, outer)
  grad.addColorStop(1, 'rgba(0,0,0,0)')
  g.fillStyle = grad
  g.fillRect(0, 0, 256, 256)
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  return t
}

/**
 * Constellation d'appareils en orbite. Le décor (étoiles, halo) utilise la palette
 * du site ; les appareils sont éclairés en lumière neutre et gardent leur teinte officielle.
 */
export default function UniverseScene({
  items,
  scrollTrigger,
  onFocus,
  onReady,
}: {
  items: UniverseItem[]
  scrollTrigger: HTMLElement | null
  onFocus?: (item: UniverseItem) => void
  onReady?: () => void
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !items.length) return
    gsap.registerPlugin(ScrollTrigger)
    const reduced = prefersReducedMotion()
    const studio = createStudio(canvas, { shadows: false, fov: 38 })
    studio.ground.visible = false
    const { scene, camera } = studio

    // Décor
    const starGeo = new THREE.BufferGeometry()
    const count = 1400
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const violet = new THREE.Color('#8b3dff')
    const cyan = new THREE.Color('#1fe0ff')
    const white = new THREE.Color('#ffffff')
    for (let i = 0; i < count; i++) {
      const r = 6 + Math.random() * 30
      const th = Math.random() * Math.PI * 2
      const ph = Math.acos(2 * Math.random() - 1)
      pos.set([r * Math.sin(ph) * Math.cos(th), r * Math.cos(ph) * 0.6, r * Math.sin(ph) * Math.sin(th)], i * 3)
      const c = Math.random() < 0.5 ? white : Math.random() < 0.5 ? violet : cyan
      col.set([c.r, c.g, c.b], i * 3)
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    starGeo.setAttribute('color', new THREE.BufferAttribute(col, 3))
    const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ size: 0.035, vertexColors: true, transparent: true, opacity: 0.8, depthWrite: false }))
    scene.add(stars)
    const core = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture('rgba(190,150,255,0.9)', 'rgba(139,61,255,0.25)'), blending: THREE.AdditiveBlending, depthWrite: false }))
    core.scale.setScalar(5.5)
    const core2 = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture('rgba(160,245,255,0.7)', 'rgba(31,224,255,0.15)'), blending: THREE.AdditiveBlending, depthWrite: false }))
    core2.scale.setScalar(3)
    core2.position.set(0.6, -0.3, -0.5)
    scene.add(core, core2)
    const orbitLine = new THREE.Mesh(
      new THREE.TorusGeometry(3.2, 0.004, 8, 256),
      new THREE.MeshBasicMaterial({ color: '#8b3dff', transparent: true, opacity: 0.35 }),
    )
    orbitLine.rotation.x = Math.PI / 2
    scene.add(orbitLine)

    // Appareils
    const ring = new THREE.Group()
    scene.add(ring)
    const rigs: { rig: DeviceRig; holder: THREE.Group; item: UniverseItem; spin: number }[] = []
    items.forEach((item, i) => {
      const rig = buildRig({ visual: item.visual, dimensions: item.dimensions, colorHex: item.colors[0]?.hex ?? '#b0b2b8' })
      const box = new THREE.Box3().setFromObject(rig.root)
      const sphere = box.getBoundingSphere(new THREE.Sphere())
      const holder = new THREE.Group()
      rig.root.position.sub(sphere.center)
      holder.add(rig.root)
      // Normalisation douce : on conserve une hiérarchie de tailles sans écraser les petits objets
      const target = 0.34 + Math.min(Math.sqrt(sphere.radius) * 0.3, 0.3)
      holder.scale.setScalar(target / sphere.radius)
      const a = (i / items.length) * Math.PI * 2
      holder.position.set(Math.cos(a) * 3.2, Math.sin(a * 2) * 0.35, Math.sin(a) * 3.2)
      holder.rotation.set(0.15 * Math.sin(i), a + Math.PI, 0.1 * Math.cos(i))
      ring.add(holder)
      rigs.push({ rig, holder, item, spin: 0.15 + (i % 3) * 0.06 })
    })
    ring.rotation.x = 0.28

    camera.position.set(0, 2.2, 9.5)
    camera.lookAt(0, 0, 0)
    // Décale la constellation vers la droite sur écran large pour laisser respirer le titre
    const applyOffset = () => {
      const parent = canvas.parentElement
      if (!parent) return
      const w = parent.clientWidth
      const h = parent.clientHeight
      if (!w || !h) return
      if (w / h > 1.15) camera.setViewOffset(w, h, -w * 0.2, 0, w, h)
      else camera.setViewOffset(w, h, 0, h * 0.12, w, h)
      camera.updateProjectionMatrix()
    }
    applyOffset()
    const ro = new ResizeObserver(() => requestAnimationFrame(applyOffset))
    if (canvas.parentElement) ro.observe(canvas.parentElement)
    const camState = { radius: 9.5, height: 2.2, orbit: 0, look: 0 }
    const pointer = { x: 0, y: 0 }
    const onPointer = (e: PointerEvent) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1
      pointer.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('pointermove', onPointer, { passive: true })

    let triggers: ScrollTrigger[] = []
    if (!reduced && scrollTrigger) {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: scrollTrigger, start: 'top top', end: 'bottom bottom', scrub: 1.2 },
      })
      tl.to(camState, { radius: 4.6, height: 0.5, orbit: Math.PI * 0.9, ease: 'none' }, 0).to(camState, { radius: 6.5, height: 1.6, orbit: Math.PI * 1.4, ease: 'none' }, 0.6)
      triggers = tl.scrollTrigger ? [tl.scrollTrigger] : []
    }

    let lastFocus = ''
    const tmp = new THREE.Vector3()
    const off = studio.onFrame((dt, t) => {
      if (!reduced) {
        ring.rotation.y += dt * 0.06
        rigs.forEach((r) => (r.holder.rotation.y += dt * r.spin))
        stars.rotation.y -= dt * 0.01
      }
      const ox = reduced ? 0 : pointer.x * 0.35
      const oy = reduced ? 0 : pointer.y * 0.2
      camera.position.set(Math.sin(camState.orbit) * camState.radius + ox, camState.height - oy, Math.cos(camState.orbit) * camState.radius)
      camera.lookAt(0, 0, 0)
      core.material.rotation = t * 0.05
      // Appareil le plus proche de la caméra → légende
      let best = Infinity
      let bestItem: UniverseItem | null = null
      for (const r of rigs) {
        r.holder.getWorldPosition(tmp)
        const d = tmp.distanceTo(camera.position)
        if (d < best) {
          best = d
          bestItem = r.item
        }
      }
      if (bestItem && bestItem.slug !== lastFocus) {
        lastFocus = bestItem.slug
        onFocus?.(bestItem)
      }
    })
    onReady?.()

    return () => {
      off()
      triggers.forEach((tr) => tr.kill())
      window.removeEventListener('pointermove', onPointer)
      ro.disconnect()
      rigs.forEach((r) => r.rig.dispose())
      starGeo.dispose()
      studio.dispose()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, scrollTrigger])

  return <canvas ref={canvasRef} className="h-full w-full" aria-hidden="true" />
}

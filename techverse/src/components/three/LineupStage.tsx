'use client'

import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { buildRig, type DeviceRig } from './builders'
import type { StageModel } from './ProductStage'
import { createStudio, fitDistance, prefersReducedMotion } from './studio'

/**
 * Comparaison 3D : modèles posés côte à côte à leur échelle réelle relative,
 * rotation synchronisée et apparition successive.
 */
export default function LineupStage({ models }: { models: StageModel[] }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !models.length) return
    const reduced = prefersReducedMotion()
    const studio = createStudio(canvas)
    const group = new THREE.Group()
    const rigs: DeviceRig[] = []
    const holders: THREE.Group[] = []
    let x = 0
    const gap = 0.25
    models.forEach((m) => {
      const rig = buildRig({ visual: m.visual, dimensions: m.dimensions, colorHex: m.colors[0]?.hex ?? '#b0b2b8' })
      const box = new THREE.Box3().setFromObject(rig.root)
      const size = box.getSize(new THREE.Vector3())
      const center = box.getCenter(new THREE.Vector3())
      const holder = new THREE.Group()
      rig.root.position.sub(new THREE.Vector3(center.x, box.min.y, center.z))
      holder.add(rig.root)
      const w = Math.max(size.x, size.z)
      holder.position.x = x + w / 2
      x += w + gap
      group.add(holder)
      rigs.push(rig)
      holders.push(holder)
    })
    group.position.x = -(x - gap) / 2
    studio.scene.add(group)
    const box = new THREE.Box3().setFromObject(group)
    const sphere = box.getBoundingSphere(new THREE.Sphere())
    studio.ground.position.y = -0.001
    studio.camera.near = Math.max(sphere.radius * 0.02, 0.001)
    studio.camera.far = sphere.radius * 60
    studio.camera.position.set(sphere.center.x, sphere.center.y + sphere.radius * 0.35, sphere.center.z + fitDistance(sphere.radius, studio.camera, 1.05))
    studio.camera.updateProjectionMatrix()
    const controls = new OrbitControls(studio.camera, canvas)
    controls.target.copy(sphere.center)
    controls.enableDamping = true
    controls.enablePan = false
    controls.update()
    if (!reduced) {
      holders.forEach((h, i) => {
        h.scale.setScalar(0.001)
        gsap.to(h.scale, { x: 1, y: 1, z: 1, duration: 1.1, delay: 0.25 * i, ease: 'back.out(1.4)' })
      })
    }
    let spin = 0
    const off = studio.onFrame((dt) => {
      if (!reduced) {
        spin += dt * 0.45
        holders.forEach((h) => (h.rotation.y = Math.sin(spin) * 0.6))
      }
      controls.update()
    })
    return () => {
      off()
      controls.dispose()
      rigs.forEach((r) => r.dispose())
      studio.dispose()
    }
  }, [models])
  return <canvas ref={canvasRef} className="h-full w-full cursor-grab touch-none" role="img" aria-label="Comparaison 3D à l’échelle relative des modèles sélectionnés" />
}

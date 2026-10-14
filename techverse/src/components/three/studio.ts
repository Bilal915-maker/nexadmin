/**
 * Studio de rendu partagé : éclairage neutre, reflets d'environnement, ombres douces,
 * boucle de rendu suspendue hors écran, nettoyage complet.
 */
import * as THREE from 'three'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'

export function webglAvailable(): boolean {
  try {
    const c = document.createElement('canvas')
    return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl')))
  } catch {
    return false
  }
}

export function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export interface Studio {
  renderer: THREE.WebGLRenderer
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  ground: THREE.Mesh
  onFrame(fn: (dt: number, t: number) => void): () => void
  resize(): void
  renderOnce(): void
  dispose(): void
}

export function createStudio(canvas: HTMLCanvasElement, opts: { shadows?: boolean; fov?: number } = {}): Studio {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.05
  renderer.shadowMap.enabled = opts.shadows !== false
  renderer.shadowMap.type = THREE.PCFSoftShadowMap

  const scene = new THREE.Scene()
  const pmrem = new THREE.PMREMGenerator(renderer)
  const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04)
  scene.environment = envRT.texture
  scene.environmentIntensity = 0.9

  const camera = new THREE.PerspectiveCamera(opts.fov ?? 32, 1, 0.01, 200)
  camera.position.set(0, 0, 4)

  // Éclairage de studio volontairement neutre (blanc) pour ne pas altérer les finitions
  const key = new THREE.DirectionalLight('#ffffff', 2.2)
  key.position.set(3, 5, 4)
  key.castShadow = true
  key.shadow.mapSize.set(1024, 1024)
  key.shadow.radius = 6
  key.shadow.bias = -0.0005
  const fill = new THREE.DirectionalLight('#ffffff', 0.6)
  fill.position.set(-4, 2, 2)
  const rim = new THREE.DirectionalLight('#ffffff', 1.1)
  rim.position.set(-2, 3, -5)
  scene.add(key, fill, rim, new THREE.AmbientLight('#ffffff', 0.15))

  const ground = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), new THREE.ShadowMaterial({ opacity: 0.32 }))
  ground.rotation.x = -Math.PI / 2
  ground.receiveShadow = true
  scene.add(ground)

  const listeners = new Set<(dt: number, t: number) => void>()
  let raf = 0
  let last = performance.now()
  let visible = true
  let running = false

  const frame = (now: number) => {
    raf = requestAnimationFrame(frame)
    const dt = Math.min((now - last) / 1000, 0.05)
    last = now
    listeners.forEach((fn) => fn(dt, now / 1000))
    renderer.render(scene, camera)
  }
  const start = () => {
    if (running || !visible || document.hidden) return
    running = true
    last = performance.now()
    raf = requestAnimationFrame(frame)
  }
  const stop = () => {
    running = false
    cancelAnimationFrame(raf)
  }

  const io = new IntersectionObserver(([e]) => {
    visible = e.isIntersecting
    if (visible) start()
    else stop()
  })
  io.observe(canvas)
  const onVisibility = () => (document.hidden ? stop() : start())
  document.addEventListener('visibilitychange', onVisibility)

  const resize = () => {
    const parent = canvas.parentElement
    if (!parent) return
    const w = parent.clientWidth
    const h = parent.clientHeight
    if (!w || !h) return
    renderer.setSize(w, h, false)
    camera.aspect = w / h
    camera.updateProjectionMatrix()
  }
  const ro = new ResizeObserver(resize)
  if (canvas.parentElement) ro.observe(canvas.parentElement)
  resize()
  start()

  return {
    renderer,
    scene,
    camera,
    ground,
    onFrame(fn) {
      listeners.add(fn)
      return () => listeners.delete(fn)
    },
    resize,
    renderOnce: () => renderer.render(scene, camera),
    dispose() {
      stop()
      io.disconnect()
      ro.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
      envRT.dispose()
      pmrem.dispose()
      scene.traverse((o) => {
        const m = o as THREE.Mesh
        m.geometry?.dispose?.()
      })
      renderer.dispose()
    },
  }
}

/** Distance de caméra pour cadrer une sphère englobante. */
export function fitDistance(radius: number, camera: THREE.PerspectiveCamera, margin = 1.08): number {
  const vFov = THREE.MathUtils.degToRad(camera.fov)
  const hFov = 2 * Math.atan(Math.tan(vFov / 2) * camera.aspect)
  const fov = Math.min(vFov, hFov)
  return (radius / Math.sin(fov / 2)) * margin
}

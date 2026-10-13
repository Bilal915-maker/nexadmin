import * as THREE from 'three';
import { makeGlowTexture } from './textures.js';
import { DIM } from './phone.js';

export const FLOOR_Y = -DIM.H / 2 - 1.6;

/**
 * Studio photo sombre : environnement HDR procédural (softbox + strip lights)
 * pour les reflets du titane, lumière clé avec ombres douces, sol attrape-ombre
 * et halo de fond.
 */
export function createStudio(renderer, scene) {
  scene.background = new THREE.Color(0x050506);

  // ── Environnement de reflets (rendu une fois dans une cubemap PMREM) ─────
  const env = new THREE.Scene();
  env.add(new THREE.Mesh(
    new THREE.BoxGeometry(80, 80, 80),
    new THREE.MeshBasicMaterial({ color: 0x040405, side: THREE.BackSide }),
  ));
  const panel = (w, h, intensity, pos, color = 0xffffff) => {
    const m = new THREE.Mesh(
      new THREE.PlaneGeometry(w, h),
      new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(intensity), side: THREE.DoubleSide }),
    );
    m.position.set(...pos);
    m.lookAt(0, 0, 0);
    env.add(m);
  };
  panel(16, 16, 3.2, [0, 24, 3]);               // softbox zénithale
  panel(3, 30, 7, [-20, 2, 7], 0xfff4e6);       // strip gauche (chaud)
  panel(3, 30, 5.5, [20, 2, -5], 0xe8f0ff);     // strip droit (froid)
  panel(24, 3.5, 3, [0, 7, -24]);               // contre-jour
  panel(12, 8, 0.7, [6, 0, 24]);                // débouchage face
  panel(40, 40, 0.12, [0, -24, 0], 0xbfb8ad);   // rebond du sol
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(env, 0.03).texture;
  pmrem.dispose();

  // ── Lumières directes ───────────────────────────────────────────────────
  const key = new THREE.DirectionalLight(0xfff8f0, 2.2);
  key.position.set(7, 22, 12);
  key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  Object.assign(key.shadow.camera, { left: -14, right: 14, top: 14, bottom: -14, near: 1, far: 60 });
  key.shadow.radius = 14;
  key.shadow.blurSamples = 24;
  key.shadow.bias = -0.0004;
  scene.add(key);

  const rim = new THREE.SpotLight(0xdfe7ff, 6, 0, 0.55, 1, 0);
  rim.position.set(-10, 12, -16);
  scene.add(rim, rim.target);

  const warm = new THREE.SpotLight(0xffe2c4, 3, 0, 0.5, 1, 0);
  warm.position.set(14, -2, 10);
  scene.add(warm, warm.target);

  scene.add(new THREE.HemisphereLight(0x9aa0ad, 0x0b0b0c, 0.25));

  // ── Sol attrape-ombre + lueurs ─────────────────────────────────────────
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(200, 200),
    new THREE.ShadowMaterial({ opacity: 0.62, color: 0x000000 }),
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = FLOOR_Y;
  floor.receiveShadow = true;
  scene.add(floor);

  const floorGlow = new THREE.Mesh(
    new THREE.PlaneGeometry(60, 60),
    new THREE.MeshBasicMaterial({
      map: makeGlowTexture(renderer, 'rgba(58,56,54,0.9)'), transparent: true, depthWrite: false,
    }),
  );
  floorGlow.rotation.x = -Math.PI / 2;
  floorGlow.position.y = FLOOR_Y - 0.01;
  floorGlow.renderOrder = -1;
  scene.add(floorGlow);

  const backdrop = new THREE.Mesh(
    new THREE.PlaneGeometry(170, 110),
    new THREE.MeshBasicMaterial({
      map: makeGlowTexture(renderer, 'rgba(46,45,50,1)'), transparent: true, depthWrite: false, fog: false,
    }),
  );
  backdrop.position.set(0, 4, -45);
  backdrop.renderOrder = -2;
  scene.add(backdrop);

  return {
    key, rim, warm, backdrop,
    /** Le contre-jour suit le téléphone ; le fond reste face à la caméra. */
    update(camera, target) {
      rim.target.position.copy(target);
      warm.target.position.copy(target);
      const dx = camera.position.x - target.x, dz = camera.position.z - target.z;
      const len = Math.hypot(dx, dz) || 1;
      backdrop.position.set(target.x - (dx / len) * 45, 4, target.z - (dz / len) * 45);
      backdrop.lookAt(camera.position.x, 4, camera.position.z);
    },
  };
}

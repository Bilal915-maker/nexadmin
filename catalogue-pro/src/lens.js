import * as THREE from 'three';

export function makeLens(mat, lensTex) {
  const g = new THREE.Group();

  // Bague titane usinée (profil tourné)
  const profile = [
    [0.6, 0.0], [0.82, 0.0], [0.82, 0.13], [0.805, 0.18],
    [0.77, 0.21], [0.67, 0.215], [0.625, 0.19], [0.6, 0.13],
  ].map(([r, y]) => new THREE.Vector2(r, y));
  const ring = new THREE.Mesh(new THREE.LatheGeometry(profile, 96), mat.titaniumPolished);
  ring.rotation.x = Math.PI / 2;
  g.add(ring);

  // Fût intérieur noir
  const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 0.2, 64, 1, true), mat.black);
  barrel.rotation.x = Math.PI / 2;
  barrel.position.z = 0.1;
  g.add(barrel);

  // Verre saphir avec éléments optiques et traitement iridescent
  const glass = new THREE.Mesh(
    new THREE.CircleGeometry(0.6, 64),
    new THREE.MeshPhysicalMaterial({
      map: lensTex, color: 0xffffff, roughness: 0.03, metalness: 0.1,
      clearcoat: 1, clearcoatRoughness: 0.02,
      iridescence: 0.9, iridescenceIOR: 1.7, iridescenceThicknessRange: [180, 520],
      envMapIntensity: 1.4,
    }),
  );
  glass.position.z = 0.15;
  g.add(glass);

  // Dôme de verre transparent : capte les reflets courbes du studio
  const theta = Math.asin(0.58 / 0.9);
  const dome = new THREE.Mesh(
    new THREE.SphereGeometry(0.9, 64, 24, 0, Math.PI * 2, 0, theta),
    new THREE.MeshPhysicalMaterial({
      color: 0x000000, transparent: true, opacity: 0.35, roughness: 0, metalness: 0,
      clearcoat: 1, clearcoatRoughness: 0, envMapIntensity: 2.2, depthWrite: false,
    }),
  );
  dome.rotation.x = Math.PI / 2;
  dome.scale.set(1, 0.22, 1);
  dome.position.z = 0.15 - 0.9 * Math.cos(theta) * 0.22;
  g.add(dome);

  return g;
}

import './style.css';
import IPHONES, { FILTERS, TIERS } from './data/iphones.js';
import { Viewer, Thumbnailer } from './engine.js';
import { buildIPhone } from './iphone3d.js';
import {
  createIPad, createMacBook, createIMac, createWatch, createAirPods, createVisionPro, createHomePod, createAirTag,
} from './products.js';

const app = document.getElementById('app');
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const byId = Object.fromEntries(IPHONES.map((m) => [m.id, m]));
const RANK = ['pro', 'promax', 'duo', 'air', 'standard', 'plus', 'mini', 'e', 'se'];
const ordered = [...IPHONES].sort((a, b) => b.year - a.year || RANK.indexOf(a.tier) - RANK.indexOf(b.tier));
const YEARS = [...new Set(ordered.map((m) => m.year))];
const NV = '<span class="nv">Non vérifié</span>';
const short = (m) => m.display.split(' · ')[0];

const FAMILIES = [
  { id: 'ipad', name: 'iPad', flagship: 'iPad Pro', build: createIPad, view: 'front' },
  { id: 'mac', name: 'Mac', flagship: 'MacBook Pro', build: createMacBook, view: 'front' },
  { id: 'imac', name: 'iMac', flagship: 'iMac', build: createIMac, view: 'front' },
  { id: 'watch', name: 'Watch', flagship: 'Apple Watch', build: createWatch, view: 'front' },
  { id: 'airpods', name: 'AirPods', flagship: 'AirPods Pro', build: createAirPods, view: 'front' },
  { id: 'vision', name: 'Vision', flagship: 'Apple Vision Pro', build: createVisionPro, view: 'front' },
  { id: 'homepod', name: 'Maison', flagship: 'HomePod mini', build: createHomePod, view: 'front' },
  { id: 'airtag', name: 'AirTag', flagship: 'AirTag', build: createAirTag, view: 'front' },
];

const viewer = new Viewer();
const thumbs = new Thumbnailer(440);
const state = { compare: ['iphone-18-pro', 'iphone-17-pro', 'iphone-15-pro'], filter: 'all' };

// ── Navigation globale ────────────────────────────────────────────────────
document.getElementById('globalnav').innerHTML = `
  <a class="gn-mark" href="#home">Catalogue</a>
  <div class="gn-links">
    <a href="#iphone" data-nav="iphone">iPhone</a>
    ${FAMILIES.map((f) => `<a href="#f-${f.id}" data-nav="f-${f.id}">${f.name}</a>`).join('')}
    <a href="#compare" data-nav="compare">Comparer</a>
  </div>`;

// ── Vignettes ─────────────────────────────────────────────────────────────
function hydrateThumbs(root = app) {
  root.querySelectorAll('img[data-thumb]').forEach((img) => {
    const [id, ci = '0', view = 'back'] = img.dataset.thumb.split(':');
    const spec = byId[id];
    if (!spec) return;
    thumbs.request(`${id}:${ci}:${view}`, (r) => buildIPhone(spec, r, +ci), (url) => {
      img.src = url;
      img.classList.add('in');
    }, { view });
  });
}
const thumb = (id, ci = 0, view = 'back', cls = '') => `<img class="thumb ${cls}" data-thumb="${id}:${ci}:${view}" alt="${esc(byId[id].name)}" width="440" height="440" />`;
const dots = (m, max = 8) => `<span class="dots">${m.colors.slice(0, max).map((c) => `<i style="background:${c.hex}" title="${esc(c.n)}"></i>`).join('')}</span>`;

// ── Vues ──────────────────────────────────────────────────────────────────
function home() {
  const hero = byId['iphone-18-pro'];
  return `
  <section class="hero dark">
    <div class="hero-copy">
      <p class="eyebrow">Nouveau · septembre 2026</p>
      <h1 class="display">iPhone 18 Pro</h1>
      <p class="sub">A20 Pro. Caméra Fusion 48 Mpx à ouverture variable. Une Dynamic Island plus discrète.</p>
      <div class="ctas"><a class="btn" href="#m-${hero.id}">Découvrir</a><a class="more" href="#iphone">Toute la gamme</a></div>
    </div>
    <div class="hero-stage" data-viewer="${hero.id}:0:back"></div>
  </section>

  <section class="timeline-band">
    <div class="wrap">
      <h2 class="h2">Dix ans d’iPhone.</h2>
      <p class="lead">${IPHONES.length} modèles, de l’iPhone SE de 2016 à l’iPhone Duo pliable. Chacun modélisé en 3D dans ses finitions d’origine.</p>
      <div class="years" role="list">
        ${YEARS.map((y) => {
          const ms = ordered.filter((m) => m.year === y);
          return `<a role="listitem" class="year" href="#iphone" data-year="${y}">
            ${thumb(ms[0].id)}<strong>${y}</strong><span>${ms.length} modèle${ms.length > 1 ? 's' : ''}</span></a>`;
        }).join('')}
      </div>
    </div>
  </section>

  <section class="tiles wrap">
    ${tile('iphone-duo', 'Le premier iPhone pliable.', 'Écran externe 5,4 pouces, écran interne 7,6 pouces.', 'dark', 'front')}
    ${tile('iphone-air', 'Le plus fin, à 5,64 mm.', 'Cadre en titane, puce A19 Pro.', 'light', 'side')}
    ${tile('iphone-17-pro', 'Aluminium monocoque.', 'Trois caméras 48 Mpx, en Orange cosmique.', 'light', 'back')}
    ${tile('iphone-7', 'Là où tout commence.', 'iPhone 7, 2016. Touch ID et bouton principal.', 'dark', 'back')}
  </section>

  <section class="families-band wrap">
    <h2 class="h2">Les autres familles.</h2>
    <div class="fam-grid">${FAMILIES.map((f) => `<a class="fam" href="#f-${f.id}"><strong>${f.name}</strong><span>${f.flagship} en 3D</span></a>`).join('')}</div>
  </section>`;
}

function tile(id, title, sub, tone, view) {
  const m = byId[id];
  return `<a class="tile ${tone}" href="#m-${id}">
    <p class="eyebrow">${esc(m.name)}</p><h3>${title}</h3><p>${sub}</p>${thumb(id, 0, view)}</a>`;
}

function lineup() {
  const f = FILTERS.find((x) => x.id === state.filter) || FILTERS[0];
  const list = ordered.filter(f.test);
  return `
  <section class="page-head wrap">
    <h1 class="h1">iPhone</h1>
    <p class="lead">Toute la gamme depuis 2016. ${IPHONES.length} modèles, leurs finitions et leurs caractéristiques.</p>
    <div class="chips" role="tablist">${FILTERS.map((x) => `<button type="button" role="tab" data-filter="${x.id}" aria-selected="${x.id === f.id}">${x.label}</button>`).join('')}</div>
  </section>
  <div class="wrap">
    ${YEARS.map((y) => {
      const ms = list.filter((m) => m.year === y);
      if (!ms.length) return '';
      return `<section class="year-group" id="y${y}"><h2 class="year-title">${y}</h2><div class="grid">
        ${ms.map((m) => `
          <article class="card">
            <a class="card-link" href="#m-${m.id}">${thumb(m.id)}
              <span class="tier">${TIERS[m.tier]}</span>
              <h3>${esc(m.name)}</h3>
              ${dots(m)}
              <p class="meta">${esc(short(m))} · ${esc(m.chip)}</p>
            </a>
            <button type="button" class="cmp" data-cmp="${m.id}" aria-pressed="${state.compare.includes(m.id)}">${state.compare.includes(m.id) ? 'Dans la comparaison' : 'Comparer'}</button>
          </article>`).join('')}
      </div></section>`;
    }).join('')}
  </div>`;
}

const ROWS = [
  ['Écran', (m) => m.display],
  ['Puce', (m) => m.chip],
  ['Appareil photo arrière', (m) => m.cameras],
  ['Caméra avant', (m) => m.front],
  ['Capacité', (m) => m.storage?.join(' · ')],
  ['Authentification', (m) => m.auth],
  ['Connecteur', (m) => m.port],
  ['Résistance à l’eau', (m) => m.ip],
  ['Matériaux', (m) => m.material],
  ['Dimensions', (m) => (m.dims ? `${m.dims.map((n) => String(n).replace('.', ',')).join(' × ')} mm${m.dimsNote ? ` (${m.dimsNote})` : ''}` : null)],
  ['Finitions', (m) => m.colors.map((c) => c.n).join(', ')],
];

function model(id) {
  const m = byId[id];
  if (!m) return notFound();
  // Génération précédente / suivante dans la même gamme (Pro → Pro, Plus → Plus…)
  const same = ordered.filter((x) => x.tier === m.tier);
  const j = same.indexOf(m);
  const i = ordered.indexOf(m);
  const newer = same[j - 1] || ordered[i - 1], older = same[j + 1] || ordered[i + 1];
  return `
  <nav class="subnav"><div class="wrap subnav-in">
    <strong>${esc(m.name)}</strong>
    <span class="subnav-links"><a href="#specs-${m.id}" data-scroll="specs">Caractéristiques</a><button type="button" class="pill" data-cmp-go="${m.id}">Comparer</button></span>
  </div></nav>
  <section class="product-hero">
    <div class="wrap ph-in">
      <div class="ph-copy">
        <p class="eyebrow">iPhone · ${m.year}</p>
        <h1 class="h1">${esc(m.name)}</h1>
        <p class="lead">${esc(short(m))} · ${esc(m.chip)} · ${esc(m.cameras.split(' : ')[0].split(',')[0])}</p>
      </div>
      <div class="stage-box">
        <div class="stage" data-viewer="${m.id}:0:back"></div>
        <div class="views" role="group" aria-label="Vue">
          <button type="button" data-view="front">Face</button><button type="button" data-view="back" aria-pressed="true">Dos</button><button type="button" data-view="side">Profil</button>
        </div>
        <p class="drag-hint">Glissez pour faire tourner</p>
      </div>
      <div class="finish">
        <p class="finish-name" id="finish-name">${esc(m.colors[0].n)}</p>
        <div class="swatches" role="radiogroup" aria-label="Finition">
          ${m.colors.map((c, k) => `<button type="button" role="radio" class="sw" data-color="${k}" aria-checked="${k === 0}" aria-label="${esc(c.n)}" style="--c:${c.hex}"></button>`).join('')}
        </div>
        <p class="tint-note">Teintes approximatives des finitions officielles.</p>
      </div>
    </div>
  </section>
  <section class="specs" id="specs-${m.id}">
    <div class="wrap">
      <h2 class="h2">Caractéristiques techniques</h2>
      <dl class="spec-grid">
        ${ROWS.map(([k, f]) => `<div class="spec"><dt>${k}</dt><dd>${f(m) ? esc(f(m)) : NV}</dd></div>`).join('')}
      </dl>
      <div class="pager">
        ${older ? `<a href="#m-${older.id}">‹ ${esc(older.name)}</a>` : '<span></span>'}
        ${newer ? `<a href="#m-${newer.id}">${esc(newer.name)} ›</a>` : '<span></span>'}
      </div>
    </div>
  </section>`;
}

function compare() {
  const ids = state.compare.slice(0, 3);
  const opts = (sel) => YEARS.map((y) => `<optgroup label="${y}">${ordered.filter((m) => m.year === y).map((m) => `<option value="${m.id}" ${m.id === sel ? 'selected' : ''}>${esc(m.name)}</option>`).join('')}</optgroup>`).join('');
  const cols = ids.map((id) => byId[id]);
  return `
  <section class="page-head wrap">
    <h1 class="h1">Comparer</h1>
    <p class="lead">Choisissez jusqu’à trois modèles. Les lignes qui diffèrent sont mises en avant.</p>
  </section>
  <div class="wrap cmp-wrap">
    <div class="cmp-table" style="--n:${cols.length}">
      <div class="cmp-row head"><div></div>${cols.map((m, k) => `
        <div class="cmp-col">
          <label class="sr" for="cmp-${k}">Modèle ${k + 1}</label>
          <select id="cmp-${k}" data-cmp-slot="${k}">${opts(m.id)}</select>
          ${thumb(m.id)}
          ${dots(m)}
          <a class="more" href="#m-${m.id}">Voir le modèle</a>
        </div>`).join('')}</div>
      ${ROWS.map(([k, f]) => {
        const vals = cols.map((m) => f(m));
        const diff = new Set(vals.map((v) => v ?? '')).size > 1;
        return `<div class="cmp-row ${diff ? 'diff' : ''}"><div class="cmp-k">${k}</div>${vals.map((v) => `<div class="cmp-v">${v ? esc(v) : NV}</div>`).join('')}</div>`;
      }).join('')}
    </div>
  </div>`;
}

function family(fid) {
  const f = FAMILIES.find((x) => x.id === fid);
  if (!f) return notFound();
  return `
  <section class="product-hero">
    <div class="wrap ph-in">
      <div class="ph-copy">
        <p class="eyebrow">${f.name}</p>
        <h1 class="h1">${f.flagship}</h1>
        <p class="lead">Modèle 3D de référence de la famille. La gamme complète depuis 2016, avec toutes ses finitions et ses fiches techniques, est en préparation.</p>
      </div>
      <div class="stage-box"><div class="stage" data-family="${f.id}"></div><p class="drag-hint">Glissez pour faire tourner</p></div>
    </div>
  </section>`;
}

function notFound() {
  return `<section class="page-head wrap"><h1 class="h1">Page introuvable</h1><p class="lead"><a class="more" href="#home">Retour à l’accueil</a></p></section>`;
}

// ── Routeur (#token simple, compatible avec les liens partagés) ───────────
function route() {
  const h = location.hash.slice(1) || 'home';
  let html, nav = h;
  if (h === 'home') html = home();
  else if (h === 'iphone') html = lineup();
  else if (h === 'compare') html = compare();
  else if (h.startsWith('m-')) { html = model(h.slice(2)); nav = 'iphone'; }
  else if (h.startsWith('f-')) html = family(h.slice(2));
  else html = notFound();
  app.innerHTML = html;
  document.querySelectorAll('[data-nav]').forEach((a) => a.setAttribute('aria-current', String(a.dataset.nav === nav)));
  document.body.dataset.page = h.split('-')[0];
  const y = state.pendingYear && document.getElementById(`y${state.pendingYear}`);
  state.pendingYear = null;
  if (y) y.scrollIntoView(); else window.scrollTo({ top: 0, behavior: 'instant' });
  mountViewer();
  hydrateThumbs();
  document.title = h.startsWith('m-') && byId[h.slice(2)] ? `${byId[h.slice(2)].name} · Catalogue` : 'Catalogue iPhone';
}

function mountViewer() {
  const el = app.querySelector('[data-viewer], [data-family]');
  if (!el) return;
  viewer.mount(el);
  if (el.dataset.viewer) {
    const [id, ci, view] = el.dataset.viewer.split(':');
    viewer.showIPhone(byId[id], +ci, { view });
  } else {
    const f = FAMILIES.find((x) => x.id === el.dataset.family);
    viewer.showObject({ group: f.build(viewer.renderer) }, { view: f.view });
  }
}

// ── Interactions (délégation) ─────────────────────────────────────────────
app.addEventListener('click', (e) => {
  const t = e.target.closest('button, a');
  if (!t) return;
  if (t.dataset.filter) { state.filter = t.dataset.filter; route(); }
  else if (t.dataset.cmp) {
    const id = t.dataset.cmp;
    state.compare = state.compare.includes(id) ? state.compare.filter((x) => x !== id) : [id, ...state.compare].slice(0, 3);
    while (state.compare.length < 2) state.compare.push(ordered.find((m) => !state.compare.includes(m.id)).id);
    app.querySelectorAll('[data-cmp]').forEach((b) => {
      const on = state.compare.includes(b.dataset.cmp);
      b.setAttribute('aria-pressed', String(on));
      b.textContent = on ? 'Dans la comparaison' : 'Comparer';
    });
  } else if (t.dataset.cmpGo) {
    const id = t.dataset.cmpGo;
    state.compare = [id, ...state.compare.filter((x) => x !== id)].slice(0, 3);
    location.hash = 'compare';
  } else if (t.dataset.color) {
    const k = +t.dataset.color;
    viewer.setColor(k);
    app.querySelectorAll('[data-color]').forEach((b) => b.setAttribute('aria-checked', String(+b.dataset.color === k)));
    const id = location.hash.slice(3);
    document.getElementById('finish-name').textContent = byId[id].colors[k].n;
  } else if (t.dataset.view) {
    viewer.setView(t.dataset.view);
    app.querySelectorAll('[data-view]').forEach((b) => b.setAttribute('aria-pressed', String(b === t)));
  } else if (t.dataset.scroll) {
    e.preventDefault();
    document.querySelector('.specs')?.scrollIntoView({ behavior: 'smooth' });
  } else if (t.dataset.year) {
    e.preventDefault();
    state.filter = 'all';
    state.pendingYear = t.dataset.year;
    if (location.hash === '#iphone') route(); else location.hash = 'iphone';
  }
});
app.addEventListener('change', (e) => {
  const s = e.target.closest('[data-cmp-slot]');
  if (!s) return;
  state.compare[+s.dataset.cmpSlot] = s.value;
  route();
});

window.addEventListener('hashchange', route);
route();
document.body.classList.add('ready');

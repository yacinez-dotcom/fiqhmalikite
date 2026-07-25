/* ════════════════════════════════════════════════════════
   BRIQUE: Application Principale (app.js)
   Rôle   : Icônes SVG, rendu de chaque page, init.
   Dépend : TOUTES les autres briques
   ════════════════════════════════════════════════════════ */

/* ══════════════════════════════════════════════════════════
   § Icônes SVG (sans humains / animaux)
   ══════════════════════════════════════════════════════════ */
const Icons = (() => {
  const sw = (path, vb='0 0 24 24') =>
    `<svg viewBox="${vb}" fill="none" stroke="currentColor" stroke-width="1.8"
          stroke-linecap="round" stroke-linejoin="round"
          xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${path}</svg>`;

  return {
    home:     () => sw('<path d="M3 9.5L12 3l9 6.5V21H15v-5h-6v5H3z"/>'),
    levels:   () => sw('<rect x="3" y="16" width="18" height="3" rx="1"/><rect x="3" y="10" width="13" height="3" rx="1"/><rect x="3" y="4" width="8" height="3" rx="1"/>'),
    quizNav:  () => sw('<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>'),
    badgeNav: () => sw('<path d="M12 2l2.4 4.8L20 8l-4 3.9.9 5.1L12 14.5l-4.9 2.5.9-5.1L4 8l5.6-1.2z"/>'),
    chart:    () => sw('<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>'),
    quiz:     () => sw('<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17" stroke-width="2.5"/>'),
    lock:     () => sw('<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>'),
    check:    () => sw('<polyline points="20 6 9 17 4 12"/>'),
    arrowR:   () => sw('<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>'),
    arrowL:   () => sw('<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>'),
    book:     () => sw('<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>'),
    sun:      () => sw('<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>'),
    moon:     () => sw('<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>'),
    water:    () => sw('<path d="M12 2C12 2 5 10 5 15a7 7 0 0 0 14 0C19 10 12 2 12 2z"/><path d="M8 17.5C8 17.5 10 16 12 18.5" stroke-width="1.2"/>'),
    arch:     () => sw('<path d="M4 22V12C4 7 8 4 12 4s8 3 8 8v10"/><line x1="4" y1="22" x2="20" y2="22"/><line x1="1" y1="22" x2="23" y2="22"/><path d="M8 22V14a4 4 0 0 1 8 0v8" stroke-width="1.3" opacity="0.5"/>'),
    crescent: () => sw('<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/><path d="M17 8l1.5 1.5" stroke-width="1.5" opacity="0.7"/>'),
    scales:   () => sw('<line x1="12" y1="3" x2="12" y2="21"/><path d="M5 21h14"/><line x1="7" y1="7" x2="17" y2="7"/><path d="M7 7l-4 8s-1 2 4 2 4-2 4-2L7 7z"/><path d="M17 7l4 8s1 2-4 2-4-2-4-2L17 7z"/>'),
    star8:    () => `<svg viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M20 2L23.5 11 31.3 4.7 26.5 13 36 13 28.5 19 34.6 27 25.5 23.5 24 33 20 25 16 33 14.5 23.5 5.4 27 11.5 19 4 13 13.5 13 8.7 4.7 16.5 11Z"/></svg>`,

    byName: name => {
      const m = {
        /* Formes générales */
        water: Icons.water, arch: Icons.arch, crescent: Icons.crescent,
        scales: Icons.scales, star8: Icons.star8,
        moon: Icons.moon, sun: Icons.sun, book: Icons.book, lock: Icons.lock,
        handshake: () => sw('<path d="M20.5 14.5l-5 5-2-2-3 2-4-4 2-3-1.5-1.5"/><path d="M15 9l-5-5-6 6.5 5 5"/>'),
        heart:     () => sw('<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>'),
        balance:   () => sw('<line x1="12" y1="3" x2="12" y2="21"/><path d="M5 21h14"/><line x1="7" y1="7" x2="17" y2="7"/><path d="M7 7l-4 8s-1 2 4 2 4-2 4-2L7 7z"/><path d="M17 7l4 8s1 2-4 2-4-2-4-2L17 7z"/>'),
        scroll:    () => sw('<path d="M8 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 2v6h6"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/><line x1="8" y1="9" x2="10" y2="9"/>'),
        seal:      () => sw('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'),
        gift:      () => sw('<polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>'),
        /* Badges Débutant */
        drop:      () => sw('<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/><path d="M8.5 14.5a3.5 3.5 0 0 0 4 3" stroke-width="1.2" opacity="0.5"/>'),
        mihrab:    () => sw('<path d="M5 22V10C5 6 8 3 12 3s7 3 7 7v12"/><line x1="5" y1="22" x2="19" y2="22"/><line x1="2" y1="22" x2="22" y2="22"/><path d="M9 22v-6a3 3 0 0 1 6 0v6" opacity="0.5" stroke-width="1.3"/>'),
        'crescent-s': () => sw('<path d="M20 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 20 12.79z"/><circle cx="17" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>'),
        'coin-z':   () => sw('<circle cx="12" cy="12" r="9"/><path d="M9 8h6l-6 8h6" stroke-width="1.8"/><line x1="9" y1="8" x2="9" y2="7" stroke-width="1.5"/><line x1="15" y1="16" x2="15" y2="17" stroke-width="1.5"/>'),
        /* Badges Intermédiaire */
        lily:      () => sw('<path d="M12 22V12"/><path d="M12 12C12 12 8 10 6 6c4 0 6 2 6 6z"/><path d="M12 12C12 12 16 10 18 6c-4 0-6 2-6 6z"/><path d="M12 12C12 12 10 8 12 4c2 4 0 8 0 8z"/><circle cx="12" cy="22" r="1" fill="currentColor" stroke="none"/>'),
        kaaba:     () => sw('<rect x="4" y="8" width="16" height="13" rx="1"/><line x1="4" y1="8" x2="20" y2="8"/><line x1="2" y1="8" x2="22" y2="8"/><rect x="7" y="11" width="5" height="7" rx="1" opacity="0.5"/><path d="M8 8V5h8v3"/>'),
        rings:     () => sw('<circle cx="7.5" cy="12" r="5.5"/><circle cx="16.5" cy="12" r="5.5"/><path d="M10.1 9.8a5.5 5.5 0 0 1 3.8 0" opacity="0.4"/>'),
        'chain-b': () => sw('<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/><line x1="8" y1="16" x2="16" y2="8" stroke-width="1" opacity="0.3"/>'),
        blade:     () => sw('<path d="M14.5 2L20 7.5 7.5 20 2 14.5z"/><path d="M7 17l4-4" opacity="0.5"/>'),
        'flame-s': () => sw('<path d="M8.5 14.5A4.5 4.5 0 0 0 17 12c0-3-3.5-6-5-9-1 2.5-5 5.5-4.5 9A4.5 4.5 0 0 0 11.5 17" stroke-width="1.5"/><path d="M12 17a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" fill="currentColor" stroke="none"/>'),
        handsh:    () => sw('<path d="M14 9l-4 4"/><path d="M3 9.5L7 6l4 3 4-3 4 3v8l-4 3-4-3-4 3-4-3z"/>'),
        /* Badges Avancé */
        'key-c':   () => sw('<circle cx="7.5" cy="15.5" r="5.5"/><line x1="11.8" y1="11.2" x2="22" y2="2"/><line x1="18" y1="5" x2="20" y2="7"/><line x1="21" y1="8" x2="19" y2="10"/>'),
        'gift-h':  () => sw('<polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>'),
        'tree-f':  () => sw('<line x1="12" y1="22" x2="12" y2="13"/><path d="M12 13l-7-7h14z"/><path d="M12 8L6 2h12z"/><line x1="7" y1="13" x2="17" y2="13" opacity="0.4"/>'),
        'seal-h':  () => sw('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>'),
        gavel:     () => sw('<path d="M14 14l-4 4"/><path d="M5 20L20 5"/><rect x="14" y="2" width="8" height="5" rx="1" transform="rotate(45 14 2)" opacity="0.7"/><rect x="2" y="14" width="8" height="5" rx="1" transform="rotate(45 2 14)" opacity="0.7"/>'),
        'wall-h':  () => sw('<rect x="2" y="15" width="20" height="3" rx="1"/><rect x="4" y="19" width="6" height="3" rx="1"/><rect x="14" y="19" width="6" height="3" rx="1"/><rect x="2" y="11" width="8" height="3" rx="1"/><rect x="14" y="11" width="8" height="3" rx="1"/><rect x="7" y="7" width="10" height="3" rx="1"/><path d="M12 2v5" stroke-width="2" opacity="0.4"/>'),
        'heart-r': () => sw('<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/><line x1="12" y1="10" x2="12" y2="14"/><line x1="10" y1="12" x2="14" y2="12"/>'),
        /* Badges Expert */
        'star-a':  () => sw('<path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/><circle cx="12" cy="12" r="3" opacity="0.3" fill="currentColor" stroke="none"/>'),
        'pen-b':   () => sw('<path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/><path d="M15 5l3 3" opacity="0.5"/>'),
        'mosque-m':() => sw('<path d="M2 22V10"/><path d="M22 22V10"/><path d="M12 2L2 10h20z"/><rect x="7" y="14" width="10" height="8"/><path d="M10 22v-5a2 2 0 1 1 4 0v5"/><path d="M8 10C8 8 10 6 12 4c2 2 4 4 4 6" opacity="0.4"/>'),
        lantern:   () => sw('<rect x="7" y="6" width="10" height="14" rx="2"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="9" y1="6" x2="9" y2="20" opacity="0.3"/><line x1="15" y1="6" x2="15" y2="20" opacity="0.3"/><line x1="7" y1="13" x2="17" y2="13" opacity="0.3"/><path d="M10 2h4" stroke-width="2"/>'),
        'globe-m': () => sw('<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>'),
        'leaf-b':  () => sw('<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>'),
        'scale-c': () => sw('<line x1="12" y1="3" x2="12" y2="21"/><path d="M5 21h14"/><path d="M5 7h14" opacity="0.4"/><path d="M6 7L3 14s-.5 2 3 2 3-2 3-2L6 7z"/><path d="M18 7l3 7s.5 2-3 2-3-2-3-2L18 7z"/>'),
        /* Compatibilité anciens noms */
        'janaza': () => sw('<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>'),
        'hajj':   () => sw('<rect x="4" y="7" width="16" height="14" rx="1"/><line x1="2" y1="7" x2="22" y2="7"/><path d="M8 7V4h8v3"/>'),
        'nikah':  () => sw('<circle cx="7.5" cy="12" r="5.5"/><circle cx="16.5" cy="12" r="5.5"/>'),
        'dhabaih':() => sw('<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>'),
      };
      return (m[name] || (() => sw('<circle cx="12" cy="12" r="10" opacity="0.3"/>')))(  );
    },
    badge: name => Icons.byName(name)
  };
})();

/* ══════════════════════════════════════════════════════════
   § Rendu des blocs de contenu leçon
   ══════════════════════════════════════════════════════════ */
function renderContentBlock(block) {
  switch (block.t) {
    case 'lead': return `<p class="lesson-lead">${block.v}</p>`;
    case 'h':    return `<h3 class="lesson-section-h">${block.v}</h3>`;
    case 'p':    return `<p class="lesson-p">${block.v}</p>`;
    case 'ul':   return `<ul class="lesson-ul">${block.v.map(i=>`<li>${i}</li>`).join('')}</ul>`;
    case 'ar':
      return `<div class="lesson-arabic-block">
        <div class="lesson-arabic-text">${block.v}</div>
        ${block.n ? `<div class="lesson-arabic-note">${block.n}</div>` : ''}
      </div>`;
    case 'note': return `<div class="lesson-note-block">${block.v}</div>`;
    default:     return '';
  }
}

/* ══════════════════════════════════════════════════════════
   § Renderer
   ══════════════════════════════════════════════════════════ */
const Renderer = (() => {

  /* ── Accueil ─────────────────────────────────────────── */
  function home() {
    const prog = Progress.getDebutantProgress();
    document.getElementById('page-home').innerHTML = `
      <div class="hero">
        <div class="hero__star">${Icons.star8()}</div>
        <div class="hero__arabic">علم الفقه المالكي</div>
        <h1 class="hero__title">Fiqh Malikite</h1>
        <p class="hero__subtitle">
          Étudiez la jurisprudence islamique de l'école malikite de manière
          progressive, structurée et illustrée — d'après les sources classiques.
        </p>
        <div class="hero__cta">
          <button class="btn btn--primary btn--lg" onclick="Router.navigate('levels')">
            Commencer l'étude
          </button>
          <button class="btn btn--outline btn--lg" onclick="Router.navigate('quiz-hub')">
            Questionnaires
          </button>
        </div>
      </div>

      <div class="star-divider">
        <div class="star-divider__line"></div>
        <div class="star-divider__icon">${Icons.star8()}</div>
        <div class="star-divider__line"></div>
      </div>

      <div class="stats-row">
        <div class="stat-item"><div class="stat-item__value">4</div><div class="stat-item__label">Niveaux</div></div>
        <div class="stat-item"><div class="stat-item__value">4</div><div class="stat-item__label">Sujets débutant</div></div>
        <div class="stat-item"><div class="stat-item__value">24</div><div class="stat-item__label">Leçons</div></div>
        <div class="stat-item"><div class="stat-item__value">${prog.done}/4</div><div class="stat-item__label">Quiz complétés</div></div>
      </div>`;
  }

  /* ── Niveaux ─────────────────────────────────────────── */
  function levels() {
    const levelRoutes = { debutant: 'debutant', intermediaire: 'intermediaire', avance: 'avance' };
    const allSubjects = [
      ...DEBUTANT.subjects,
      ...(typeof INTERMEDIAIRE !== 'undefined' ? INTERMEDIAIRE.subjects : []),
      ...(typeof AVANCE        !== 'undefined' ? AVANCE.subjects        : [])
    ];

    document.getElementById('page-levels').innerHTML = `
      <div class="page-header">
        <span class="page-header__eyebrow">المستويات</span>
        <h1 class="page-header__title">Niveaux d'Étude</h1>
        <p class="page-header__desc">Progressez méthodiquement à travers les enseignements du fiqh malikite.</p>
      </div>
      <div class="grid-levels">
        ${LEVELS.map((lvl, i) => {
          const route = levelRoutes[lvl.id];
          const p = lvl.id === 'debutant'
            ? Progress.getDebutantProgress()
            : (lvl.id === 'intermediaire' && typeof INTERMEDIAIRE !== 'undefined')
              ? (() => {
                  const scores = INTERMEDIAIRE.subjects.map(s => Progress.getScore(s.quiz.id) ?? 0);
                  const percent = Math.round(scores.reduce((a,b)=>a+b,0) / scores.length);
                  const done = INTERMEDIAIRE.subjects.filter(s => Progress.getScore(s.quiz.id) !== null).length;
                  return { done, total: INTERMEDIAIRE.subjects.length, percent };
                })()
            : (lvl.id === 'avance' && typeof AVANCE !== 'undefined')
              ? (() => {
                  const scores = AVANCE.subjects.map(s => Progress.getScore(s.quiz.id) ?? 0);
                  const percent = Math.round(scores.reduce((a,b)=>a+b,0) / scores.length);
                  const done = AVANCE.subjects.filter(s => Progress.getScore(s.quiz.id) !== null).length;
                  return { done, total: AVANCE.subjects.length, percent };
                })()
            : (lvl.id === 'expert' && typeof EXPERT !== 'undefined')
              ? (() => {
                  const scores = EXPERT.subjects.map(s => Progress.getScore(s.quiz.id) ?? 0);
                  const percent = Math.round(scores.reduce((a,b)=>a+b,0) / scores.length);
                  const done = EXPERT.subjects.filter(s => Progress.getScore(s.quiz.id) !== null).length;
                  return { done, total: EXPERT.subjects.length, percent };
                })()
            : { done: 0, total: lvl.subjectCount, percent: 0 };
          return `
          <div class="level-card ${lvl.locked ? 'level-card--locked' : ''}"
               style="--level-color:${lvl.color}"
               ${!lvl.locked && route ? `onclick="Router.navigate('${route}')"` : ''}>
            <div class="level-card__header">
              <span class="level-card__number">Niveau ${i + 1}</span>
              ${lvl.locked ? `<span class="level-card__lock-icon">${Icons.lock()}</span>` : ''}
            </div>
            <div class="level-card__arabic">${lvl.arabicLabel}</div>
            <div class="level-card__title">${lvl.label}</div>
            <div class="level-card__desc">${lvl.description}</div>
            <div class="level-card__meta">
              <span class="level-card__count">${lvl.locked ? 'Disponible prochainement' : `${lvl.subjectCount} sujets`}</span>
              ${!lvl.locked ? `<span class="chip chip--teal">Accessible</span>` : ''}
            </div>
            ${!lvl.locked ? `<div class="level-card__progress-bar"><div class="level-card__progress-fill" style="width:${p.percent}%"></div></div>` : ''}
          </div>`;
        }).join('')}
      </div>`;
  }

  /* ── Débutant ────────────────────────────────────────── */
  function debutant() {
    document.getElementById('page-debutant').innerHTML = `
      <div class="page-header">
        <span class="page-header__eyebrow">${DEBUTANT.arabicLabel}</span>
        <h1 class="page-header__title">Niveau Débutant</h1>
        <p class="page-header__desc">${DEBUTANT.description}</p>
        <div style="margin-top:var(--sp-3)">
          <span class="lesson-badge-source">Source : ${DEBUTANT.source}</span>
        </div>
      </div>
      <div class="grid-subjects">
        ${DEBUTANT.subjects.map(subj => {
          const score    = Progress.getScore(subj.quiz.id);
          const hasBadge = Progress.hasBadge(subj.badge.id);
          const avail    = subj.lessons.filter(l => l.status === 'available').length;
          const done     = subj.lessons.filter(l => Progress.isLessonDone(l.id)).length;
          const pct      = avail ? Math.round((done / subj.lessons.length) * 100) : 0;
          return `
          <div class="subject-card"
               onclick="Router.navigate('subject',{subjectId:'${subj.id}',level:'debutant',subjectTitle:'${subj.title.replace(/\'/g, "\\\'")}'})">
            <div style="display:flex;align-items:flex-start;justify-content:space-between">
              <div class="subject-card__icon-wrap">${Icons.byName(subj.icon)}</div>
              ${hasBadge ? `<span class="chip chip--gold">✦ Badge obtenu</span>`
                : score !== null ? `<span class="chip chip--${score >= 85 ? 'success' : 'muted'}">${score}%</span>`
                : avail ? `<span class="chip chip--teal">${avail} leçons</span>`
                : ''}
            </div>
            <div class="subject-card__arabic">${subj.arabicTitle}</div>
            <div class="subject-card__title">${subj.title}</div>
            <div class="subject-card__desc">${subj.description}</div>
            <div class="subject-card__footer">
              <span class="subject-card__lesson-count">
                ${avail}/${subj.lessons.length} leçons dispo.
              </span>
              <span class="subject-card__score ${score !== null && score >= 85 ? 'has-score' : ''}">
                ${score !== null ? `Quiz : ${score}%` : 'Quiz à faire'}
              </span>
            </div>
            <div class="subject-card__progress">
              <div class="subject-card__progress-fill" style="width:${pct}%"></div>
            </div>
          </div>`;
        }).join('')}
      </div>`;
  }

  /* ── Hub Questionnaires ──────────────────────────────── */
  function quizHub() {
    const allLevels = [
      { data: DEBUTANT,      label: 'Niveau Débutant',       color: '#1A6B68' },
      ...(typeof INTERMEDIAIRE !== 'undefined'
          ? [{ data: INTERMEDIAIRE, label: 'Niveau Intermédiaire', color: '#8A620A' }] : []),
      ...(typeof AVANCE  !== 'undefined'
          ? [{ data: AVANCE,  label: 'Niveau Avancé',  color: '#2A5080' }] : []),
      ...(typeof EXPERT !== 'undefined'
          ? [{ data: EXPERT, label: 'Niveau Expert', color: '#6B2D5E' }] : [])
    ];
    const allQ = allLevels.flatMap(({ data }) => data.subjects.map(subj => {
      const score   = Progress.getScore(subj.quiz.id);
      const hasQ    = subj.quiz.questions.length > 0;
      const status  = !hasQ ? 'unavailable'
                    : score === null ? 'available'
                    : score >= 85   ? 'passed' : 'failed';
      return { subj, score, hasQ, status };
    }));

    const done    = allQ.filter(q => q.score !== null).length;
    const passed  = allQ.filter(q => q.status === 'passed').length;
    const withScore = allQ.filter(q => q.score !== null);
    const avg     = withScore.length
      ? Math.round(withScore.reduce((a,b) => a + b.score, 0) / withScore.length) : null;
    const totalQ  = allQ.reduce((a,b) => a + b.subj.quiz.questions.length, 0);

    const renderCards = (subjects) => subjects.map(({ subj, score, hasQ, status }) => `
      <div class="qh-card qh-card--${status}">
        <div class="qh-card-top">
          <div class="qh-card-icon-sm">${Icons.byName(subj.icon)}</div>
          <div>
            ${status === 'passed'     ? `<span class="qh-status qh-status--pass">✓ Réussi</span>`
            : status === 'failed'     ? `<span class="qh-status qh-status--fail">Échoué</span>`
            : status === 'unavailable'? `<span class="qh-status qh-status--lock">Bientôt</span>`
            :                           `<span class="qh-status qh-status--new">À faire</span>`}
          </div>
        </div>
        <div class="qh-card-arabic">${subj.arabicTitle}</div>
        <div class="qh-card-title">${subj.title}</div>
        <div class="qh-card-meta">${subj.quiz.questions.length} questions · badge ≥ 85%</div>
        ${score !== null ? `
          <div class="qh-card-score-wrap">
            <div class="qh-card-score-bar">
              <div class="qh-card-score-fill ${score >= 85 ? 'pass' : 'fail'}"
                   style="width:${score}%"></div>
            </div>
            <div class="qh-card-score-num ${score >= 85 ? 'pass' : 'fail'}">${score}%</div>
          </div>
        ` : `<div class="qh-card-score-empty">Non commencé</div>`}
        <button class="btn ${status === 'passed' ? 'btn--outline' : 'btn--primary'} qh-card-btn"
                ${!hasQ ? 'disabled' : ''}
                onclick="Quiz.start(${JSON.stringify(subj.quiz).replace(/'/g,"&#39;").replace(/"/g,'&quot;')}, '${subj.title}', 'hub')">
          ${score !== null ? 'Réessayer' : 'Commencer'} ${Icons.arrowR()}
        </button>
      </div>`).join('');

    document.getElementById('page-quiz-hub').innerHTML = `
      <div class="page-header">
        <span class="page-header__eyebrow">الاختبارات</span>
        <h1 class="page-header__title">Questionnaires</h1>
        <p class="page-header__desc">Évaluez vos connaissances. Un score ≥ 85 % débloque le badge.</p>
      </div>
      <div class="qh-stats">
        <div class="qh-stat"><div class="qh-stat-val">${done}/${allQ.length}</div><div class="qh-stat-lbl">Complétés</div></div>
        <div class="qh-stat"><div class="qh-stat-val" style="color:var(--success)">${passed}</div><div class="qh-stat-lbl">Réussis ≥ 85%</div></div>
        <div class="qh-stat"><div class="qh-stat-val">${avg !== null ? avg+'%' : '—'}</div><div class="qh-stat-lbl">Moyenne</div></div>
        <div class="qh-stat"><div class="qh-stat-val">${totalQ}</div><div class="qh-stat-lbl">Questions total</div></div>
      </div>
      ${allLevels.map(({ data, label, color }) => {
        const lvlQ = data.subjects.map(subj => {
          const score = Progress.getScore(subj.quiz.id);
          const hasQ  = subj.quiz.questions.length > 0;
          const status = !hasQ ? 'unavailable' : score===null ? 'available' : score>=85 ? 'passed' : 'failed';
          return { subj, score, hasQ, status };
        });
        return `
        <div class="section-level-label" style="color:${color}">${label}</div>
        <div class="qh-grid">${renderCards(lvlQ)}</div>`;
      }).join('')}`;
  }

  /* ── Détail d'un sujet ───────────────────────────────── */
  /* ── Niveau Intermédiaire ────────────────────────────── */
  function intermediaire() {
    const lvl = INTERMEDIAIRE;
    document.getElementById('page-intermediaire').innerHTML = `
      <div class="page-header">
        <span class="page-header__eyebrow">${lvl.arabicLabel}</span>
        <h1 class="page-header__title">Niveau Intermédiaire</h1>
        <p class="page-header__desc">${lvl.description}</p>
        <div style="margin-top:var(--sp-3)">
          <span class="lesson-badge-source">Source : ${lvl.source}</span>
        </div>
      </div>
      <div class="grid-subjects">
        ${lvl.subjects.map(subj => {
          const score    = Progress.getScore(subj.quiz.id);
          const hasBadge = Progress.hasBadge(subj.badge.id);
          const avail    = subj.lessons.filter(l => l.status === 'available').length;
          const done     = subj.lessons.filter(l => Progress.isLessonDone(l.id)).length;
          return `
          <div class="subject-card"
               onclick="Router.navigate('subject',{subjectId:'${subj.id}',level:'intermediaire',subjectTitle:'${subj.title.replace(/\'/g, "\\\'")}'})">
            <div style="display:flex;align-items:flex-start;justify-content:space-between">
              <div class="subject-card__icon-wrap">${Icons.byName(subj.icon)}</div>
              ${hasBadge ? `<span class="chip chip--gold">✦ Badge obtenu</span>`
                : score !== null ? `<span class="chip chip--${score >= 85 ? 'success' : 'muted'}">${score}%</span>`
                : avail ? `<span class="chip chip--teal">${avail} leçons</span>`
                : ''}
            </div>
            <div class="subject-card__arabic">${subj.arabicTitle}</div>
            <div class="subject-card__title">${subj.title}</div>
            <div class="subject-card__desc">${subj.description}</div>
            <div class="subject-card__footer">
              <span class="subject-card__lesson-count">
                ${avail}/${subj.lessons.length} leçons dispo.
              </span>
              <span class="subject-card__score ${score !== null && score >= 85 ? 'has-score' : ''}">
                ${score !== null ? `${score}%` : Icons.arrowR()}
              </span>
            </div>
          </div>`;
        }).join('')}
      </div>`;
  }

  /* ── Niveau Avancé ───────────────────────────────────── */
  function avance() {
    if (typeof AVANCE === 'undefined') return;
    const lvl = AVANCE;
    document.getElementById('page-avance').innerHTML = `
      <div class="page-header">
        <span class="page-header__eyebrow">${lvl.arabicLabel}</span>
        <h1 class="page-header__title">Niveau Avancé</h1>
        <p class="page-header__desc">${lvl.description}</p>
        <div style="margin-top:var(--sp-3)">
          <span class="lesson-badge-source">Source : ${lvl.source}</span>
        </div>
      </div>
      <div class="grid-subjects">
        ${lvl.subjects.map(subj => {
          const score    = Progress.getScore(subj.quiz.id);
          const hasBadge = Progress.hasBadge(subj.badge.id);
          const avail    = subj.lessons.filter(l => l.status === 'available').length;
          const done     = subj.lessons.filter(l => Progress.isLessonDone(l.id)).length;
          const safeT    = subj.title.replace(/'/g, '&#39;');
          return `
          <div class="subject-card"
               onclick="Router.navigate('subject',{subjectId:'${subj.id}',level:'avance',subjectTitle:'${safeT}'})">
            <div style="display:flex;align-items:flex-start;justify-content:space-between">
              <div class="subject-card__icon-wrap">${Icons.byName(subj.icon)}</div>
              ${hasBadge ? `<span class="chip chip--gold">✦ Badge obtenu</span>`
                : score !== null ? `<span class="chip chip--${score >= 85 ? 'success' : 'muted'}">${score}%</span>`
                : avail ? `<span class="chip chip--teal">${avail} leçons</span>`
                : ''}
            </div>
            <div class="subject-card__arabic">${subj.arabicTitle}</div>
            <div class="subject-card__title">${subj.title}</div>
            <div class="subject-card__desc">${subj.description}</div>
            <div class="subject-card__footer">
              <span class="subject-card__lesson-count">
                ${avail}/${subj.lessons.length} leçons dispo.
              </span>
              <span class="subject-card__score ${score !== null && score >= 85 ? 'has-score' : ''}">
                ${score !== null ? `${score}%` : Icons.arrowR()}
              </span>
            </div>
          </div>`;
        }).join('')}
      </div>`;
  }

  function subject(subjectId, level) {
    const lvlData = (level === 'intermediaire' && typeof INTERMEDIAIRE !== 'undefined') ? INTERMEDIAIRE
                  : (level === 'avance'        && typeof AVANCE        !== 'undefined') ? AVANCE
                  : (level === 'expert'        && typeof EXPERT        !== 'undefined') ? EXPERT
                  : DEBUTANT;
    const subj = lvlData.subjects.find(s => s.id === subjectId);
    if (!subj) return;
    const score    = Progress.getScore(subj.quiz.id);
    const quizAvail = subj.quiz.questions.length > 0;

    document.getElementById('page-subject').innerHTML = `
      <div class="subject-detail__header">
        <div class="subject-detail__icon-big">${Icons.byName(subj.icon)}</div>
        <div class="subject-detail__info">
          <span class="subject-detail__arabic">${subj.arabicTitle}</span>
          <h1 class="subject-detail__title">${subj.title}</h1>
          <p class="subject-detail__desc">${subj.description}</p>
        </div>
      </div>

      <div class="section-title">Leçons <span class="count-chip">${subj.lessons.length}</span></div>
      <div class="lessons-list">
        ${subj.lessons.map((l, idx) => {
          const done   = Progress.isLessonDone(l.id);
          const avail  = l.status === 'available';
          const lvlKey = level || 'debutant';
          const safeSubjTitle  = subj.title.replace(/'/g, '&#39;');
          const safeLessTitle  = l.title.replace(/'/g, '&#39;');
          const clickAttr = avail
            ? `onclick="Router.navigate('lesson',{lessonId:'${l.id}',subjectId:'${subj.id}',level:'${lvlKey}',subjectTitle:'${safeSubjTitle}',lessonTitle:'${safeLessTitle}'})"`
            : '';
          const num = String(idx + 1).padStart(2, '0');
          return `
          <div class="lesson-item ${!avail ? 'lesson-item--locked' : ''}" ${clickAttr}>
            <span class="lesson-item__num">${num}</span>
            <span class="lesson-item__title">${l.title}</span>
            <span class="lesson-item__status ${done ? 'lesson-item__status--done' : ''}">
              ${done ? Icons.check() : (!avail ? Icons.lock() : Icons.arrowR())}
            </span>
          </div>`;
        }).join('')}
      </div>

      <div class="quiz-block ${!quizAvail ? 'quiz-block--locked' : ''}">
        <div class="quiz-block__icon">${Icons.quiz()}</div>
        <div class="quiz-block__info">
          <div class="quiz-block__title">${subj.quiz.title}</div>
          <div class="quiz-block__desc">
            ${score !== null
              ? `Score : <strong>${score}%</strong> — ${score >= 85 ? '✦ Badge débloqué !' : 'Score insuffisant (< 85 %)'}`
              : quizAvail ? 'Testez vos connaissances — ≥ 85 % pour le badge.'
              : 'Disponible après importation du PDF.'}
          </div>
        </div>
        ${score !== null ? `<span class="quiz-block__score">${score}%</span>` : ''}
        <button class="btn ${!quizAvail ? 'btn--outline' : 'btn--primary'} btn--sm"
                ${!quizAvail ? 'disabled' : ''}
                onclick="Quiz.start(${JSON.stringify(subj.quiz).replace(/'/g,"&#39;").replace(/"/g,'&quot;')}, '${subj.title}', 'subject')">
          ${score !== null ? 'Réessayer' : 'Commencer'} ${Icons.arrowR()}
        </button>
      </div>

      <div style="margin-top:var(--sp-6)">
        <button class="btn btn--ghost" onclick="Router.navigate('${level||'debutant'}')">
          Retour aux sujets
        </button>
      </div>`;
  }

  /* ── Leçon ───────────────────────────────────────────── */
  function lesson(lessonId, subjectId, level) {
    const lvlData = (level === 'intermediaire' && typeof INTERMEDIAIRE !== 'undefined') ? INTERMEDIAIRE
                  : (level === 'avance'        && typeof AVANCE        !== 'undefined') ? AVANCE
                  : (level === 'expert'        && typeof EXPERT        !== 'undefined') ? EXPERT
                  : DEBUTANT;
    const subj      = lvlData.subjects.find(s => s.id === subjectId);
    const lessonData = subj?.lessons.find(l => l.id === lessonId);
    if (lessonData) Progress.markLessonDone(lessonId);

    let bodyHtml = '';
    if (lessonData?.content && Array.isArray(lessonData.content)) {
      bodyHtml = lessonData.content.map(renderContentBlock).join('');
    } else {
      bodyHtml = `
        <div class="lesson-content__placeholder">
          <div class="lesson-content__placeholder-icon">${Icons.book()}</div>
          <h3>Contenu en cours de préparation</h3>
          <p>Disponible après importation du PDF correspondant.</p>
        </div>`;
    }

    document.getElementById('page-lesson').innerHTML = `
      <div class="lesson-body">
        <span class="lesson-badge-source">${lvlData.source}</span>
        <h1 class="lesson-title">${lessonData?.title || 'Leçon'}</h1>
        ${bodyHtml}
        <div class="lesson-nav-bar">
          <button class="btn btn--ghost"
                  onclick="Router.navigate('subject',{subjectId:'${subjectId}',level:'${level||'debutant'}',subjectTitle:'${subj?.title||''}'})">
            Retour aux leçons
          </button>
          <button class="btn btn--primary btn--sm"
                  onclick="Quiz.start(${JSON.stringify(subj?.quiz).replace(/'/g,"&#39;").replace(/"/g,'&quot;')}, '${subj?.title||''}', 'subject')">
            Faire le quiz
          </button>
        </div>
      </div>`;
  }

  /* ── Badges ──────────────────────────────────────────── */
  function badges() { Badges.renderPage(); }

  /* ── Progression ─────────────────────────────────────── */
  function progress() {
    const allLvls = [
      { data: DEBUTANT, route: 'debutant' },
      ...(typeof INTERMEDIAIRE !== 'undefined' ? [{ data: INTERMEDIAIRE, route: 'intermediaire' }] : []),
      ...(typeof AVANCE        !== 'undefined' ? [{ data: AVANCE,        route: 'avance'        }] : []),
      ...(typeof EXPERT        !== 'undefined' ? [{ data: EXPERT,        route: 'expert'        }] : [])
    ];

    const renderLevel = ({ data, route }) => {
      const allScores = data.subjects.map(s => Progress.getScore(s.quiz.id) ?? 0);
      const pct      = Math.round(allScores.reduce((a,b)=>a+b,0) / allScores.length);
      const done     = data.subjects.filter(s => Progress.getScore(s.quiz.id) !== null).length;
      const total    = data.subjects.length;
      return `
      <div style="background:var(--bg-card);border:1px solid var(--border-card);border-radius:var(--radius-xl);padding:var(--sp-6);margin-bottom:var(--sp-6)">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--sp-4)">
          <div>
            <div style="font-family:var(--font-display);font-size:var(--text-xl);font-weight:600">${data.label}</div>
            <div style="font-size:var(--text-sm);color:var(--text-muted)">${data.arabicLabel}</div>
          </div>
          <div style="font-family:var(--font-display);font-size:var(--text-3xl);font-weight:700;color:var(--gold)">${pct}%</div>
        </div>
        <div class="progress-bar"><div class="progress-bar__fill" style="width:${pct}%"></div></div>
        <div style="font-size:var(--text-xs);color:var(--text-muted);margin-top:var(--sp-2)">${done} questionnaire${done>1?'s':''} complété${done>1?'s':''} sur ${total}</div>
      </div>

      <div class="section-title" style="margin-top:var(--sp-2)">Sujets — ${data.label}</div>
      <div class="progress-overview" style="margin-bottom:var(--sp-10)">
        ${data.subjects.map(subj => {
          const score = Progress.getScore(subj.quiz.id);
          const pass  = score !== null && score >= 85;
          const avail = subj.lessons.filter(l => l.status === 'available').length;
          const done2 = subj.lessons.filter(l => Progress.isLessonDone(l.id)).length;
          const safeT = subj.title.replace(/'/g, '&#39;');
          return `
          <div class="progress-subject-row" style="cursor:pointer"
               onclick="Router.navigate('subject',{subjectId:'${subj.id}',level:'${route}',subjectTitle:'${safeT}'})">
            <div>
              <div class="progress-subject-row__name">${subj.title}</div>
              <div style="font-size:var(--text-xs);color:var(--text-muted)">${subj.arabicTitle} · ${done2}/${avail} leçons lues</div>
            </div>
            <div class="progress-subject-row__score ${pass ? 'pass' : ''}">${score !== null ? `${score}%` : '—'}</div>
            <div class="progress-bar-wrap">
              <div class="progress-bar"><div class="progress-bar__fill" style="width:${score !== null ? 100 : 0}%"></div></div>
            </div>
          </div>`;
        }).join('')}
      </div>`;
    };

    document.getElementById('page-progress').innerHTML = `
      <div class="page-header">
        <span class="page-header__eyebrow">التقدم</span>
        <h1 class="page-header__title">Ma Progression</h1>
        <p class="page-header__desc">Suivi de votre avancement sur l'ensemble des niveaux.</p>
      </div>
      ${allLvls.map(renderLevel).join('')}`;
  }

  /* ── Niveau Expert ──────────────────────────────────── */
  function expert() {
    if (typeof EXPERT === 'undefined') return;
    const lvl = EXPERT;
    document.getElementById('page-expert').innerHTML = `
      <div class="page-header">
        <span class="page-header__eyebrow">${lvl.arabicLabel}</span>
        <h1 class="page-header__title">Niveau Expert</h1>
        <p class="page-header__desc">${lvl.description}</p>
        <div style="margin-top:var(--sp-3)">
          <span class="lesson-badge-source">Source : ${lvl.source}</span>
        </div>
      </div>
      <div class="grid-subjects">
        ${lvl.subjects.map(subj => {
          const score    = Progress.getScore(subj.quiz.id);
          const hasBadge = Progress.hasBadge(subj.badge.id);
          const avail    = subj.lessons.filter(l => l.status === 'available').length;
          const done     = subj.lessons.filter(l => Progress.isLessonDone(l.id)).length;
          const safeT    = subj.title.replace(/'/g, '&#39;');
          const locked   = subj.quiz.status === 'locked' && avail === 0;
          return `
          <div class="subject-card ${locked ? 'subject-card--locked' : ''}"
               ${!locked ? `onclick="Router.navigate('subject',{subjectId:'${subj.id}',level:'expert',subjectTitle:'${safeT}'})"` : ''}>
            <div style="display:flex;align-items:flex-start;justify-content:space-between">
              <div class="subject-card__icon-wrap">${Icons.byName(subj.icon)}</div>
              ${locked ? `<span class="chip chip--muted">${Icons.lock()} À venir</span>`
                : hasBadge ? `<span class="chip chip--gold">✦ Badge obtenu</span>`
                : score !== null ? `<span class="chip chip--${score >= 85 ? 'success' : 'muted'}">${score}%</span>`
                : avail ? `<span class="chip chip--teal">${avail} leçons</span>`
                : ''}
            </div>
            <div class="subject-card__arabic">${subj.arabicTitle}</div>
            <div class="subject-card__title">${subj.title}</div>
            <div class="subject-card__desc">${subj.description}</div>
            <div class="subject-card__footer">
              <span class="subject-card__lesson-count">
                ${locked ? 'Prochainement' : `${avail}/${subj.lessons.length} leçons dispo.`}
              </span>
              <span class="subject-card__score ${score !== null && score >= 85 ? 'has-score' : ''}">
                ${score !== null ? `${score}%` : locked ? '' : Icons.arrowR()}
              </span>
            </div>
          </div>`;
        }).join('')}
      </div>`;
  }

  return { home, levels, debutant, intermediaire, avance, expert, quizHub, subject, lesson, badges, progress };
})();

/* ══════════════════════════════════════════════════════════
   § Initialisation
   ══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  Theme.init();
  Router.init();
  Badges.init();
  Router.navigate('home');

  /* Mobile menu */
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const sidebar   = document.getElementById('sidebar');
  const overlay   = document.getElementById('sidebar-overlay');

  mobileBtn?.addEventListener('click', () => {
    sidebar.classList.toggle('mobile-open');
    overlay.classList.toggle('visible');
  });
  overlay?.addEventListener('click', () => {
    sidebar.classList.remove('mobile-open');
    overlay.classList.remove('visible');
  });
});

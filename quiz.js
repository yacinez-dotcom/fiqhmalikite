/* ════════════════════════════════════════════════════════
   BRIQUE: Système de Badges (badges.js)
   Rôle   : Rendu du panneau badges pour tous les niveaux,
            logique de verrouillage/déverrouillage, toasts.
   Dépend : progress.js, Icons (app.js), DEBUTANT/INTERMEDIAIRE/AVANCE
   ════════════════════════════════════════════════════════ */

const Badges = (() => {

  /* ── Collecte dynamique de tous les badges ─────────── */
  function getAllBadges() {
    const gold   = [];
    const silver = [];

    const sources = [
      ...(typeof DEBUTANT      !== 'undefined' ? [DEBUTANT]      : []),
      ...(typeof INTERMEDIAIRE !== 'undefined' ? [INTERMEDIAIRE]  : []),
      ...(typeof AVANCE        !== 'undefined' ? [AVANCE]         : []),
      ...(typeof EXPERT        !== 'undefined' ? [EXPERT]         : []),
    ];

    sources.forEach(lvl => {
      if (lvl.levelBadge) gold.push({ ...lvl.levelBadge, _level: lvl.label });
      lvl.subjects.forEach(s => {
        if (s.badge) silver.push({ ...s.badge, _level: lvl.label });
      });
    });

    return { gold, silver };
  }

  /* ── Rendre la page badges complète ─────────────────── */
  function renderPage() {
    const { gold, silver } = getAllBadges();

    const goldEarned   = gold.filter(b => Progress.hasBadge(b.id)).length;
    const silverEarned = silver.filter(b => Progress.hasBadge(b.id)).length;

    const goldCount   = document.getElementById('gold-badge-count');
    const silverCount = document.getElementById('silver-badge-count');
    if (goldCount)   goldCount.textContent   = `${goldEarned}/${gold.length}`;
    if (silverCount) silverCount.textContent = `${silverEarned}/${silver.length}`;

    /* Grouper les badges argent par niveau */
    const sources = [
      ...(typeof DEBUTANT      !== 'undefined' ? [DEBUTANT]      : []),
      ...(typeof INTERMEDIAIRE !== 'undefined' ? [INTERMEDIAIRE]  : []),
      ...(typeof AVANCE        !== 'undefined' ? [AVANCE]         : []),
      ...(typeof EXPERT        !== 'undefined' ? [EXPERT]         : []),
    ];

    const goldGrid   = document.getElementById('gold-badges-grid');
    const silverGrid = document.getElementById('silver-badges-grid');

    if (goldGrid) goldGrid.innerHTML = gold.map(b => renderBadgeCard(b, b._level)).join('');

    if (silverGrid) {
      silverGrid.innerHTML = sources.map(lvl => {
        const lvlBadges = lvl.subjects.filter(s => s.badge).map(s => s.badge);
        if (!lvlBadges.length) return '';
        return `
          <div class="section-level-label" style="color:${lvl.levelColor || 'var(--text-primary)'};
               font-size:var(--text-lg);border-bottom:2px solid currentColor;
               margin:var(--sp-6) 0 var(--sp-4)">
            ${lvl.label} — ${lvl.arabicLabel}
          </div>
          <div class="badges-grid-inner">
            ${lvlBadges.map(b => renderBadgeCard(b, lvl.label)).join('')}
          </div>`;
      }).join('');
    }
  }

  /* ── Rendre une carte badge ──────────────────────────── */
  function renderBadgeCard(badge, levelLabel) {
    const earned     = Progress.hasBadge(badge.id);
    const info       = Progress.getBadgeInfo(badge.id);
    const stateClass = earned ? `badge-card--${badge.color}` : 'badge-card--locked';
    const iconHtml   = Icons.badge(badge.icon, badge.color, earned);
    const tooltip    = earned
      ? `Obtenu le ${info.date} · Score : ${info.score} %`
      : badge.unlockCondition;

    return `
      <div class="badge-card ${stateClass}"
           role="${earned ? 'img' : 'button'}"
           aria-label="${badge.title}${earned ? '' : ' (verrouillé)'}">
        <div class="badge-card__icon-wrap">${iconHtml}</div>
        <div class="badge-card__arabic">${badge.arabicTitle}</div>
        <div class="badge-card__title">${badge.title}</div>
        ${earned && info ? `<div class="badge-card__score">${info.score} %</div>` : ''}
        ${!earned ? `<div class="badge-tooltip">${tooltip}</div>` : ''}
      </div>`;
  }

  /* ── Toast de félicitations ──────────────────────────── */
  function celebrateBadge(badgeId) {
    const { gold, silver } = getAllBadges();
    const badge = [...gold, ...silver].find(b => b.id === badgeId);
    if (!badge) return;

    const toast = document.createElement('div');
    toast.className = `toast toast--${badge.color}`;
    toast.innerHTML = `
      <span style="font-size:1.4rem">${badge.color === 'gold' ? '🌟' : '✦'}</span>
      <div>
        <div style="font-weight:700;margin-bottom:2px">Badge obtenu !</div>
        <div style="opacity:0.8;font-size:var(--text-xs)">${badge.title}</div>
      </div>`;
    document.getElementById('toast-container').appendChild(toast);
    setTimeout(() => toast.remove(), 4500);
  }

  /* ── Init ─────────────────────────────────────────────── */
  function init() {
    document.addEventListener('badge:earned', e => celebrateBadge(e.detail.badgeId));
  }

  return { renderPage, renderBadgeCard, init };
})();

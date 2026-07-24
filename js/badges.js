/* ════════════════════════════════════════════════════════
   BRIQUE: Système de Badges (badges.js)
   Rôle   : Rendu du panneau badges, logique de
            verrouillage/déverrouillage et tooltips.
   Dépend : progress.js, Icons (app.js)
   ════════════════════════════════════════════════════════ */

const Badges = (() => {

  /* ── Tous les badges du site ─────────────────────────── */
  function getAllBadges() {
    const goldBadge   = DEBUTANT.levelBadge;
    const silverBadges = DEBUTANT.subjects.map(s => s.badge);
    return { gold: [goldBadge], silver: silverBadges };
  }

  /* ── Rendre la page badges complète ─────────────────── */
  function renderPage() {
    const { gold, silver } = getAllBadges();

    const goldEarned   = gold.filter(b => Progress.hasBadge(b.id)).length;
    const silverEarned = silver.filter(b => Progress.hasBadge(b.id)).length;

    /* Compteurs */
    const goldCount   = document.getElementById('gold-badge-count');
    const silverCount = document.getElementById('silver-badge-count');
    if (goldCount)   goldCount.textContent   = `${goldEarned}/${gold.length}`;
    if (silverCount) silverCount.textContent = `${silverEarned}/${silver.length}`;

    /* Grilles */
    const goldGrid   = document.getElementById('gold-badges-grid');
    const silverGrid = document.getElementById('silver-badges-grid');

    if (goldGrid)   goldGrid.innerHTML   = gold.map(renderBadgeCard).join('');
    if (silverGrid) silverGrid.innerHTML = silver.map(renderBadgeCard).join('');
  }

  /* ── Rendre une carte badge ──────────────────────────── */
  function renderBadgeCard(badge) {
    const earned   = Progress.hasBadge(badge.id);
    const info     = Progress.getBadgeInfo(badge.id);
    const stateClass = earned
      ? `badge-card--${badge.color}`
      : 'badge-card--locked';

    const iconHtml = Icons.badge(badge.icon, badge.color, earned);
    const tooltip  = earned
      ? `Obtenu le ${info.date} · Score : ${info.score} %`
      : badge.unlockCondition;

    return `
      <div class="badge-card ${stateClass}" role="${earned ? 'img' : 'button'}" 
           aria-label="${badge.title}${earned ? '' : ' (verrouillé)'}">
        <div class="badge-card__icon-wrap">
          ${iconHtml}
        </div>
        <div class="badge-card__arabic">${badge.arabicTitle}</div>
        <div class="badge-card__title">${badge.title}</div>
        ${earned && info ? `<div class="badge-card__score">${info.score} %</div>` : ''}
        ${!earned ? `<div class="badge-tooltip">${tooltip}</div>` : ''}
      </div>
    `;
  }

  /* ── Toast de félicitations quand badge obtenu ───────── */
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
      </div>
    `;
    document.getElementById('toast-container').appendChild(toast);
    setTimeout(() => toast.remove(), 4500);
  }

  /* ── Initialisation ──────────────────────────────────── */
  function init() {
    document.addEventListener('badge:earned', e => {
      celebrateBadge(e.detail.badgeId);
    });
  }

  return { renderPage, renderBadgeCard, init };
})();

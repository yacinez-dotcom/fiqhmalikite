/* ════════════════════════════════════════════════════════
   BRIQUE: Suivi de Progression (progress.js)
   Rôle   : Lecture / écriture de la progression dans
            localStorage. Source de vérité pour les scores,
            leçons complétées et badges obtenus.
   Dépend : Aucune
   ════════════════════════════════════════════════════════ */

const Progress = (() => {
  const KEY = 'fiqh-progress';

  /* ── Structure par défaut ──────────────────────────── */
  const DEFAULT = {
    scores:           {},  /* { 'quiz-purification': 92, ... } */
    completedLessons: [],  /* ['pur-01', 'pur-02', ...] */
    earnedBadges:     {},  /* { 'badge-purification': { date: ISO, score: 92 } } */
    lastVisited:      null
  };

  /* ── Lire depuis localStorage ───────────────────────── */
  function _load() {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? { ...DEFAULT, ...JSON.parse(raw) } : { ...DEFAULT };
    } catch { return { ...DEFAULT }; }
  }

  /* ── Sauvegarder ────────────────────────────────────── */
  function _save(data) {
    try { localStorage.setItem(KEY, JSON.stringify(data)); } catch {}
  }

  /* ── Enregistrer un score de quiz ───────────────────── */
  function setScore(quizId, score) {
    const d = _load();
    d.scores[quizId] = score;
    _save(d);
    _checkBadgeUnlock(quizId, score, d);
  }

  /* ── Obtenir un score ───────────────────────────────── */
  function getScore(quizId) {
    return _load().scores[quizId] ?? null;
  }

  /* ── Marquer une leçon comme terminée ───────────────── */
  function markLessonDone(lessonId) {
    const d = _load();
    if (!d.completedLessons.includes(lessonId)) {
      d.completedLessons.push(lessonId);
      _save(d);
    }
  }

  /* ── Vérifier si une leçon est terminée ─────────────── */
  function isLessonDone(lessonId) {
    return _load().completedLessons.includes(lessonId);
  }

  /* ── Vérifier si un badge est obtenu ────────────────── */
  function hasBadge(badgeId) {
    return !!_load().earnedBadges[badgeId];
  }

  /* ── Infos d'un badge (date + score) ────────────────── */
  function getBadgeInfo(badgeId) {
    return _load().earnedBadges[badgeId] ?? null;
  }

  /* ── Déverrouiller un badge ─────────────────────────── */
  function unlockBadge(badgeId, score) {
    const d = _load();
    if (!d.earnedBadges[badgeId]) {
      d.earnedBadges[badgeId] = {
        date:  new Date().toLocaleDateString('fr-FR'),
        score: score
      };
      _save(d);
    }
  }

  /* ── Vérification automatique après quiz ─────────────── */
  function _checkBadgeUnlock(quizId, score, data) {
    if (score < 85) return;

    /* Badges de sujets (argent) */
    const quizToBadge = {
      'quiz-purification': 'badge-purification',
      'quiz-priere':       'badge-priere',
      'quiz-jeune':        'badge-jeune',
      'quiz-zakat':        'badge-zakat',
    };
    const badgeId = quizToBadge[quizId];
    if (badgeId && !data.earnedBadges[badgeId]) {
      unlockBadge(badgeId, score);
      _dispatchBadgeEvent(badgeId, 'silver');
    }

    /* Badge de niveau (or) — si tous les sujets ≥ 85 % */
    const allQuizIds = Object.keys(quizToBadge);
    const freshData  = _load();
    const allPassed  = allQuizIds.every(
      qid => (freshData.scores[qid] ?? 0) >= 85
    );
    if (allPassed && !freshData.earnedBadges['badge-debutant-or']) {
      unlockBadge('badge-debutant-or', _averageScore(freshData.scores));
      _dispatchBadgeEvent('badge-debutant-or', 'gold');
    }
  }

  /* ── Moyenne des scores ─────────────────────────────── */
  function _averageScore(scores) {
    const vals = Object.values(scores).filter(v => v !== null);
    if (!vals.length) return 0;
    return Math.round(vals.reduce((a, b) => a + b, 0) / vals.length);
  }

  /* ── Calcul progression globale niveau débutant ──────── */
  function getDebutantProgress() {
    const d = _load();
    const quizIds = ['quiz-purification', 'quiz-priere', 'quiz-jeune', 'quiz-zakat'];
    const done    = quizIds.filter(id => d.scores[id] !== undefined).length;
    return { done, total: quizIds.length, percent: Math.round((done / quizIds.length) * 100) };
  }

  /* ── Événement personnalisé pour badge obtenu ────────── */
  function _dispatchBadgeEvent(badgeId, color) {
    document.dispatchEvent(new CustomEvent('badge:earned', {
      detail: { badgeId, color }
    }));
  }

  /* ── Réinitialiser (dev / debug) ─────────────────────── */
  function reset() {
    localStorage.removeItem(KEY);
    window.location.reload();
  }

  return {
    setScore,
    getScore,
    markLessonDone,
    isLessonDone,
    hasBadge,
    getBadgeInfo,
    unlockBadge,
    getDebutantProgress,
    reset
  };
})();

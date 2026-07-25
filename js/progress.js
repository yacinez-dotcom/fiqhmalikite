/* ════════════════════════════════════════════════════════
   BRIQUE: Suivi de Progression (progress.js)
   Rôle   : Lecture / écriture de la progression dans
            localStorage. Source de vérité pour les scores,
            leçons complétées et badges obtenus.
   Dépend : Aucune (lit les globales DEBUTANT/INTERMEDIAIRE/AVANCE
            si disponibles pour la vérification des badges)
   ════════════════════════════════════════════════════════ */

const Progress = (() => {
  const KEY = 'fiqh-progress';

  const DEFAULT = {
    scores:           {},
    completedLessons: [],
    earnedBadges:     {},
    lastVisited:      null
  };

  function _load() {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? { ...DEFAULT, ...JSON.parse(raw) } : { ...DEFAULT };
    } catch { return { ...DEFAULT }; }
  }

  function _save(data) {
    try { localStorage.setItem(KEY, JSON.stringify(data)); } catch {}
  }

  /* ── Construire dynamiquement le mapping quiz → badge ── */
  function _buildQuizBadgeMap() {
    const map = {};       /* quizId  → subject badgeId  */
    const lvls = {};      /* levelId → { quizIds[], badgeId } */

    const sources = [
      ...(typeof DEBUTANT      !== 'undefined' ? [DEBUTANT]      : []),
      ...(typeof INTERMEDIAIRE !== 'undefined' ? [INTERMEDIAIRE]  : []),
      ...(typeof AVANCE        !== 'undefined' ? [AVANCE]         : []),
      ...(typeof EXPERT        !== 'undefined' ? [EXPERT]         : []),
    ];

    sources.forEach(lvl => {
      const quizIds = [];
      lvl.subjects.forEach(s => {
        if (s.quiz && s.quiz.id && s.badge && s.badge.id) {
          map[s.quiz.id] = s.badge.id;
          quizIds.push(s.quiz.id);
        }
      });
      if (lvl.levelBadge) {
        lvls[lvl.id] = { quizIds, badgeId: lvl.levelBadge.id };
      }
    });
    return { map, lvls };
  }

  /* ── Enregistrer un score ───────────────────────────── */
  function setScore(quizId, score) {
    const d = _load();
    d.scores[quizId] = score;
    _save(d);
    _checkBadgeUnlock(quizId, score);
  }

  function getScore(quizId) {
    return _load().scores[quizId] ?? null;
  }

  /* ── Leçons ─────────────────────────────────────────── */
  function markLessonDone(lessonId) {
    const d = _load();
    if (!d.completedLessons.includes(lessonId)) {
      d.completedLessons.push(lessonId);
      _save(d);
    }
  }

  function isLessonDone(lessonId) {
    return _load().completedLessons.includes(lessonId);
  }

  /* ── Badges ─────────────────────────────────────────── */
  function hasBadge(badgeId) {
    return !!_load().earnedBadges[badgeId];
  }

  function getBadgeInfo(badgeId) {
    return _load().earnedBadges[badgeId] ?? null;
  }

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
  function _checkBadgeUnlock(quizId, score) {
    if (score < 85) return;

    const { map, lvls } = _buildQuizBadgeMap();
    const data = _load();

    /* 1. Badge de sujet (argent) */
    const subjectBadgeId = map[quizId];
    if (subjectBadgeId && !data.earnedBadges[subjectBadgeId]) {
      unlockBadge(subjectBadgeId, score);
      _dispatchBadgeEvent(subjectBadgeId, 'silver');
    }

    /* 2. Badge de niveau (or) — si tous les sujets du niveau ≥ 85 */
    const freshData = _load();
    Object.values(lvls).forEach(({ quizIds, badgeId }) => {
      if (freshData.earnedBadges[badgeId]) return;          /* déjà obtenu */
      if (!quizIds.includes(quizId)) return;                /* autre niveau */
      const allPassed = quizIds.every(
        qid => (freshData.scores[qid] ?? 0) >= 85
      );
      if (allPassed) {
        const avg = Math.round(
          quizIds.reduce((a, qid) => a + (freshData.scores[qid] ?? 0), 0) / quizIds.length
        );
        unlockBadge(badgeId, avg);
        _dispatchBadgeEvent(badgeId, 'gold');
      }
    });
  }

  function _dispatchBadgeEvent(badgeId, color) {
    document.dispatchEvent(new CustomEvent('badge:earned', {
      detail: { badgeId, color }
    }));
  }

  /* ── Calcul progression par niveau ─────────────────── */
  function getDebutantProgress() {
    const d = _load();
    const quizIds = typeof DEBUTANT !== 'undefined'
      ? DEBUTANT.subjects.map(s => s.quiz.id)
      : ['quiz-purification','quiz-priere','quiz-jeune','quiz-zakat'];
    const done = quizIds.filter(id => d.scores[id] !== undefined).length;
    return { done, total: quizIds.length, percent: Math.round((done / quizIds.length) * 100) };
  }

  function reset() {
    localStorage.removeItem(KEY);
    window.location.reload();
  }

  return {
    setScore, getScore,
    markLessonDone, isLessonDone,
    hasBadge, getBadgeInfo, unlockBadge,
    getDebutantProgress, reset
  };
})();

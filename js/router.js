/* ════════════════════════════════════════════════════════
   BRIQUE: Navigation / Routeur (router.js)
   ════════════════════════════════════════════════════════ */

const Router = (() => {
  let _history = ['home'];
  let _currentSubjectId = null;
  let _currentLevel = 'debutant';

  function navigate(pageId, params = {}) {
    if (pageId === 'debutant')      _currentLevel = 'debutant';
    if (pageId === 'intermediaire') _currentLevel = 'intermediaire';
    if (pageId === 'avance')        _currentLevel = 'avance';
    if (pageId === 'expert')        _currentLevel = 'expert';

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById(`page-${pageId}`);
    if (target) target.classList.add('active');

    const isLevelPage = ['debutant','intermediaire','avance','expert','subject','lesson'].includes(pageId);
    document.querySelectorAll('.nav-item').forEach(item => {
      const r = item.dataset.route;
      item.classList.toggle('active',
        r === pageId ||
        (r === 'levels'   && isLevelPage) ||
        (r === 'quiz-hub' && pageId === 'quiz'));
    });

    if (_history[_history.length - 1] !== pageId) _history.push(pageId);
    _updateBreadcrumb(pageId, params);
    document.querySelector('.main-content')?.scrollTo(0, 0);

    if (pageId === 'home')          Renderer.home();
    if (pageId === 'levels')        Renderer.levels();
    if (pageId === 'debutant')      Renderer.debutant();
    if (pageId === 'intermediaire') Renderer.intermediaire();
    if (pageId === 'avance')        Renderer.avance();
    if (pageId === 'expert')        Renderer.expert();
    if (pageId === 'quiz-hub')      { Renderer.quizHub(); _updateQuizChip(); }
    if (pageId === 'badges')        Renderer.badges();
    if (pageId === 'progress')      Renderer.progress();
    if (pageId === 'subject' && params.subjectId) {
      _currentSubjectId = params.subjectId;
      if (params.level) _currentLevel = params.level;
      Renderer.subject(params.subjectId, params.level || _currentLevel);
    }
    if (pageId === 'lesson' && params.lessonId) {
      Renderer.lesson(params.lessonId, params.subjectId, params.level || _currentLevel);
    }
  }

  function back() {
    if (_history.length > 1) {
      _history.pop();
      const prev = _history[_history.length - 1];
      _history.pop();
      navigate(prev);
    }
  }

  function _updateBreadcrumb(pageId, params) {
    const bc = document.getElementById('breadcrumb');
    if (!bc) return;

    const crumbs = [{ label: 'Accueil', route: 'home' }];
    const lvl = params.level || _currentLevel;
    const lvlLabel = lvl === 'intermediaire' ? 'Intermédiaire'
                   : lvl === 'avance'        ? 'Avancé'
                   : lvl === 'expert'       ? 'Expert'
                   : 'Débutant';
    const lvlRoute = lvl === 'intermediaire' ? 'intermediaire'
                   : lvl === 'avance'        ? 'avance'
                   : lvl === 'expert'       ? 'expert'
                   : 'debutant';

    if (['levels','debutant','intermediaire','avance','expert','subject','lesson','quiz'].includes(pageId))
      crumbs.push({ label: 'Niveaux', route: 'levels' });

    if (['debutant','intermediaire','avance','expert','subject','lesson','quiz'].includes(pageId))
      crumbs.push({ label: lvlLabel, route: lvlRoute });

    if (['subject','lesson','quiz'].includes(pageId) && params.subjectTitle)
      crumbs.push({ label: params.subjectTitle, route: 'subject',
                    params: { subjectId: params.subjectId, level: lvl } });

    if (pageId === 'lesson' && params.lessonTitle)
      crumbs.push({ label: params.lessonTitle, route: 'lesson' });
    if (pageId === 'quiz')     crumbs.push({ label: 'Questionnaire', route: 'quiz' });
    if (pageId === 'quiz-hub') crumbs.push({ label: 'Questionnaires', route: 'quiz-hub' });
    if (pageId === 'badges')   crumbs.push({ label: 'Mes Badges',     route: 'badges' });
    if (pageId === 'progress') crumbs.push({ label: 'Ma Progression', route: 'progress' });

    bc.innerHTML = crumbs.map((c, i) => {
      const isLast = i === crumbs.length - 1;
      const sep    = i > 0 ? `<span class="bc-sep">›</span>` : '';
      if (isLast) return `${sep}<span class="bc-item bc-current">${c.label}</span>`;
      return `${sep}<span class="bc-item"
        onclick="Router.navigate('${c.route}',${JSON.stringify(c.params || {})})"
      >${c.label}</span>`;
    }).join('');
  }

  function _updateQuizChip() {
    const chip = document.getElementById('nav-quiz-count');
    if (!chip) return;
    const allSubjects = [
      ...DEBUTANT.subjects,
      ...(typeof INTERMEDIAIRE !== 'undefined' ? INTERMEDIAIRE.subjects : []),
      ...(typeof AVANCE        !== 'undefined' ? AVANCE.subjects        : []),
      ...(typeof EXPERT        !== 'undefined' ? EXPERT.subjects        : [])
    ];
    const done  = allSubjects.filter(s => Progress.getScore(s.quiz.id) !== null).length;
    const total = allSubjects.filter(s => s.quiz.questions.length > 0).length;
    if (done > 0) { chip.textContent = `${done}/${total}`; chip.style.display = 'inline-flex'; }
  }

  function init() {
    document.querySelectorAll('[data-route]').forEach(el => {
      el.addEventListener('click', () => navigate(el.dataset.route));
    });
    setTimeout(_updateQuizChip, 200);
  }

  function getCurrentSubjectId() { return _currentSubjectId; }
  function getCurrentLevel()     { return _currentLevel; }

  return { navigate, back, init, getCurrentSubjectId, getCurrentLevel };
})();

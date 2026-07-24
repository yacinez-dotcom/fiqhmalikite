/* ════════════════════════════════════════════════════════
   BRIQUE: Moteur de Quiz (quiz.js)
   Rôle   : Question par question, score, résultat, badges.
   Dépend : progress.js, router.js, Icons (app.js)
   ════════════════════════════════════════════════════════ */

const Quiz = (() => {
  let _s = {
    questions: [], currentIdx: 0, answers: {},
    quizId: null, subjectTitle: '', origin: 'subject', locked: false
  };

  /* ── Démarrer ────────────────────────────────────────── */
  function start(quizData, subjectTitle, origin = 'subject') {
    if (!quizData || !quizData.questions.length) {
      _renderEmpty(subjectTitle, origin);
      return;
    }
    _s = {
      questions: quizData.questions, currentIdx: 0, answers: {},
      quizId: quizData.id, subjectTitle, origin, locked: false
    };
    Router.navigate('quiz');
    _renderQ();
  }

  /* ── Rendre la question courante ─────────────────────── */
  function _renderQ() {
    const q   = _s.questions[_s.currentIdx];
    const pct = Math.round((_s.currentIdx / _s.questions.length) * 100);
    const letters = ['A','B','C','D','E'];

    document.getElementById('quiz-content').innerHTML = `
      <div class="qz-shell">

        <div class="qz-header">
          <button class="btn btn--ghost btn--sm" onclick="Quiz._quit()">
            ${Icons.arrowL()} Quitter
          </button>
          <div class="qz-meta">
            <span class="qz-subject">${_s.subjectTitle}</span>
            <span class="qz-counter">${_s.currentIdx + 1} / ${_s.questions.length}</span>
          </div>
        </div>

        <div class="qz-progress-track">
          <div class="qz-progress-fill" style="width:${pct}%"></div>
        </div>

        <div class="qz-question-wrap">
          <div class="qz-question-num">Question ${_s.currentIdx + 1}</div>
          <div class="qz-question-text">${q.text}</div>
        </div>

        <div class="qz-choices">
          ${q.choices.map((c, i) => `
            <button class="qz-choice" data-choice="${c.id}"
                    onclick="Quiz._answer('${q.id}','${c.id}','${q.correctId}')">
              <span class="qz-choice-letter">${letters[i]}</span>
              <span class="qz-choice-text">${c.text}</span>
            </button>
          `).join('')}
        </div>

        <div class="qz-explanation" id="qz-expl" style="display:none">
          <div class="qz-explanation-label">Explication</div>
          <div class="qz-explanation-text" id="qz-expl-text"></div>
        </div>

        <div class="qz-footer" id="qz-footer" style="display:none">
          <button class="btn btn--primary" onclick="Quiz._next()">
            ${_s.currentIdx + 1 < _s.questions.length
              ? 'Question suivante' : 'Voir le résultat'}
            ${Icons.arrowR()}
          </button>
        </div>

      </div>`;
  }

  /* ── Traiter une réponse ─────────────────────────────── */
  function _answer(qid, choiceId, correctId) {
    if (_s.locked) return;
    _s.locked = true;
    _s.answers[qid] = choiceId;

    const isOk = choiceId === correctId;

    document.querySelectorAll('.qz-choice').forEach(btn => {
      btn.disabled = true;
      const bid = btn.dataset.choice;
      if (bid === correctId)              btn.classList.add('qz-choice--correct');
      else if (bid === choiceId && !isOk) btn.classList.add('qz-choice--wrong');
      else                                btn.classList.add('qz-choice--dim');
    });

    /* Explication */
    const q = _s.questions[_s.currentIdx];
    if (q.explanation) {
      document.getElementById('qz-expl-text').textContent = q.explanation;
      document.getElementById('qz-expl').style.display = 'block';
    }

    document.getElementById('qz-footer').style.display = 'flex';
  }

  /* ── Passer à la suivante ────────────────────────────── */
  function _next() {
    _s.currentIdx++;
    _s.locked = false;
    _s.currentIdx < _s.questions.length ? _renderQ() : _showResult();
  }

  /* ── Résultat final ──────────────────────────────────── */
  function _showResult() {
    const { questions, answers, quizId, subjectTitle, origin } = _s;
    let correct = 0;
    const recap = questions.map(q => {
      const ok = answers[q.id] === q.correctId;
      if (ok) correct++;
      return ok;
    });

    const score = Math.round((correct / questions.length) * 100);
    const pass  = score >= 85;
    Progress.setScore(quizId, score);

    /* Badge associé */
    const subj  = DEBUTANT.subjects.find(s => s.quiz.id === quizId);
    const badge = subj?.badge;
    const badgeJustEarned = pass && badge && Progress.hasBadge(badge.id);

    const backRoute = origin === 'hub' ? 'quiz-hub' : 'debutant';
    const backLabel = origin === 'hub' ? 'Tous les questionnaires' : 'Retour aux sujets';

    document.getElementById('quiz-content').innerHTML = `
      <div class="qz-result">

        <div class="qz-result-circle ${pass ? 'pass' : 'fail'}">
          <div class="qz-result-pct">${score}<span>%</span></div>
          <div class="qz-result-sub">${correct} / ${questions.length} correctes</div>
        </div>

        ${badgeJustEarned ? `
          <div class="qz-badge-earned">
            <div class="qz-badge-icon">${Icons.byName(badge.icon)}</div>
            <div>
              <div class="qz-badge-title">Badge débloqué ✦</div>
              <div class="qz-badge-name">${badge.title}</div>
            </div>
          </div>
        ` : !pass ? `
          <div class="qz-fail-msg">
            Il faut atteindre <strong>85 %</strong> pour obtenir le badge.<br>
            Révisez les leçons puis réessayez !
          </div>
        ` : `
          <div class="qz-badge-earned">
            <div class="qz-badge-icon">${Icons.byName(badge?.icon || 'star8')}</div>
            <div>
              <div class="qz-badge-title">Badge déjà obtenu ✦</div>
              <div class="qz-badge-name">${badge?.title || ''}</div>
            </div>
          </div>
        `}

        <div class="qz-recap">
          <div class="qz-recap-title">Récapitulatif des réponses</div>
          <div class="qz-recap-grid">
            ${recap.map((ok, i) => `
              <div class="qz-recap-item ${ok ? 'ok' : 'ko'}" title="Question ${i+1}">
                ${ok ? '✓' : '✗'}
              </div>`).join('')}
          </div>
        </div>

        <div class="qz-result-actions">
          <button class="btn btn--outline" onclick="Router.navigate('${backRoute}')">
            ${Icons.arrowL()} ${backLabel}
          </button>
          <button class="btn btn--primary" onclick="Quiz.retry()">
            Réessayer
          </button>
          <button class="btn btn--ghost" onclick="Router.navigate('badges')">
            ${Icons.badgeNav()} Mes badges
          </button>
        </div>

      </div>`;
  }

  /* ── Quitter ─────────────────────────────────────────── */
  function _quit() {
    if (_s.origin === 'hub') Router.navigate('quiz-hub');
    else Router.back();
  }

  /* ── Réessayer ───────────────────────────────────────── */
  function retry() {
    _s.currentIdx = 0;
    _s.answers    = {};
    _s.locked     = false;
    _renderQ();
  }

  /* ── Vide (pas encore de questions) ─────────────────── */
  function _renderEmpty(subjectTitle, origin) {
    Router.navigate('quiz');
    const back = origin === 'hub' ? 'quiz-hub' : 'debutant';
    document.getElementById('quiz-content').innerHTML = `
      <div class="qz-empty">
        <div class="qz-empty-icon">${Icons.quiz()}</div>
        <h3>Questionnaire à venir</h3>
        <p>Les questions pour <strong>${subjectTitle}</strong> seront disponibles prochainement.</p>
        <button class="btn btn--outline" onclick="Router.navigate('${back}')">
          ${Icons.arrowL()} Retour
        </button>
      </div>`;
  }

  return { start, retry, _answer, _next, _quit };
})();

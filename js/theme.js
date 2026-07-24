/* ════════════════════════════════════════════════════════
   BRIQUE: Thème Clair / Sombre (theme.js)
   Rôle   : Gestion du toggle dark/light mode.
            Persistance dans localStorage.
   Dépend : Aucune
   ════════════════════════════════════════════════════════ */

const Theme = (() => {
  const STORAGE_KEY = 'fiqh-theme';
  const ROOT = document.documentElement;

  /* ── Obtenir le thème actuel ────────────────────────── */
  function getCurrent() {
    return ROOT.getAttribute('data-theme') || 'light';
  }

  /* ── Appliquer un thème ─────────────────────────────── */
  function apply(theme) {
    ROOT.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    _updateToggleUI(theme);
  }

  /* ── Basculer ───────────────────────────────────────── */
  function toggle() {
    apply(getCurrent() === 'light' ? 'dark' : 'light');
  }

  /* ── Mettre à jour le bouton toggle ─────────────────── */
  function _updateToggleUI(theme) {
    const label = document.getElementById('theme-label');
    const icon  = document.getElementById('theme-icon');
    if (label) label.textContent = theme === 'dark' ? 'Mode Clair' : 'Mode Sombre';
    if (icon)  icon.innerHTML = theme === 'dark' ? Icons.sun() : Icons.moon();
  }

  /* ── Initialisation ─────────────────────────────────── */
  function init() {
    /* Priorité : préférence sauvegardée > préférence système */
    const saved   = localStorage.getItem(STORAGE_KEY);
    const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    apply(saved || prefers);

    document.getElementById('theme-toggle')
      ?.addEventListener('click', toggle);
  }

  return { init, toggle, getCurrent, apply };
})();

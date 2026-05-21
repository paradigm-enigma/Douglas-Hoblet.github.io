/* Dark/light theme toggle with localStorage persistence */
(function () {
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch (e) {}
  }

  // Initialize from stored preference, then system preference
  let stored = null;
  try { stored = localStorage.getItem('theme'); } catch (e) {}
  if (stored === 'dark' || stored === 'light') {
    apply(stored);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    apply('dark');
  }

  if (btn) {
    btn.addEventListener('click', () => {
      const current = root.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      apply(next);
    });
  }
})();

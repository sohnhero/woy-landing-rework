import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('woy-theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return 'light'; // Light mode actif par défaut à l'ouverture du site
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    const isDark = theme === 'dark';

    root.classList.toggle('dark', isDark);
    root.setAttribute('data-theme', theme);

    try {
      localStorage.setItem('woy-theme', theme);
    } catch {}

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute('content', isDark ? '#12110e' : '#f8f6ef');
    }
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';

    // Use View Transitions API if supported for cinematic transition
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        setTheme(next);
      });
    } else {
      setTheme(next);
    }
  };

  return { theme, toggleTheme, isDark: theme === 'dark' };
}


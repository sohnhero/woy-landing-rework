import { useEffect, useState } from 'react';
import Icon from './Icon.jsx';
import { NAV_LINKS } from '../data.js';

export default function Navbar({ onJoin, motionPaused = false, onToggleMotion, theme = 'light', onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const isDark = theme === 'dark';

  return (
    <header className="nav-wrap">
      <nav className="navbar" aria-label="Navigation principale">
        <a href="#" className="brand" aria-label="WÔY Academy, accueil"><img src="/assets/woy-logo.png" alt="WÔY Academy" /></a>
        <div className={open ? 'nav-links open' : 'nav-links'} id="navigation">
          {NAV_LINKS.map((l) => <a key={l.href} href={l.href} onClick={close}>{l.label}</a>)}
        </div>
        <div className="nav-actions">
          {/* Theme Switcher Toggle */}
          <button
            type="button"
            className={`nav-theme-toggle ${isDark ? 'is-dark' : 'is-light'}`}
            onClick={onToggleTheme}
            aria-label={isDark ? 'Passer au mode clair' : 'Passer au mode sombre'}
            title={isDark ? 'Passer au mode clair' : 'Passer au mode sombre'}
            aria-pressed={isDark}
          >
            <span className="theme-icon-wrap" aria-hidden="true">
              {isDark ? (
                /* Moon Icon with golden glow */
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                /* Sun Icon with radiating rays */
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              )}
            </span>
            <span className="sr-only">
              {isDark ? 'Passer au mode clair' : 'Passer au mode sombre'}
            </span>
          </button>

          <button
            type="button"
            className={`nav-motion-toggle ${motionPaused ? 'is-paused' : ''}`}
            onClick={onToggleMotion}
            aria-label={motionPaused ? 'Reprendre les animations' : 'Mettre en pause les animations'}
            title={motionPaused ? 'Reprendre les animations' : 'Mettre en pause les animations'}
            aria-pressed={motionPaused}
          >
            {motionPaused ? (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <polygon points="6 4 20 12 6 20 6 4" />
              </svg>
            ) : (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <rect x="6" y="5" width="3.5" height="14" rx="1.75" />
                <rect x="14.5" y="5" width="3.5" height="14" rx="1.75" />
              </svg>
            )}
            <span className="sr-only">
              {motionPaused ? 'Reprendre les animations' : 'Mettre en pause les animations'}
            </span>
          </button>
          <button className="btn btn-dark btn-small" data-join="" onClick={onJoin}>Rejoindre la liste <Icon name="north" /></button>
          <button
            className="menu-toggle"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            aria-controls="navigation"
            onClick={() => setOpen((o) => !o)}
          ><span></span><span></span></button>
        </div>
      </nav>
    </header>
  );
}


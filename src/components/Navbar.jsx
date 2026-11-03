import { useEffect, useState } from 'react';
import Icon from './Icon.jsx';
import { NAV_LINKS } from '../data.js';

export default function Navbar({ onJoin, motionPaused = false, onToggleMotion }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="nav-wrap">
      <nav className="navbar" aria-label="Navigation principale">
        <a href="#" className="brand" aria-label="WÔY Academy, accueil"><img src="/assets/woy-logo.png" alt="WÔY Academy" /></a>
        <div className={open ? 'nav-links open' : 'nav-links'} id="navigation">
          {NAV_LINKS.map((l) => <a key={l.href} href={l.href} onClick={close}>{l.label}</a>)}
        </div>
        <div className="nav-actions">
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


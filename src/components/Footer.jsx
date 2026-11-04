import { useState, useRef, useEffect } from 'react';

export default function Footer({ onInfo }) {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const resourcesRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (resourcesRef.current && !resourcesRef.current.contains(e.target)) {
        setResourcesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <footer className="footer-wrap-minimal">
      <div className="container">
        {/* Main Horizontal Row */}
        <div className="footer-minimal-main">
          {/* Brand & Slogan */}
          <div className="footer-minimal-brand">
            <a className="brand footer-brand-link" href="#" aria-label="WÔY Academy, retour en haut">
              <img src="/assets/woy-logo.png" alt="WÔY Academy" />
            </a>
            <p className="footer-minimal-slogan">
              Comprendre aujourd’hui,<br />
              décider demain.
            </p>
          </div>

          <div className="footer-divider-v" aria-hidden="true" />

          {/* Navigation Links */}
          <nav className="footer-minimal-nav" aria-label="Navigation pied de page">
            <a href="#parcours" className="footer-nav-link">
              <span>PARCOURS</span>
              <span className="footer-nav-chevron" aria-hidden="true">›</span>
            </a>

            <a href="#ecosysteme" className="footer-nav-link">
              <span>ÉCOSYSTÈME</span>
              <span className="footer-nav-chevron" aria-hidden="true">›</span>
            </a>

            <div className="footer-resources-wrap" ref={resourcesRef}>
              <button
                type="button"
                className={`footer-nav-link footer-nav-btn ${resourcesOpen ? 'is-active' : ''}`}
                onClick={() => setResourcesOpen((prev) => !prev)}
                aria-expanded={resourcesOpen}
                aria-haspopup="true"
              >
                <span>RESSOURCES</span>
                <span className="footer-nav-chevron" aria-hidden="true">›</span>
              </button>

              {resourcesOpen && (
                <div className="footer-resources-dropdown">
                  <a href="#faq" onClick={() => setResourcesOpen(false)}>
                    Questions fréquentes (FAQ)
                  </a>
                  <a href="#experience" onClick={() => setResourcesOpen(false)}>
                    Espace d’apprentissage
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setResourcesOpen(false);
                      onInfo?.('privacy');
                    }}
                  >
                    Confidentialité
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setResourcesOpen(false);
                      onInfo?.('legal');
                    }}
                  >
                    Informations légales
                  </button>
                </div>
              )}
            </div>
          </nav>

          <div className="footer-divider-v" aria-hidden="true" />

          {/* Social Pills */}
          <div className="footer-minimal-socials" aria-label="Réseaux sociaux WÔY">
            <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="minimal-social-btn" aria-label="Telegram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 6.63 5.37 12 12 12s12-5.37 12-12C24 5.37 18.63 0 12 0zm5.56 8.16l-1.97 9.28c-.15.66-.54.82-1.09.51l-3-2.21-1.45 1.39c-.16.16-.3.3-.61.3l.21-3.05 5.56-5.02c.24-.22-.05-.34-.38-.13l-6.87 4.33-2.96-.92c-.64-.2-.66-.64.13-.95l11.58-4.46c.54-.2 1.01.12.85.93z" />
              </svg>
            </a>

            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="minimal-social-btn" aria-label="X (Twitter)">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="minimal-social-btn" aria-label="LinkedIn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.62 1.62 0 1 0-.01-3.24 1.62 1.62 0 0 0 .01 3.24m1.39 9.74v-8.37H5.07v8.37h2.78z" />
              </svg>
            </a>

            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="minimal-social-btn" aria-label="YouTube">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-minimal-bottom">
          <span className="footer-minimal-copy">
            © 2026 WÔY Academy. Tous droits réservés.
          </span>

          <div className="footer-minimal-geo">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>Dakar · Abidjan · Paris · Diaspora</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

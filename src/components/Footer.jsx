import { NAV_LINKS } from '../data.js';

export default function Footer({ onInfo }) {
  return (
    <footer className="footer-wrap">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand-col">
            <a className="brand" href="#" aria-label="WÔY Academy, retour en haut">
              <img src="/assets/woy-logo.png" alt="WÔY Academy" />
            </a>
            <p className="footer-slogan">Comprendre.<br /><strong>Pour décider.</strong></p>
          </div>

          <div className="footer-nav-grid">
            <div className="footer-nav-col">
              <span className="footer-col-title">Navigation</span>
              <div className="footer-links">
                {NAV_LINKS.map((l) => (
                  <a key={l.href} href={l.href}>{l.label}</a>
                ))}
              </div>
            </div>

            <div className="footer-nav-col">
              <span className="footer-col-title">Ressources & Légal</span>
              <div className="footer-links">
                <a href="#faq">Questions fréquentes</a>
                <button type="button" data-info="privacy" onClick={() => onInfo('privacy')}>Confidentialité</button>
                <button type="button" data-info="legal" onClick={() => onInfo('legal')}>Informations légales</button>
              </div>
            </div>
          </div>

          <div className="footer-action-col">
            <button
              type="button"
              className="back-top"
              aria-label="Retour en haut de page"
              title="Retour en haut"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 15l-6-6-6 6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">© 2026 WÔY Academy.</span>
          <span className="footer-motto">Le savoir est le premier pas.</span>
          <span className="footer-designed">Conçu pour apprendre.</span>
        </div>
      </div>
    </footer>
  );
}


import { NAV_LINKS } from '../data.js';

export default function Footer({ onInfo }) {
  return (
    <footer className="container">
      <div className="footer-top">
        <a className="brand" href="#">
          <img src="/assets/woy-logo.png" alt="WÔY Academy" />
        </a>
        <p>Comprendre.<br /><strong>Pour décider.</strong></p>
        <div>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </div>
        <div>
          <a href="#faq">Questions fréquentes</a>
          <button data-info="privacy" onClick={() => onInfo('privacy')}>Confidentialité</button>
          <button data-info="legal" onClick={() => onInfo('legal')}>Informations légales</button>
        </div>
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
      <div className="footer-bottom">
        <span>© 2026 WÔY Academy.</span>
        <span>Le savoir est le premier pas.</span>
        <span>Conçu pour apprendre.</span>
      </div>
    </footer>
  );
}


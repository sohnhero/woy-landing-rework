import { useState } from 'react';
import { NAV_LINKS } from '../data.js';

export default function Footer({ onInfo }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrap">
      <div className="container">
        {/* Newsletter / Cercle Privé Card */}
        <div className="footer-newsletter-card">
          <div className="footer-nl-copy">
            <span className="footer-nl-badge">
              <span className="footer-nl-dot" aria-hidden="true" />
              Cercle Privé WÔY
            </span>
            <h3 className="footer-nl-title">
              Gardez une longueur d’avance sur les cycles de marché.
            </h3>
            <p className="footer-nl-desc">
              Analyses macroéconomiques, alertes on-chain et accès prioritaire aux prochaines cohortes. Zéro spam, uniquement l’essentiel stratégique.
            </p>
          </div>

          <div className="footer-nl-action">
            {subscribed ? (
              <div className="footer-nl-success">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span>Bienvenue dans le Cercle des Initiés.</span>
              </div>
            ) : (
              <form className="footer-nl-form" onSubmit={handleSubscribe}>
                <div className="footer-input-group">
                  <input
                    type="email"
                    className="footer-email-input"
                    placeholder="Votre adresse email professionnelle..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-label="Adresse email pour le Cercle Privé"
                  />
                  <button type="submit" className="footer-submit-btn">
                    <span>Rejoindre</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <span className="footer-input-hint">Rejoignez +2 400 professionnels et investisseurs ouest-africains.</span>
              </form>
            )}
          </div>
        </div>

        {/* Main Footer Multi-Column Grid */}
        <div className="footer-main-grid">
          {/* Brand Column */}
          <div className="footer-col footer-col-brand">
            <a className="brand footer-brand-link" href="#" aria-label="WÔY Academy, retour en haut">
              <img src="/assets/woy-logo.png" alt="WÔY Academy" />
            </a>
            <p className="footer-slogan">
              Comprendre.<br />
              <strong>Pour décider.</strong>
            </p>
            <p className="footer-bio">
              La première académie d’excellence financière et blockchain pensée pour l’Afrique de l’Ouest et la diaspora.
            </p>

            <div className="footer-status-pill">
              <span className="status-indicator">
                <span className="status-pulse" aria-hidden="true" />
                <span className="status-core" aria-hidden="true" />
              </span>
              <span className="status-text">Cohorte 2026 · Inscriptions Ouvertes</span>
            </div>

            {/* Social Links */}
            <div className="footer-socials" aria-label="Réseaux sociaux WÔY Academy">
              <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="social-pill" aria-label="Telegram WÔY">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 6.63 5.37 12 12 12s12-5.37 12-12C24 5.37 18.63 0 12 0zm5.56 8.16l-1.97 9.28c-.15.66-.54.82-1.09.51l-3-2.21-1.45 1.39c-.16.16-.3.3-.61.3l.21-3.05 5.56-5.02c.24-.22-.05-.34-.38-.13l-6.87 4.33-2.96-.92c-.64-.2-.66-.64.13-.95l11.58-4.46c.54-.2 1.01.12.85.93z" />
                </svg>
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-pill" aria-label="X (Twitter) WÔY">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-pill" aria-label="LinkedIn WÔY">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.62 1.62 0 1 0-.01-3.24 1.62 1.62 0 0 0 .01 3.24m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-pill" aria-label="YouTube WÔY">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Parcours */}
          <div className="footer-col">
            <span className="footer-col-title">Parcours Initiatique</span>
            <ul className="footer-col-list">
              <li><a href="#parcours">N0 · Découverte de l’Argent</a></li>
              <li><a href="#parcours">N1 · Sécurité Totale & Cold Wallet</a></li>
              <li><a href="#parcours">N2 · Fondamentaux & DeFi</a></li>
              <li><a href="#parcours">N3 · Lire le Marché & Carnets</a></li>
              <li><a href="#parcours">N4 · Décision & Exécution</a></li>
              <li><a href="#parcours">N5 & N6 · Risk & Maîtrise Pro</a></li>
            </ul>
          </div>

          {/* Column 3: Écosystème */}
          <div className="footer-col">
            <span className="footer-col-title">Écosystème WÔY</span>
            <ul className="footer-col-list">
              <li><a href="#communaute">La Communauté & les Djélis</a></li>
              <li><a href="#communaute">Le Rapport Mensuel Stratégique</a></li>
              <li><a href="#communaute">L’Arène LAAMB de Marché</a></li>
              <li><a href="#experience">Simulateur & Devoirs de Terrain</a></li>
              <li><a href="#experience">Certifications SkillProof</a></li>
              <li><a href="#esprit">L’Esprit & Nos Valeurs</a></li>
            </ul>
          </div>

          {/* Column 4: Ressources & Légal */}
          <div className="footer-col">
            <span className="footer-col-title">Ressources & Légal</span>
            <ul className="footer-col-list">
              <li><a href="#faq">Questions Fréquentes (FAQ)</a></li>
              <li><a href="#experience">Espace d’Apprentissage</a></li>
              <li>
                <button type="button" className="footer-dialog-btn" onClick={() => onInfo('privacy')}>
                  Politique de Confidentialité
                </button>
              </li>
              <li>
                <button type="button" className="footer-dialog-btn" onClick={() => onInfo('legal')}>
                  Informations Légales & Mentions
                </button>
              </li>
              <li>
                <span className="footer-tag-version">Version Pédagogique v3.0</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Giant Architectural Watermark */}
        <div className="footer-watermark" aria-hidden="true">
          <span>WÔY ACADEMY</span>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span className="footer-copy">© 2026 WÔY Academy. Tous droits réservés.</span>
          </div>

          <div className="footer-bottom-center">
            <span className="footer-geo">
              Transmis avec rigueur · Dakar · Abidjan · Paris · Diaspora
            </span>
          </div>

          <div className="footer-bottom-right">
            <button
              type="button"
              className="footer-back-to-top"
              onClick={scrollToTop}
              aria-label="Retour en haut de page"
            >
              <span>Haut de page</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 15l-6-6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

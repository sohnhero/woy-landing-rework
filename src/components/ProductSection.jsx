import { useState } from 'react';
import Icon from './Icon.jsx';
import SplitHeading from './SplitHeading.jsx';

export default function ProductSection({ appWindowRef }) {
  const [panel, setPanel] = useState('route');

  return (
    <section className="section product-section" id="plateforme">
      <div className="container">
        <div className="center-heading reveal">
          <div className="section-orb" aria-hidden="true"></div>
          <div className="section-orb right" aria-hidden="true"></div>
          <p className="eyebrow">Ton espace d’apprentissage</p>
          <SplitHeading lines={['Un cap clair.', 'À chaque connexion.']} />
          <p>Tes missions, tes acquis et ta prochaine étape, au même endroit.</p>
        </div>

        <div className="app-window reveal" ref={appWindowRef}>
          <div className="window-bar">
            <div><i></i><i></i><i></i></div>
            <span>Espace apprenant · aperçu</span>
            <Icon name="shield" />
          </div>

          <div className="app-body">
            <aside className="app-sidebar">
              <a className="brand" href="#"><img src="/assets/woy-logo.png" alt="WÔY Academy" /></a>
              <span className="sidebar-label">TON ESPACE</span>
              <button
                className={`app-nav ${panel === 'route' ? 'active' : ''}`}
                data-panel="route"
                onClick={() => setPanel('route')}
              >
                <Icon name="compass" />Ma route
              </button>
              <button
                className={`app-nav ${panel === 'missions' ? 'active' : ''}`}
                data-panel="missions"
                onClick={() => setPanel('missions')}
              >
                <Icon name="book" />Missions
              </button>
              <button
                className={`app-nav ${panel === 'badges' ? 'active' : ''}`}
                data-panel="badges"
                onClick={() => setPanel('badges')}
              >
                <Icon name="spark" />Mes badges
              </button>
              <div className="sidebar-bottom">
                <span className="user-avatar">A</span>
                <div>Apprenant WÔY<small>Explorateur</small></div>
              </div>
            </aside>

            <div className="app-main">
              <div className="app-greeting">
                <div>
                  <span className="tiny-label">UN PAS DE PLUS VERS L’AUTONOMIE</span>
                  <h3>Prêt pour la prochaine étape ?</h3>
                  <p>Chaque petit déclic compte.</p>
                </div>
                <span className="xp-pill"><Icon name="spark" />150 XP</span>
              </div>

              <div id="app-content">
                {panel === 'route' && (
                  <div className="dashboard-grid">
                    <div className="lesson-card">
                      <span className="lesson-label">N1 · SÉCURITÉ</span>
                      <h4>Repérer une arnaque</h4>
                      <p>Les signaux d’alerte et les techniques à reconnaître.</p>
                      <span className="hex"><Icon name="shield" /></span>
                      <a href="#experience" className="btn btn-gold">
                        Essayer la mission <Icon name="arrow" />
                      </a>
                    </div>
                    <div className="progress-card">
                      <strong>Progression du niveau</strong>
                      <div className="ring"><span>2/4</span></div>
                      <p>Missions validées · exemple</p>
                    </div>
                  </div>
                )}

                {panel === 'missions' && (
                  <div className="missions-list">
                    <div className="mission-row">
                      <span className="check-dot">✓</span>Découvrir la crypto<small>Terminée</small>
                    </div>
                    <div className="mission-row">
                      <span className="check-dot">✓</span>Protéger ses accès<small>Terminée</small>
                    </div>
                    <a className="mission-row" href="#experience">
                      <Icon name="shield" decorative />Repérer une arnaque<small>Essayer →</small>
                    </a>
                  </div>
                )}

                {panel === 'badges' && (
                  <div className="badges-view">
                    <div className="badge-item">
                      <img src="/assets/badge-compass.png" alt="Badge Explorateur" className="badge-3d-img" />
                      <p>Explorateur</p>
                    </div>
                    <div className="badge-item">
                      <img src="/assets/badge-shield.png" alt="Badge Vigilance" className="badge-3d-img" />
                      <p>Vigilance</p>
                    </div>
                    <div className="badge-item">
                      <img src="/assets/badge-star.png" alt="Badge À débloquer" className="badge-3d-img" />
                      <p>À débloquer</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="mentor">
                <span className="mentor-symbol"><Icon name="book" /></span>
                <div>
                  <strong>Un conseil de Djéli</strong>
                  <p>« Avant de suivre une promesse, prends le temps de la comprendre. »</p>
                </div>
                <Icon name="north" />
              </div>
            </div>
          </div>
        </div>

        <p className="app-caption">Un aperçu interactif de l’expérience WÔY</p>

        <div className="passport-strip reveal">
          <div className="passport-card">
            <span className="passport-icon-3d" aria-hidden="true">
              <Icon name="spark" />
            </span>
            <div className="passport-text">
              <h4>Un parcours structuré</h4>
              <p>De la découverte à la maîtrise.</p>
            </div>
          </div>
          <div className="passport-card">
            <span className="passport-icon-3d" aria-hidden="true">
              <Icon name="spark" />
            </span>
            <div className="passport-text">
              <h4>Des acquis visibles</h4>
              <p>Chaque étape développe une compétence.</p>
            </div>
          </div>
          <div className="passport-card">
            <span className="passport-icon-3d" aria-hidden="true">
              <Icon name="spark" />
            </span>
            <div className="passport-text">
              <h4>Une méthode durable</h4>
              <p>Discipline, sécurité et transmission.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


import { useState } from 'react';
import Icon from './Icon.jsx';
import SplitHeading from './SplitHeading.jsx';
import { ECOSYSTEM_PILLARS } from '../data.js';

export default function EcosystemSection({ onJoin }) {
  const [activeTab, setActiveTab] = useState(0);
  const [laambMode, setLaambMode] = useState('spectator'); // 'spectator' | 'fighter'

  const current = ECOSYSTEM_PILLARS[activeTab];

  return (
    <section id="ecosysteme" className="section ecosystem-section">
      <div className="container">
        {/* Section Heading */}
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow">Au-delà du cours · L’écosystème WÔY</p>
            <SplitHeading lines={['La théorie enseigne.', 'Le terrain consacre.']} />
          </div>
          <p className="heading-note">
            La méthode WÔY prend tout son sens dans l’action collective :<br />
            un cercle de transmission, une boussole macro mensuelle et l’arène de simulation des marchés.
          </p>
        </div>

        {/* 3 Pillar Tabs Selector */}
        <div className="ecosystem-tabs-wrapper reveal" role="tablist" aria-label="Les 3 Piliers de l'Écosystème WÔY">
          {ECOSYSTEM_PILLARS.map((p, idx) => (
            <button
              key={p.id}
              type="button"
              role="tab"
              id={`eco-tab-${p.id}`}
              aria-controls={`eco-panel-${p.id}`}
              aria-selected={activeTab === idx}
              tabIndex={activeTab === idx ? 0 : -1}
              className={`ecosystem-tab-btn ${activeTab === idx ? 'is-active' : ''}`}
              onClick={() => setActiveTab(idx)}
            >
              <span className="eco-tab-badge-coin">
                <Icon name={p.icon} />
              </span>
              <div className="eco-tab-text">
                <small>{p.number} · {p.badge}</small>
                <strong>{p.tabLabel}</strong>
              </div>
            </button>
          ))}
        </div>

        {/* Master Showcase Panel */}
        <div
          className="ecosystem-panel reveal"
          key={current.id}
          role="tabpanel"
          id={`eco-panel-${current.id}`}
          aria-labelledby={`eco-tab-${current.id}`}
        >
          {/* Left Column: Interactive Live Preview Card */}
          <div className="ecosystem-visual-col">
            {/* Visual Header Strip */}
            <div className="eco-preview-badge-row">
              <span className="eco-status-pill">
                <i className="status-live-dot" aria-hidden="true"></i>
                {current.badge}
              </span>
              <span className="eco-price-tag">{current.pricing}</span>
            </div>

            {/* TAB 1 PREVIEW: La Communauté & les Djélis */}
            {current.id === 'communaute' && (
              <div className="eco-preview-card community-card">
                <div className="card-top-bar">
                  <div className="author-cluster">
                    <span className="avatar-core">🌳</span>
                    <div>
                      <strong>L'Arbre à Palabres</strong>
                      <small>{current.preview.onlineCount}</small>
                    </div>
                  </div>
                  <span className="live-pill">Direct</span>
                </div>

                <div className="community-chat-stream">
                  {current.preview.feed.map((msg, i) => (
                    <div key={i} className="chat-bubble">
                      <div className="chat-meta">
                        <span className="chat-author">{msg.author}</span>
                        <span className="chat-role-badge">{msg.role}</span>
                        <span className="chat-time">{msg.time}</span>
                      </div>
                      <p className="chat-text">{msg.text}</p>
                      <span className="chat-tag">{msg.badge}</span>
                    </div>
                  ))}
                </div>

                <div className="community-quote-banner">
                  <span className="quote-icon">✦</span>
                  <p>{current.preview.insight}</p>
                </div>
              </div>
            )}

            {/* TAB 2 PREVIEW: Le Rapport Mensuel */}
            {current.id === 'rapport' && (
              <div className="eco-preview-card report-card">
                <div className="card-top-bar">
                  <div className="report-seal-row">
                    <span className="report-stamp-icon">📜</span>
                    <div>
                      <strong>{current.preview.edition}</strong>
                      <small>{current.preview.status}</small>
                    </div>
                  </div>
                  <span className="date-badge">{current.preview.date}</span>
                </div>

                <div className="report-metrics-grid">
                  {current.preview.metrics.map((m, i) => (
                    <div key={i} className="metric-box">
                      <small>{m.label}</small>
                      <strong>{m.value}</strong>
                      <span className="metric-change">{m.change}</span>
                    </div>
                  ))}
                </div>

                <div className="report-toc">
                  <span className="toc-title">AU SOMMAIRE CE MOIS-CI</span>
                  <ul>
                    {current.preview.topics.map((t, i) => (
                      <li key={i}>
                        <span className="toc-number">0{i + 1}</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="report-access-strip">
                  <span>✓ Synthèse PDF & Notions Clés</span>
                  <span>✓ Grille d'Audit Protocoles</span>
                </div>
              </div>
            )}

            {/* TAB 3 PREVIEW: L'Arène LAAMB */}
            {current.id === 'laamb' && (
              <div className="eco-preview-card laamb-card">
                <div className="card-top-bar">
                  <div className="arena-title-row">
                    <span className="arena-icon">⚡</span>
                    <div>
                      <strong>L'Arène des Marchés</strong>
                      <small>{current.preview.season}</small>
                    </div>
                  </div>
                  <span className="arena-live-pill">{current.preview.activeFights}</span>
                </div>

                {/* Interactive Mode Switcher */}
                <div className="arena-mode-switch">
                  <button
                    type="button"
                    className={`arena-mode-btn ${laambMode === 'spectator' ? 'is-active' : ''}`}
                    onClick={() => setLaambMode('spectator')}
                  >
                    👁️ Mode Spectateur (N3)
                  </button>
                  <button
                    type="button"
                    className={`arena-mode-btn ${laambMode === 'fighter' ? 'is-active' : ''}`}
                    onClick={() => setLaambMode('fighter')}
                  >
                    🥊 Mode Combattant (N4)
                  </button>
                </div>

                {/* Subview 1: Mode Spectateur */}
                {laambMode === 'spectator' && (
                  <div className="arena-subcard spectator-subcard">
                    <div className="signal-box">
                      <div className="signal-header">
                        <span className="signal-badge">Signal Audité WÔY</span>
                        <span className="signal-time">Il y a 32m</span>
                      </div>
                      <p className="signal-desc">{current.preview.spectator.signal}</p>
                      <div className="signal-footer">
                        <span className="audit-ok">✓ {current.preview.spectator.status}</span>
                      </div>
                    </div>

                    <div className="vote-box">
                      <span className="vote-title">Élection du Champion</span>
                      <p>{current.preview.spectator.vote}</p>
                      <div className="vote-bar">
                        <div className="vote-fill" style={{ width: '84%' }}></div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Subview 2: Mode Combattant */}
                {laambMode === 'fighter' && (
                  <div className="arena-subcard fighter-subcard">
                    <div className="discipline-meter-box">
                      <span className="meter-label">Indice de Discipline & Risk Management</span>
                      <strong className="meter-value">{current.preview.fighter.score}</strong>
                      <div className="discipline-track">
                        <div className="discipline-fill" style={{ width: '96%' }}></div>
                      </div>
                      <small className="discipline-note">Stop-loss respecté · Levier maîtrisé · Pas de revenge trade</small>
                    </div>

                    <div className="bounty-strip">
                      <span className="bounty-icon">🐚</span>
                      <div>
                        <strong>Cauris d’Honneur</strong>
                        <small>{current.preview.fighter.reward}</small>
                      </div>
                    </div>
                  </div>
                )}

                <div className="arena-guarantee">
                  <span>🛡️ 100% Simulé · Zéro risque financier réel</span>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Narrative, Pillars & Action */}
          <div className="ecosystem-copy-col">
            <div className="eco-copy-header">
              <span className="eco-eyebrow">{current.eyebrow}</span>
              <h3 className="eco-title">{current.title}</h3>
              <p className="eco-tagline">{current.tagline}</p>
            </div>

            <blockquote className="eco-quote">
              <p>{current.quote}</p>
            </blockquote>

            <p className="eco-desc">{current.description}</p>

            {/* 4 Feature Pillars */}
            <div className="eco-highlights-grid">
              {current.highlights.map((h, i) => (
                <div key={i} className="eco-highlight-item">
                  <div className="highlight-dot">✓</div>
                  <div className="highlight-text">
                    <strong>{h.title}</strong>
                    <p>{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Access & Action row */}
            <div className="eco-action-row">
              <div className="eco-access-pill">
                <Icon name="shield" />
                <span>{current.access}</span>
              </div>

              <button
                type="button"
                className="btn btn-gold btn-eco-cta"
                onClick={onJoin}
              >
                <span>{current.ctaText}</span>
                <Icon name="north" />
              </button>
            </div>
          </div>
        </div>

        {/* Section Bottom Footnote */}
        <p className="section-footnote reveal">
          <span className="small-dot"></span> Chaque pilier est articulé avec votre progression dans les 7 niveaux de l’Académie.
        </p>
      </div>
    </section>
  );
}

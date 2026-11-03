import { useRef, useState } from 'react';
import Icon from './Icon.jsx';
import SplitHeading from './SplitHeading.jsx';
import { LEVELS } from '../data.js';

const ROAD_NODES = [
  { id: 0, x: 55, y: 240, calloutSide: 'bottom', align: 'start' },
  { id: 1, x: 170, y: 135, calloutSide: 'top', align: 'center' },
  { id: 2, x: 285, y: 285, calloutSide: 'bottom', align: 'center' },
  { id: 3, x: 405, y: 135, calloutSide: 'top', align: 'center' },
  { id: 4, x: 525, y: 285, calloutSide: 'bottom', align: 'center' },
  { id: 5, x: 645, y: 135, calloutSide: 'top', align: 'center' },
  { id: 6, x: 760, y: 285, calloutSide: 'bottom', align: 'center' },
  { id: 7, x: 870, y: 135, calloutSide: 'top', align: 'end' },
];

const ROAD_PATH =
  'M 15 240 L 55 240 C 106.8 240.0, 118.2 135.0, 170 135 C 221.8 135.0, 233.2 285.0, 285 285 C 339.0 285.0, 351.0 135.0, 405 135 C 459.0 135.0, 471.0 285.0, 525 285 C 579.0 285.0, 591.0 135.0, 645 135 C 696.8 135.0, 708.2 285.0, 760 285 C 809.5 285.0, 820.5 135.0, 870 135 L 905 135';

export default function RouteSection() {
  const [level, setLevel] = useState(1);
  const tabRefs = useRef([]);
  const current = LEVELS[level] || LEVELS[0];

  const onTrackKey = (e) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) return;
    e.preventDefault();
    let n = Number(document.activeElement?.dataset.level);
    if (Number.isNaN(n)) return;
    n = e.key === 'Home' ? 0 : e.key === 'End' ? 7 : (n + (e.key === 'ArrowRight' ? 1 : 7)) % 8;
    setLevel(n);
    tabRefs.current[n]?.focus();
  };

  return (
    <section id="parcours" className="section route-section" aria-labelledby="parcours-heading">
      <div className="container">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow">La route du savoir</p>
            <SplitHeading lines={['Chaque niveau ouvre', 'un nouveau monde.']} />
          </div>
          <p className="heading-note">
            Des premières notions aux décisions éclairées.<br />
            Avance à ton rythme, une étape à la fois.
          </p>
        </div>

        <div className="route-panel reveal">
          <span className="panel-corner top-left"></span>
          <span className="panel-corner bottom-right"></span>

          {/* Left: The Stylized Wormy Road */}
          <div className="route-visual wormy-visual">
            <div className="wormy-header">
              <span className="wormy-badge-pill">PARCOURS WÔY • N0 → ÉLITE</span>
              <span className="wormy-hint">Clique sur un niveau pour l’explorer</span>
            </div>

            <div className="wormy-stage-scroll">
              <div
                className="wormy-stage"
                role="tablist"
                aria-label="Niveaux du parcours WÔY"
                onKeyDown={onTrackKey}
              >
                {/* SVG Road Layer */}
                <svg
                  className="wormy-svg"
                  viewBox="0 0 920 420"
                  preserveAspectRatio="xMidYMid meet"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="wormyBedGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#cda558" />
                      <stop offset="25%" stopColor="#f5dfa8" />
                      <stop offset="50%" stopColor="#bd9039" />
                      <stop offset="75%" stopColor="#f0d59b" />
                      <stop offset="100%" stopColor="#dfaf44" />
                    </linearGradient>

                    <linearGradient id="wormySurfaceGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="30%" stopColor="#fcf8ee" />
                      <stop offset="70%" stopColor="#f5eddb" />
                      <stop offset="100%" stopColor="#fff9ec" />
                    </linearGradient>

                    <filter id="wormyShadow" x="-10%" y="-15%" width="120%" height="150%">
                      <feDropShadow dx="0" dy="14" stdDeviation="16" floodColor="#866324" floodOpacity="0.18" />
                    </filter>
                  </defs>

                  {/* 1. Road Ambient Drop Shadow */}
                  <path
                    d={ROAD_PATH}
                    fill="none"
                    stroke="rgba(195, 150, 55, 0.22)"
                    strokeWidth="50"
                    strokeLinecap="round"
                    filter="url(#wormyShadow)"
                  />

                  {/* 2. Road Bed (Gold/Bronze Border) */}
                  <path
                    d={ROAD_PATH}
                    fill="none"
                    stroke="url(#wormyBedGrad)"
                    strokeWidth="38"
                    strokeLinecap="round"
                  />

                  {/* 3. Road Surface (Smooth Ivory/Champagne) */}
                  <path
                    d={ROAD_PATH}
                    fill="none"
                    stroke="url(#wormySurfaceGrad)"
                    strokeWidth="28"
                    strokeLinecap="round"
                  />

                  {/* 4. Dashed Road Centerline */}
                  <path
                    d={ROAD_PATH}
                    fill="none"
                    stroke="#c49b42"
                    strokeWidth="2.8"
                    strokeDasharray="9 11"
                    strokeLinecap="round"
                    opacity="0.88"
                  />
                </svg>

                {/* 5. Checkpoints with Speech Bubble Callout Cards */}
                {ROAD_NODES.map((node, i) => {
                  const l = LEVELS[i];
                  const isSelected = i === level;
                  const isPast = i < level;
                  const xPct = (node.x / 920) * 100;
                  const yPct = (node.y / 420) * 100;

                  return (
                    <div
                      key={l.code}
                      className={`wormy-checkpoint ${isSelected ? 'is-active' : ''} ${isPast ? 'is-completed' : ''} side-${node.calloutSide} align-${node.align}`}
                      style={{
                        left: `${xPct}%`,
                        top: `${yPct}%`,
                      }}
                    >
                      {/* Callout Speech Bubble */}
                      <button
                        type="button"
                        className={`wormy-callout ${isSelected ? 'callout-active' : ''}`}
                        onClick={() => setLevel(i)}
                        aria-label={`Explorer ${l.code} ${l.name}`}
                      >
                        <span className="callout-code">{i === 7 ? '👑' : l.code}</span>
                        <div className="callout-info">
                          <strong className="callout-name">{l.name}</strong>
                          <span className="callout-meta">{l.volume}</span>
                        </div>
                      </button>

                      {/* Interactive Road Node Disk */}
                      <button
                        ref={(el) => { tabRefs.current[i] = el; }}
                        role="tab"
                        id={`level-${i}`}
                        aria-controls="level-detail"
                        aria-selected={isSelected}
                        tabIndex={isSelected ? 0 : -1}
                        data-level={i}
                        className={`checkpoint-node ${isSelected ? 'node-selected' : ''}`}
                        onClick={() => setLevel(i)}
                        aria-label={`${l.code} : ${l.name}`}
                      >
                        {isSelected && <span className="node-pulse" aria-hidden="true" />}
                        <span className="node-core">
                          {i === 7 ? '👑' : i}
                        </span>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom road cycle guide */}
            <div className="wormy-footer">
              <span className="footer-step"><span>01</span> Comprendre</span>
              <span className="footer-arrow">→</span>
              <span className="footer-step"><span>02</span> Pratiquer</span>
              <span className="footer-arrow">→</span>
              <span className="footer-step"><span>03</span> Valider</span>
              <span className="footer-arrow">→</span>
              <span className="footer-step is-gold"><span>04</span> Transmettre</span>
            </div>
          </div>

          {/* Right: The Complete Enriched Level Detail Card */}
          <div
            className="level-detail"
            role="tabpanel"
            id="level-detail"
            aria-live="polite"
            aria-labelledby={`level-${level}`}
          >
            <div className="detail-badges-row">
              <span className="detail-pill-code">{current.code} • {current.name.toUpperCase()}</span>
              <span className="detail-pill-vol">{current.volume}</span>
            </div>

            <p className="detail-subheading">{current.subtitle}</p>
            <h3 id="level-title" className="detail-title">
              {current.title[0]}<br />{current.title[1]}
            </h3>

            <p className="detail-description">{current.description}</p>

            <div className="detail-skills-section">
              <p className="detail-skills-label">CONCEPTS & CLÉS TRANSMIS</p>
              <ul id="level-skills" className="detail-skills-list">
                {current.skills.map((s) => (
                  <li key={s}>
                    <span className="check-dot">✓</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="detail-reward-card">
              <span className="reward-trophy">🏆</span>
              <div className="reward-text">
                <strong className="reward-name">Récompense : {current.reward}</strong>
                <span className="reward-status">Statut : {current.status}</span>
              </div>
            </div>

            <a href="#experience" className="text-link gold detail-cta">
              Découvrir l’expérience <Icon name="north" />
            </a>
          </div>
        </div>

        <p className="section-footnote reveal">
          <span className="small-dot"></span> Explore chaque niveau pour découvrir le chemin vers la maîtrise financière.
        </p>
      </div>
    </section>
  );
}

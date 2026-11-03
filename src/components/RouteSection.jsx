import { Fragment, useRef, useState } from 'react';
import Icon from './Icon.jsx';
import SplitHeading from './SplitHeading.jsx';
import { LEVELS } from '../data.js';

export default function RouteSection() {
  const [level, setLevel] = useState(1);
  const tabRefs = useRef([]);
  const current = LEVELS[level];

  // Keep a 3-badge sliding window centered on the active level
  const windowStart = Math.max(0, Math.min(level - 1, LEVELS.length - 3));
  const visibleLevels = LEVELS.slice(windowStart, windowStart + 3);

  const onTrackKey = (e) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) return;
    e.preventDefault();
    let n = Number(document.activeElement?.dataset.level);
    if (Number.isNaN(n)) return;
    n = e.key === 'Home' ? 0 : e.key === 'End' ? LEVELS.length - 1 : (n + (e.key === 'ArrowRight' ? 1 : LEVELS.length - 1)) % LEVELS.length;
    setLevel(n);
    tabRefs.current[n]?.focus();
  };

  const handlePrev = () => {
    setLevel((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setLevel((prev) => Math.min(LEVELS.length - 1, prev + 1));
  };

  return (
    <section id="parcours" className="section route-section">
      <div className="container">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow">La route du savoir</p>
            <SplitHeading lines={['Chaque niveau ouvre', 'un nouveau monde.']} />
          </div>
          <p className="heading-note">Des premières notions aux décisions éclairées.<br />Avance à ton rythme, une étape à la fois.</p>
        </div>

        <div className="route-panel reveal">
          <span className="panel-corner top-left"></span>
          <span className="panel-corner bottom-right"></span>

          <div className="route-visual">
            <div className="badge-route-wrapper">
              <button
                type="button"
                className="badge-nav-arrow prev"
                onClick={handlePrev}
                disabled={level === 0}
                aria-label="Niveau précédent"
              >
                <Icon name="chevron-left" />
              </button>

              <div className="badge-route">
                {visibleLevels.map((b) => (
                  <button
                    key={b.level}
                    type="button"
                    className={b.level === level ? 'level-badge selected' : 'level-badge'}
                    data-level={b.level}
                    aria-label={`Explorer ${b.code} ${b.name}`}
                    onClick={() => setLevel(b.level)}
                  >
                    <span className="hex">
                      <Icon name={b.icon} />
                    </span>
                    <small>{b.code}</small>
                    <strong>{b.name}</strong>
                  </button>
                ))}
              </div>

              <button
                type="button"
                className="badge-nav-arrow next"
                onClick={handleNext}
                disabled={level === LEVELS.length - 1}
                aria-label="Niveau suivant"
              >
                <Icon name="chevron-right" />
              </button>
            </div>

            <div className="level-track" role="tablist" aria-label="Niveaux du parcours" onKeyDown={onTrackKey}>
              {LEVELS.map((l, i) => (
                <button
                  key={l.code}
                  ref={(el) => { tabRefs.current[i] = el; }}
                  role="tab"
                  id={`level-${i}`}
                  aria-controls="level-detail"
                  aria-selected={i === level}
                  tabIndex={i === level ? 0 : -1}
                  data-level={i}
                  aria-label={`${l.code} - ${l.name}`}
                  onClick={() => setLevel(i)}
                >
                  {l.code}
                </button>
              ))}
            </div>

            <div className="route-cycle">
              <span>Comprendre</span>
              <span>→</span>
              <span>Pratiquer</span>
              <span>→</span>
              <span>Valider</span>
            </div>
          </div>

          <div className="level-detail" key={level} role="tabpanel" id="level-detail" aria-live="polite" aria-labelledby={`level-${level}`}>
            <div className="level-detail-header">
              <div className="level-detail-meta">
                <p className="eyebrow" id="level-label">{current.label}</p>
                <span className="level-volume-tag">{current.volume}</span>
              </div>
              <span className="level-subtitle">{current.subtitle}</span>
            </div>

            <h3 id="level-title">{current.title[0]}<br />{current.title[1]}</h3>

            <p className="level-desc">{current.description}</p>

            <div className="level-concepts-heading">
              <span>Concepts & Clés</span>
            </div>

            <ul id="level-skills">
              {current.skills.map((s) => (
                <li key={s}>
                  <span className="check-dot">✓</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>

            <div className="level-reward-strip">
              <div className="reward-badge-pill">
                <span className="reward-icon">🎖️</span>
                <div className="reward-info">
                  <small>Récompense</small>
                  <strong>{current.reward}</strong>
                </div>
              </div>
              <span className="level-status-pill">{current.status}</span>
            </div>

            <div className="level-action-row">
              <a href="#experience" className="text-link gold">
                Découvrir l’expérience <Icon name="north" />
              </a>
            </div>
          </div>
        </div>

        <p className="section-footnote reveal"><span className="small-dot"></span> Explore les niveaux pour découvrir ta prochaine étape.</p>
      </div>
    </section>
  );
}

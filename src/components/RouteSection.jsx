import { Fragment, useRef, useState } from 'react';
import Icon from './Icon.jsx';
import SplitHeading from './SplitHeading.jsx';
import { LEVELS } from '../data.js';

const BADGES = [
  { level: 0, icon: 'compass', code: 'N0', name: 'Découverte' },
  { level: 1, icon: 'shield', code: 'N1', name: 'Sécurité' },
  { level: 2, icon: 'blocks', code: 'N2', name: 'Fondamentaux' },
];

export default function RouteSection() {
  const [level, setLevel] = useState(1);
  const tabRefs = useRef([]);
  const current = LEVELS[level];

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
            <div className="badge-route">
              {BADGES.map((b, i) => (
                <Fragment key={b.level}>
                  {i > 0 && <span className="connector"></span>}
                  <button
                    className={b.level === level ? 'level-badge selected' : 'level-badge'}
                    data-level={b.level}
                    aria-label={`Explorer ${b.code} ${b.name}`}
                    onClick={() => setLevel(b.level)}
                  >
                    <span className="hex"><Icon name={b.icon} /></span><small>{b.code}</small><strong>{b.name}</strong>
                  </button>
                </Fragment>
              ))}
            </div>
            <div className="level-track" role="tablist" aria-label="Niveaux du parcours" onKeyDown={onTrackKey}>
              {LEVELS.map((l, i) => (
                <button
                  key={l.label}
                  ref={(el) => { tabRefs.current[i] = el; }}
                  role="tab"
                  id={`level-${i}`}
                  aria-controls="level-detail"
                  aria-selected={i === level}
                  tabIndex={i === level ? 0 : -1}
                  data-level={i}
                  aria-label={l.label}
                  onClick={() => setLevel(i)}
                >{i === 7 ? 'Élite' : `N${i}`}</button>
              ))}
            </div>
            <div className="route-cycle"><span>Comprendre</span><span>→</span><span>Pratiquer</span><span>→</span><span>Valider</span></div>
          </div>

          <div className="level-detail" role="tabpanel" id="level-detail" aria-live="polite" aria-labelledby={`level-${level}`}>
            <p className="eyebrow" id="level-label">{current.label}</p>
            <h3 id="level-title">{current.title[0]}<br />{current.title[1]}</h3>
            <ul id="level-skills">
              {current.skills.map((s) => <li key={s}><span className="check-dot">✓</span>{s}</li>)}
            </ul>
            <a href="#experience" className="text-link gold">Découvrir l’expérience <Icon name="north" /></a>
          </div>
        </div>

        <p className="section-footnote reveal"><span className="small-dot"></span> Explore les niveaux pour découvrir ta prochaine étape.</p>
      </div>
    </section>
  );
}


import { useEffect, useRef } from 'react';
import SplitHeading from './SplitHeading.jsx';

export const ECOSYSTEM_PILLARS = [
  {
    id: 'community',
    tag: 'Communauté & Mentorat',
    tagIcon: 'users',
    plainTitle: 'La Communauté & les Djélis',
    titleLines: ['LA COMMUNAUTÉ', '& LES DJÉLIS'],
    description: 'Ne traversez plus jamais les marchés seul. Un cercle d’initiés où l’entraide et l’expérience du terrain forgent votre réussite.',
    image: '/assets/pillars-community.png',
    ctaText: 'Rejoindre les Initiés',
  },
  {
    id: 'report',
    tag: 'Intelligence Macro & Crypto',
    tagIcon: 'macro',
    plainTitle: 'Le Rapport Mensuel',
    titleLines: ['LE RAPPORT', 'MENSUEL'],
    description: 'La macroéconomie mondiale et les signaux on-chain traduits pour l’Afrique. Une boussole claire pour anticiper plutôt que subir.',
    image: '/assets/pillars-report.png',
    ctaText: 'Découvrir le Rapport',
  },
  {
    id: 'laamb',
    tag: 'Arène & Simulation',
    tagIcon: 'arena',
    plainTitle: 'L’Arène LAAMB',
    titleLines: ['L’ARÈNE', 'LAAMB'],
    description: 'Testez vos analyses, suivez les meilleurs setups et confrontez vos stratégies dans un simulateur encadré sans risquer votre capital.',
    image: '/assets/pillars-laamb.png',
    ctaText: 'Entrer dans l’Arène',
  },
];

export default function EcosystemSection({ onJoin }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = section.getBoundingClientRect();
          const winHeight = window.innerHeight;

          // When section is active in / near viewport
          if (rect.top < winHeight && rect.bottom > 0) {
            const totalDistance = winHeight + rect.height;
            const currentProgress = (winHeight - rect.top) / totalDistance;
            const p = Math.max(0, Math.min(1, currentProgress));

            // Smooth golden beam position from 20% to 80%
            const beamX = (20 + p * 60).toFixed(1);
            section.style.setProperty('--eco-beam-x', `${beamX}%`);

            // Multi-plane parallax offset for the 3 cards (desktop only)
            if (window.innerWidth > 1024) {
              const offset0 = ((p - 0.5) * -28).toFixed(1);
              const offset1 = ((p - 0.5) * 22).toFixed(1);
              const offset2 = ((p - 0.5) * -18).toFixed(1);

              section.style.setProperty('--card-offset-0', `${offset0}px`);
              section.style.setProperty('--card-offset-1', `${offset1}px`);
              section.style.setProperty('--card-offset-2', `${offset2}px`);
            } else {
              section.style.setProperty('--card-offset-0', '0px');
              section.style.setProperty('--card-offset-1', '0px');
              section.style.setProperty('--card-offset-2', '0px');
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section className="section ecosystem-section" id="ecosysteme" ref={sectionRef}>
      <span id="communaute" style={{ position: 'absolute', top: '-100px', visibility: 'hidden' }} aria-hidden="true" />
      {/* Dynamic Golden Horizon Glow */}
      <div className="ecosystem-ambient-glow" aria-hidden="true" />

      <div className="container">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-pulse" aria-hidden="true" />
              Au-delà des cours · L’écosystème WÔY
            </p>
            <SplitHeading lines={['Plus qu’une académie.', 'Un écosystème vivant.']} />
          </div>
          <p className="heading-note">
            Entraide collective, intelligence économique et simulation de marché.<br />
            Trois piliers conçus pour transformer le savoir en réflexes durables.
          </p>
        </div>

        <div className="pillars-grid">
          {ECOSYSTEM_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              className={`pillar-parallax-wrap pillar-wrap-${idx}`}
            >
              <article
                className={`pillar-card pillar-card-${idx} reveal`}
                style={{ '--card-stagger': `${idx * 0.16}s` }}
              >
                <div className="pillar-body">
                  <span className="pillar-tag">
                    {pillar.tagIcon === 'users' && (
                      <svg viewBox="0 0 16 16" fill="currentColor" className="pillar-tag-svg" aria-hidden="true">
                        <path d="M6 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM1.5 13.5c0-2.2 1.8-3.5 4.5-3.5s4.5 1.3 4.5 3.5v.5h-9v-.5ZM11 6.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM10.5 10c.8 0 1.6.2 2.2.6 1.1.7 1.8 1.8 1.8 2.9v.5H11.5v-.5c0-1.1-.4-2.1-1-2.9.3-.4.7-.6 1.2-.6Z" />
                      </svg>
                    )}
                    {pillar.tagIcon === 'macro' && (
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="pillar-tag-svg" aria-hidden="true">
                        <path d="M3.5 1.5v13M1.5 5.5h4M1.5 10.5h4M8 1.5v13M6 4h4M6 9.5h4M12.5 1.5v13M10.5 6h4M10.5 11.5h4" />
                      </svg>
                    )}
                    {pillar.tagIcon === 'arena' && (
                      <svg viewBox="0 0 16 16" fill="currentColor" className="pillar-tag-svg" aria-hidden="true">
                        <rect x="2" y="9" width="3.2" height="6" rx="0.9" />
                        <rect x="6.4" y="5" width="3.2" height="10" rx="0.9" />
                        <rect x="10.8" y="1.5" width="3.2" height="13.5" rx="0.9" />
                      </svg>
                    )}
                    <span>{pillar.tag}</span>
                  </span>

                  <h3 className="pillar-title">
                    {pillar.titleLines.map((line, lIdx) => (
                      <span key={lIdx} className="pillar-title-line">
                        {line}
                        {lIdx < pillar.titleLines.length - 1 && <br />}
                      </span>
                    ))}
                  </h3>

                  <p className="pillar-desc">{pillar.description}</p>

                  <button
                    type="button"
                    className="pillar-cta"
                    onClick={onJoin}
                    aria-label={`${pillar.ctaText} - ${pillar.plainTitle}`}
                  >
                    <span>{pillar.ctaText}</span>
                    <span className="pillar-cta-arrow" aria-hidden="true">→</span>
                  </button>
                </div>

                <div className="pillar-stage">
                  <div className="pillar-stage-glow" aria-hidden="true" />
                  <img
                    src={pillar.image}
                    alt={pillar.plainTitle}
                    className="pillar-3d-img"
                    loading="lazy"
                  />
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

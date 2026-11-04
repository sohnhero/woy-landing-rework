import { useEffect, useRef } from 'react';
import Icon from './Icon.jsx';
import SplitHeading from './SplitHeading.jsx';

export const ECOSYSTEM_PILLARS = [
  {
    id: 'community',
    tag: 'Communauté & Mentorat',
    title: 'La Communauté & les Djélis',
    description: 'Ne traversez plus jamais les marchés seul. Un cercle d’initiés où l’entraide et l’expérience du terrain forgent votre réussite.',
    image: '/assets/pillars-community.png',
    ctaText: 'Rejoindre les Initiés',
  },
  {
    id: 'report',
    tag: 'Intelligence Macro & Crypto',
    title: 'Le Rapport Mensuel',
    description: 'La macroéconomie mondiale et les signaux on-chain traduits pour l’Afrique. Une boussole claire pour anticiper plutôt que subir.',
    image: '/assets/pillars-report.png',
    ctaText: 'Découvrir le Rapport',
  },
  {
    id: 'laamb',
    tag: 'Arène & Simulation',
    title: 'L’Arène LAAMB',
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
    <section className="section ecosystem-section" id="communaute" ref={sectionRef}>
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
                <div className="pillar-stage">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="pillar-3d-img"
                    loading="lazy"
                  />
                </div>

                <div className="pillar-body">
                  <span className="pillar-tag">{pillar.tag}</span>
                  <h3 className="pillar-title">{pillar.title}</h3>
                  <p className="pillar-desc">{pillar.description}</p>

                  <button
                    type="button"
                    className="btn btn-gold btn-small pillar-cta"
                    onClick={onJoin}
                    aria-label={`${pillar.ctaText} - ${pillar.title}`}
                  >
                    <span>{pillar.ctaText}</span>
                    <Icon name="north" />
                  </button>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

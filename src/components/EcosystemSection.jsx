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
  return (
    <section className="section ecosystem-section" id="communaute">
      <div className="container">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow">Au-delà des cours · L’écosystème WÔY</p>
            <SplitHeading lines={['Plus qu’une académie.', 'Un écosystème vivant.']} />
          </div>
          <p className="heading-note">
            Entraide collective, intelligence économique et simulation de marché.<br />
            Trois piliers conçus pour transformer le savoir en réflexes durables.
          </p>
        </div>

        <div className="pillars-grid">
          {ECOSYSTEM_PILLARS.map((pillar) => (
            <article key={pillar.id} className="pillar-card reveal">
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
          ))}
        </div>
      </div>
    </section>
  );
}

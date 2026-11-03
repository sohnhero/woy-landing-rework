import Icon from './Icon.jsx';
import SplitHeading from './SplitHeading.jsx';

export const ECOSYSTEM_PILLARS = [
  {
    id: 'community',
    eyebrow: 'ÉCHANGE · ENTRAIDE · TRANSMISSION',
    title: 'La Communauté & les Djélis',
    subtitle: 'L’Arbre à Palabres Moderne',
    badge: 'Cercle des Initiés',
    price: 'Inclus dans l’Académie',
    description: 'Ne traversez plus jamais les marchés seul. Un cercle d’initiés où la sagesse financière ancestrale rencontre le terrain.',
    points: [
      'Mentorat des Djélis & partage des missions réelles',
      'Canal VIP Fondateurs & masterclasses mensuelles en direct',
    ],
    image: '/assets/pillars-community.png',
    ctaText: 'Rejoindre les Initiés',
  },
  {
    id: 'report',
    eyebrow: 'INTELLIGENCE ÉCONOMIQUE & ON-CHAIN',
    title: 'Le Rapport Mensuel',
    subtitle: 'Votre Boussole dans la Tempête',
    badge: 'Dès le Niveau N2',
    price: '10 000 FCFA / mois',
    description: 'La macroéconomie mondiale et les signaux on-chain traduits pour l’investisseur africain. Anticipez plutôt que subir.',
    points: [
      'Synthèse macro Afrique & Monde (BRVM, devises, matières)',
      'Protocoles audités & feuille de route d’allocation mensuelle',
    ],
    image: '/assets/pillars-report.png',
    ctaText: 'Découvrir le Rapport',
  },
  {
    id: 'laamb',
    eyebrow: 'SIMULATION · COMPÉTITION · TRADING',
    title: 'L’Arène LAAMB',
    subtitle: 'Le Banc d’Essai des Maîtres',
    badge: 'Dès le Niveau N3 / N4',
    price: '20 000 FCFA / mois',
    description: 'Testez vos analyses, suivez les meilleurs initiés et confrontez vos stratégies dans un cadre d’entraînement encadré.',
    points: [
      'Mode Spectateur (N3) : flux de signaux audités & votes mensuels',
      'Mode Trader (N4) : trading simulé sans risque & Cauris d’honneur',
    ],
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
            Entraide collective, intelligence économique locale et simulation de marché.<br />
            Trois piliers conçus pour transformer vos connaissances en réflexes durables.
          </p>
        </div>

        <div className="pillars-grid">
          {ECOSYSTEM_PILLARS.map((pillar, idx) => (
            <article key={pillar.id} className="pillar-card reveal" style={{ '--card-delay': `${idx * 0.15}s` }}>
              <div className="pillar-stage">
                <div className="pillar-asset-halo" aria-hidden="true"></div>
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="pillar-3d-img"
                  loading="lazy"
                />
              </div>

              <div className="pillar-content">
                <div className="pillar-header">
                  <span className="pillar-eyebrow">{pillar.eyebrow}</span>
                  <span className="pillar-badge">{pillar.badge}</span>
                </div>

                <div className="pillar-titles">
                  <h3 className="pillar-title">{pillar.title}</h3>
                  <span className="pillar-subtitle">{pillar.subtitle}</span>
                </div>

                <p className="pillar-desc">{pillar.description}</p>

                <ul className="pillar-points">
                  {pillar.points.map((point) => (
                    <li key={point}>
                      <span className="pillar-check">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="pillar-footer">
                  <div className="pillar-price-box">
                    <span className="pillar-price-label">Accès</span>
                    <strong className="pillar-price-value">{pillar.price}</strong>
                  </div>

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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

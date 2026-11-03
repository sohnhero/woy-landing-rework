const PILLARS = [
  'APPRENDS',
  'PROGRESSE',
  'MAÎTRISE',
  'COMMUNAUTÉ',
  'SÉCURITÉ',
];

export default function PrinciplesRibbon() {
  const renderGroup = (keyPrefix) => (
    <>
      {PILLARS.map((word, i) => (
        <span key={`${keyPrefix}-a-${i}`} className="ribbon-item">
          <span className="ribbon-word">{word}</span>
          <span className="ribbon-separator" aria-hidden="true">✦</span>
        </span>
      ))}
      {PILLARS.map((word, i) => (
        <span key={`${keyPrefix}-b-${i}`} className="ribbon-item">
          <span className="ribbon-word">{word}</span>
          <span className="ribbon-separator" aria-hidden="true">✦</span>
        </span>
      ))}
    </>
  );

  return (
    <div className="principles-ribbon" role="region" aria-label="Les piliers de WÔY">
      <div className="ribbon-track">
        <div className="ribbon-group">
          {renderGroup('g1')}
        </div>
        <div className="ribbon-group" aria-hidden="true">
          {renderGroup('g2')}
        </div>
      </div>
    </div>
  );
}

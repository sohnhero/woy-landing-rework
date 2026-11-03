/**
 * Sticky manifesto. Scroll-driven bits (meter, index, lit statements)
 * are updated imperatively by useMotion through the refs passed in.
 */
export default function Manifesto({ manifestoRef, stageRef, meterRef, indexRef, statementRef }) {
  const steps = [
    {
      num: '01',
      tag: 'Le Bruit',
      title: 'Le bruit te pousse à suivre.',
      desc: 'Alertes en cascade, FOMO et promesses de gains rapides créent une fausse urgence qui pousse à réagir sans comprendre.',
    },
    {
      num: '02',
      tag: 'Le Savoir',
      title: 'Le savoir t’apprend à choisir.',
      desc: 'Comprendre la mécanique des marchés, la blockchain et les cycles transforme l’angoisse en discernement et clarté.',
    },
    {
      num: '03',
      tag: 'La Méthode',
      title: 'La différence, c’est la méthode.',
      desc: 'Aucun pari hasardeux. Un cadre de risque strict, une discipline constante et une vision patrimoniale pour durer.',
    },
  ];

  return (
    <section className="manifesto" id="manifeste" aria-labelledby="manifesto-title" ref={manifestoRef}>
      <div className="manifesto-stage" ref={stageRef}>
        <div className="container manifesto-layout">
          {/* Left Column: 3D Artwork Stage & Narrative Highlights */}
          <div className="manifesto-side">
            <div className="manifesto-art" aria-hidden="true">
              <div className="art-stage-pedestal">
                <div className="art-ambient-halo"></div>
                <div className="art-ground-reflection"></div>
                <img
                  src="/assets/Cartoon Duo with Notebook, Phone, and Icons.png"
                  alt="Amadou et Djéli — La Méthode vs Le Bruit — WÔY Academy"
                  className="manifesto-duo"
                  loading="lazy"
                />
                <div className="duo-tag tag-left">
                  <span className="duo-dot dot-gold"></span>
                  <span>01 • La Méthode</span>
                </div>
                <div className="duo-tag tag-right">
                  <span className="duo-dot dot-alert"></span>
                  <span>02 • Le Bruit</span>
                </div>
              </div>
            </div>

            <div className="manifesto-meter-card">
              <div className="meter-card-header">
                <span className="meter-card-label">LE DÉCLIC WÔY</span>
                <span className="manifesto-index" ref={indexRef}>01 <i>/</i> 03</span>
              </div>
              <div className="manifesto-meter">
                <i ref={meterRef}></i>
              </div>
              <span className="meter-card-note">Fais défiler pour explorer la rupture</span>
            </div>
          </div>

          {/* Right Column: High-End Editorial Manifesto */}
          <div className="manifesto-content">
            <div className="manifesto-heading-group">
              <p className="eyebrow manifesto-eyebrow">
                <span className="eyebrow-accent-dot"></span> L’ÉTAT D’ESPRIT WÔY
              </p>
              <h2 id="manifesto-title">
                Le même monde.<br />
                Pas les mêmes<br />
                <em className="gold-serif">réflexes.</em>
              </h2>
            </div>

            {/* Interactive 3-Pillars Progression */}
            <div className="manifesto-statement" ref={statementRef}>
              {steps.map((st, i) => (
                <div
                  key={st.num}
                  className={`manifesto-step ${i === 0 ? 'active lit' : ''}`}
                  data-step={i}
                >
                  <div className="step-num-pill">{st.num}</div>
                  <div className="step-body">
                    <div className="step-tag">{st.tag}</div>
                    <h3 className="step-title">
                      <span className="statement-phrase">{st.title}</span>
                    </h3>
                    <p className="step-desc">{st.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="manifesto-quote-badge">
              <span className="quote-icon">✦</span>
              <p>Le bruit t’agite. La méthode te rend souverain.</p>
            </div>
          </div>
        </div>

        <span className="giant-outline" aria-hidden="true">WÔY</span>
      </div>
    </section>
  );
}

/**
 * Interactive Sticky Manifesto with Cinematic Scroll Progression.
 * Updated smoothly via useMotion.js with real-time parallax and scroll scrub.
 */
export default function Manifesto({ manifestoRef, stageRef, meterRef, indexRef, statementRef }) {
  return (
    <section className="manifesto" id="manifeste" aria-labelledby="manifesto-title" ref={manifestoRef}>
      <div className="manifesto-stage" ref={stageRef}>
        <div className="manifesto-ambient-glow" aria-hidden="true"></div>

        <div className="container manifesto-layout">
          {/* Left Column: 3D Character Duo with Dynamic Parallax & Atmospheric Aura */}
          <div className="manifesto-visual-wrap">
            <div className="manifesto-aura" aria-hidden="true"></div>
            <div className="manifesto-art" aria-hidden="true">
              <img
                src="/assets/Cartoon Duo with Notebook, Phone, and Icons.png"
                alt="L'Initié serein face au bruit du marché — WÔY Academy"
                className="manifesto-duo"
                loading="lazy"
              />
            </div>
            <div className="manifesto-art-badge">
              <span className="badge-spark">✦</span>
              <span>L’ascension de l’initié</span>
            </div>
          </div>

          {/* Right Column: Title & Interactive 3-Phase Statements */}
          <div className="manifesto-content">
            <div className="manifesto-header-row">
              <span className="manifesto-pill">✦ MANIFESTE WÔY</span>
            </div>

            <h2 id="manifesto-title">
              Le même monde.<br />
              Pas les mêmes<br />
              <em>réflexes.</em>
            </h2>

            {/* Interactive Step Cards that illuminate in sequence with scroll scrub */}
            <div className="manifesto-cards" ref={statementRef}>
              <div className="manifesto-card active" data-step="0">
                <div className="card-step-num">01</div>
                <div className="card-step-body">
                  <strong>Le bruit te pousse à suivre.</strong>
                  <small>FOMO, mimétisme précipité, rumeurs éphémères et panique de marché.</small>
                </div>
                <span className="card-step-glow" aria-hidden="true"></span>
              </div>

              <div className="manifesto-card" data-step="1">
                <div className="card-step-num">02</div>
                <div className="card-step-body">
                  <strong>Le savoir t’apprend à choisir.</strong>
                  <small>Analyse fondamentale autonome, sang-froid et esprit critique.</small>
                </div>
                <span className="card-step-glow" aria-hidden="true"></span>
              </div>

              <div className="manifesto-card" data-step="2">
                <div className="card-step-num">03</div>
                <div className="card-step-body">
                  <strong>La différence, c’est la méthode.</strong>
                  <small>Sanctuariser son capital, maîtriser le risque et bâtir dans la durée.</small>
                </div>
                <span className="card-step-glow" aria-hidden="true"></span>
              </div>
            </div>
          </div>
        </div>

        <span className="giant-outline" aria-hidden="true">WÔY</span>
      </div>
    </section>
  );
}

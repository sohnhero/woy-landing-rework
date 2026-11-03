/**
 * Sticky manifesto. Scroll-driven bits (meter, index, lit statements)
 * are updated imperatively by useMotion through the refs passed in.
 */
export default function Manifesto({ manifestoRef, stageRef, meterRef, indexRef, statementRef }) {
  return (
    <section className="manifesto" id="manifeste" aria-labelledby="manifesto-title" ref={manifestoRef}>
      <div className="manifesto-stage" ref={stageRef}>
        <div className="container manifesto-layout">
          <div className="manifesto-side">
            <div className="manifesto-art" aria-hidden="true">
              <img src="/assets/Cartoon Duo with Notebook, Phone, and Icons.png" alt="Amadou et Djéli — WÔY Academy" className="manifesto-duo" loading="lazy" />
            </div>
            <span className="manifesto-index" ref={indexRef}>01 <i>/</i> 03</span>
            <div className="manifesto-meter"><i ref={meterRef}></i></div>
            <span className="tiny-label">LE DÉCLIC COMMENCE ICI</span>
          </div>
          <div>
            <h2 id="manifesto-title">Le même monde.<br />Pas les mêmes<br /><em>réflexes.</em></h2>
            <p className="manifesto-statement" ref={statementRef}><span>Le bruit te pousse à suivre.</span> <span>Le savoir t’apprend à choisir.</span> <span>La différence, c’est la méthode.</span></p>
          </div>
        </div>
        <span className="giant-outline" aria-hidden="true">WÔY</span>
      </div>
    </section>
  );
}


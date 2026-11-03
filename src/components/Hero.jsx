import Icon from './Icon.jsx';

export default function Hero({ onJoin, onOpenVideo, heroArtRef, canvasRef }) {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow hero-entrance">L’académie crypto gamifiée</p>
        <h1 id="hero-title" className="hero-entrance">Comprends la crypto.<br />Maîtrise les règles.<br /><span>À toi de jouer.</span></h1>
        <p className="hero-description hero-entrance">Apprends à comprendre la crypto, les marchés et les décisions financières avant d’investir.</p>
        <div className="hero-buttons hero-entrance">
          <button className="btn btn-gold" data-join="" onClick={onJoin}>Rejoindre la liste <Icon name="north" /></button>
          <button
            type="button"
            className="btn btn-hero-video"
            onClick={onOpenVideo}
            aria-label="Voir la vidéo de présentation WÔY"
          >
            <span className="btn-video-orb" aria-hidden="true">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="7 4 20 12 7 20 7 4" />
              </svg>
              <span className="orb-ping" aria-hidden="true"></span>
            </span>
            <span>Voir la vidéo</span>
          </button>
        </div>
      </div>
      <div className="hero-art hero-entrance" ref={heroArtRef}>
        <img src="/assets/hero-baobab.png" alt="Baobab WÔY dans un hexagone de verre doré, symbole de transmission" fetchPriority="high" />
        <span className="art-caption">Le savoir se débloque.</span>
        <div className="crypto-chip chip-btc" aria-hidden="true">
          <div className="chip-coin coin-btc">
            <b>₿</b>
          </div>
          <div className="chip-content">
            <strong>BITCOIN</strong>
            <small>Comprendre les fondamentaux</small>
          </div>
        </div>
        <div className="crypto-chip chip-eth" aria-hidden="true">
          <div className="chip-coin coin-eth">
            <svg viewBox="0 0 28 42" aria-hidden="true">
              <path d="M14 1 1 22l13 8 13-8ZM1 25l13 16 13-16-13 8Z" />
            </svg>
          </div>
          <div className="chip-content">
            <strong>ETHEREUM</strong>
            <small>Explorer les possibles</small>
          </div>
        </div>
      </div>
      <a className="scroll-cue" href="#parcours"><span className="mouse"><i></i></span>La suite commence ici</a>
    </section>
  );
}


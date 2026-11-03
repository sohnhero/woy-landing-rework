import Icon from './Icon.jsx';
import SplitHeading from './SplitHeading.jsx';

export default function SpiritSection() {
  return (
    <section id="esprit" className="section spirit-section">
      <div className="container spirit-grid">
        <div className="spirit-copy reveal">
          <p className="eyebrow">L’esprit WÔY</p>
          <SplitHeading lines={['Ancré dans la transmission.', <span key="sub">Tourné vers demain.</span>]} />
          <p>
            Le savoir prend de la valeur quand il se partage.<br />
            Avec Amadou et Djéli, avance dans un univers qui te ressemble, avec la méthode pour faire tes propres choix.
          </p>
          <div className="values">
            <div className="value-pill">
              <span className="value-icon-3d" aria-hidden="true">
                <Icon name="spark" />
              </span>
              <span className="value-label">Culture</span>
            </div>
            <div className="value-pill">
              <span className="value-icon-3d" aria-hidden="true">
                <Icon name="blocks" />
              </span>
              <span className="value-label">Méthode</span>
            </div>
            <div className="value-pill">
              <span className="value-icon-3d" aria-hidden="true">
                <Icon name="book" />
              </span>
              <span className="value-label">Transmission</span>
            </div>
          </div>
        </div>
        <div className="tree-art reveal">
          <img
            src="/assets/knowledge-tree.png"
            alt="Arbre du savoir WÔY — Livre ouvert et baobab Bitcoin doré"
            width="520"
            height="424"
            loading="lazy"
          />
        </div>
      </div>
      <div className="pattern container" aria-hidden="true"></div>
    </section>
  );
}


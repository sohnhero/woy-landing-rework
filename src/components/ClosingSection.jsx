import Icon from './Icon.jsx';
import SplitHeading from './SplitHeading.jsx';

export default function ClosingSection({ onJoin }) {
  return (
    <section className="closing container reveal">
      <div className="closing-copy">
        <p className="eyebrow">La suite s’écrit avec toi</p>
        <SplitHeading lines={['Prêt à débloquer', 'ton prochain niveau ?']} />
        <p>Rejoins l’aventure WÔY Academy.</p>
        <button className="btn btn-gold" data-join="" onClick={onJoin}>
          Rejoindre la liste <Icon name="north" />
        </button>
      </div>
      <img className="closing-crypto" src="/assets/crypto-sculpture.png" alt="" aria-hidden="true" />
      <div className="closing-mark" aria-hidden="true">
        <span></span>
        <img src="/assets/woy-logo.png" alt="" />
      </div>
    </section>
  );
}


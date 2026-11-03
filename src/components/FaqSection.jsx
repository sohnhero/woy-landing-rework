import { useState } from 'react';
import { FAQ } from '../data.js';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-grid">
        <div className="faq-intro reveal">
          <div className="faq-art" aria-hidden="true">
            <img
              src="/assets/faq-bubble.png"
              alt="Bulle question 3D WÔY"
              className="faq-bubble-3d"
              width="130"
              height="120"
              loading="lazy"
            />
          </div>
          <p className="eyebrow">Avant de te lancer</p>
          <h2>Tout commence<br />par une question.</h2>
          <p className="faq-subtitle">Quelques repères clairs pour faire<br />le premier pas sereinement dans l’écosystème.</p>
          <div className="faq-contact-hint">
            <span className="hint-orb-3d" aria-hidden="true">
              <span className="hint-beacon"></span>
            </span>
            <span className="hint-text">Une question spécifique ? L’équipe et Djéli te guident en direct.</span>
          </div>
        </div>

        <div className="faq-list reveal">
          {FAQ.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <details
                key={item.q}
                open={isOpen}
                className={`faq-card ${isOpen ? 'is-open' : ''}`}
              >
                <summary
                  className="faq-summary"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenIndex(isOpen ? null : i);
                  }}
                  aria-expanded={isOpen}
                >
                  <h3 className="faq-question-title">{item.q}</h3>
                  <div className="faq-toggle-icon" aria-hidden="true"></div>
                </summary>
                <div className="faq-content">
                  <p>{item.a}</p>
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}



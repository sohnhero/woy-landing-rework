import { useEffect, useRef, useState } from 'react';
import Icon from './Icon.jsx';
import SplitHeading from './SplitHeading.jsx';
import { QUESTIONS } from '../data.js';

export default function Practice() {
  const [qi, setQi] = useState(0);
  const [picked, setPicked] = useState(null); // index of chosen answer, null = unanswered
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const stackRef = useRef(null);

  const q = QUESTIONS[qi];
  const answered = picked !== null;
  const ok = answered && picked === q.correct;

  // .is-success is toggled imperatively (as the old MutationObserver did) so the
  // IntersectionObserver-added .visible class on .quiz-stack is never clobbered.
  useEffect(() => {
    stackRef.current?.classList.toggle('is-success', answered && !done);
  }, [answered, done]);

  const answer = (i) => {
    if (answered) return;
    setPicked(i);
    if (i === q.correct) setScore((s) => s + 1);
  };

  const next = () => {
    if (qi === 2) { setDone(true); return; }
    setQi(qi + 1);
    setPicked(null);
  };

  const restart = () => { setQi(0); setScore(0); setPicked(null); setDone(false); };

  let title = q.title, question = q.question, feedback = '', hint = 'À toi de jouer. Choisis une réponse.';
  if (done) {
    const s = score > 1 ? 's' : '';
    title = 'Le premier déclic est là.';
    question = `${score} bonne${s} réponse${s} sur 3. Chaque situation t’aide à développer de meilleurs réflexes.`;
    feedback = 'Comprendre. Vérifier. Décider. C’est l’esprit WÔY.';
    hint = 'Expérience terminée · Démonstration';
  } else if (answered) {
    feedback = (ok ? 'Bien vu. ' : 'À retenir : ') + q.feedback;
    hint = ok ? '+50 XP · Démonstration' : 'Un nouveau réflexe à garder.';
  }

  return (
    <section id="experience" className="practice section">
      <div className="circuit-lines" aria-hidden="true"></div>
      <div className="container practice-grid">
        <div className="practice-copy reveal">
          <p className="eyebrow">L’expérience WÔY</p>
          <SplitHeading lines={['Moins de théorie abstraite.', <span key="b">Plus de déclics.</span>]} />
          <p>Des situations réelles, des choix à faire.<br />Et une explication qui change tout.</p>
          <ol className="steps">
            <li><b>01</b><span>Observe une situation concrète.</span></li>
            <li><b>02</b><span>Décide en faisant ton choix.</span></li>
            <li><b>03</b><span>Comprends la bonne démarche, et pourquoi.</span></li>
          </ol>
        </div>
        <div className="quiz-stack reveal" ref={stackRef}>
          <img className="quiz-crypto" src="/assets/Magnifying glass over a quiz card.png" alt="" aria-hidden="true" />
          <div className="quiz-card">
            <div className="quiz-meta"><span><Icon name="shield" /> Mission découverte</span><span id="quiz-count">{`0${qi + 1} / 03`}</span></div>
            <div className="quiz-progress"><i style={{ width: `${((qi + 1) / 3) * 100}%` }}></i></div>
            <h3 id="quiz-title">{title}</h3>
            <p id="quiz-question">{question}</p>
            <div className="quiz-answers" id="quiz-answers">
              {done ? (
                <button id="restart-quiz" onClick={restart}>Rejouer les trois défis</button>
              ) : q.answers.map((a, i) => {
                const cls = answered && i === q.correct ? 'correct' : answered && i === picked ? 'incorrect' : undefined;
                return (
                  <button key={`${qi}-${i}`} data-answer={i} className={cls} disabled={answered} onClick={() => answer(i)}><span>{a}</span></button>
                );
              })}
            </div>
            <div className="quiz-feedback" id="quiz-feedback" aria-live="polite">{feedback}</div>
            <div className="quiz-bottom">
              <span id="quiz-hint">{hint}</span>
              <button className="text-link" id="quiz-next" hidden={!answered || done} onClick={next}>
                {qi === 2 ? 'Voir mon bilan' : 'Défi suivant'}<Icon name="arrow" decorative />
              </button>
            </div>
          </div>
          <p className="demo-label">Une démonstration de la méthode WÔY. Aucun investissement.</p>
        </div>
      </div>
    </section>
  );
}


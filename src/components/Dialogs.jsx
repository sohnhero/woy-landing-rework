import { useEffect, useRef, useState } from 'react';
import Icon from './Icon.jsx';
import { INFO } from '../data.js';

export default function Dialogs({ joinOpen, setJoinOpen, infoType, setInfoType }) {
  const joinRef = useRef(null);
  const infoRef = useRef(null);
  const [email, setEmail] = useState('');
  const [formStatus, setFormStatus] = useState('');

  // Manage join modal
  useEffect(() => {
    const dialog = joinRef.current;
    if (!dialog) return;
    if (joinOpen) {
      if (!dialog.open) dialog.showModal();
      document.body.style.overflow = 'hidden';
    } else {
      if (dialog.open) dialog.close();
      document.body.style.overflow = '';
      setFormStatus('');
    }
  }, [joinOpen]);

  // Manage info modal
  useEffect(() => {
    const dialog = infoRef.current;
    if (!dialog) return;
    if (infoType) {
      if (!dialog.open) dialog.showModal();
      document.body.style.overflow = 'hidden';
    } else {
      if (dialog.open) dialog.close();
      document.body.style.overflow = '';
    }
  }, [infoType]);

  const onDialogClick = (e, closeFn) => {
    const r = e.currentTarget.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) {
      closeFn();
    }
  };

  const onJoinSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Ton adresse est valide. Cette démo n’envoie aucune donnée : les inscriptions seront ouvertes dès que le service sera connecté.');
  };

  const currentInfo = infoType ? INFO[infoType] : null;

  return (
    <>
      <dialog
        id="join-dialog"
        ref={joinRef}
        onClick={(e) => onDialogClick(e, () => setJoinOpen(false))}
        onClose={() => setJoinOpen(false)}
      >
        <button className="dialog-close" aria-label="Fermer" onClick={() => setJoinOpen(false)}>×</button>
        <div className="dialog-icon"><Icon name="spark" /></div>
        <p className="eyebrow">Le début de l’aventure</p>
        <h2>Le prochain chapitre,<br />avec toi.</h2>
        <p>Laisse ton adresse pour préparer ta préinscription.</p>
        <form id="join-form" onSubmit={onJoinSubmit}>
          <label htmlFor="email">Ton adresse e-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="toi@exemple.com"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="btn btn-gold" type="submit">
            Préparer ma préinscription <Icon name="north" />
          </button>
          <p className="form-note">Mode démonstration : aucune adresse n’est enregistrée ni envoyée.</p>
          <p id="form-status" role="status">{formStatus}</p>
        </form>
      </dialog>

      <dialog
        id="info-dialog"
        ref={infoRef}
        onClick={(e) => onDialogClick(e, () => setInfoType(null))}
        onClose={() => setInfoType(null)}
      >
        <button className="dialog-close" aria-label="Fermer" onClick={() => setInfoType(null)}>×</button>
        <h2 id="info-title">{currentInfo?.title || ''}</h2>
        <p id="info-text">{currentInfo?.text || ''}</p>
      </dialog>
    </>
  );
}


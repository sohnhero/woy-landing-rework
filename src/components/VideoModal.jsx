import { useEffect, useRef, useState } from 'react';

export default function VideoModal({ isOpen, onClose }) {
  const videoRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (isOpen) {
      setMounted(true);
      document.body.style.overflow = 'hidden';
      // Double rAF ensures the browser paints initial mounted state before triggering active transition
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setActive(true);
        });
      });
    } else {
      setActive(false);
      if (videoRef.current) {
        videoRef.current.pause();
      }
      document.body.style.overflow = '';
      timeoutId = setTimeout(() => {
        setMounted(false);
      }, 320);
    }

    return () => {
      clearTimeout(timeoutId);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (mounted && isOpen && videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  }, [mounted, isOpen]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!mounted) return null;

  return (
    <div
      className={`video-modal-backdrop ${active ? 'is-active' : 'is-leaving'}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Vidéo de présentation WÔY Academy"
    >
      <div
        className="video-modal-shell"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="video-close-btn"
          onClick={onClose}
          aria-label="Fermer la vidéo"
          title="Fermer (Échap)"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="video-player-frame">
          <video
            ref={videoRef}
            src="/assets/woy-presentation.mp4"
            controls
            autoPlay
            playsInline
            preload="auto"
          >
            Votre navigateur ne prend pas en charge la lecture vidéo HTML5.
          </video>
        </div>
      </div>
    </div>
  );
}

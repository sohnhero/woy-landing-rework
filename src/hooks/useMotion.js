import { useEffect, useRef } from 'react';

export function useMotion({
  heroArtRef,
  canvasRef,
  manifestoRef,
  stageRef,
  meterRef,
  indexRef,
  statementRef,
  appWindowRef,
  motionPaused = false,
}) {
  const motionPausedRef = useRef(motionPaused);
  motionPausedRef.current = motionPaused;
  const triggerDrawRef = useRef(null);

  useEffect(() => {
    document.documentElement.classList.toggle('motion-paused', motionPaused);
    if (!motionPaused && triggerDrawRef.current) {
      triggerDrawRef.current();
    }
  }, [motionPaused]);

  useEffect(() => {
    document.documentElement.classList.add('js');

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fine = window.matchMedia('(pointer:fine)').matches;

    // Scroll progress & navbar scrolled state
    let ticking = false;
    const scrollProgressEl = document.querySelector('.scroll-progress');
    const navWrapEl = document.querySelector('.nav-wrap');

    const updateScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollProgressEl) {
        scrollProgressEl.style.width = (h ? (window.scrollY / h) * 100 : 0) + '%';
      }
      if (navWrapEl) {
        navWrapEl.classList.toggle('scrolled', window.scrollY > 130);
      }
      ticking = false;
    };

    const onScrollWindow = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScrollWindow, { passive: true });
    updateScroll();

    // IntersectionObserver for .reveal elements & active navigation links
    let revealIO = null;
    let navIO = null;
    if ('IntersectionObserver' in window) {
      revealIO = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('visible');
              revealIO.unobserve(e.target);
            }
          }),
        { threshold: 0.08 }
      );
      document.querySelectorAll('.reveal').forEach((e) => revealIO.observe(e));

      navIO = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting) {
              document.querySelectorAll('.nav-links a').forEach((a) => {
                a.classList.toggle('active', a.hash === '#' + e.target.id);
              });
            }
          }),
        { rootMargin: '-20% 0px -55% 0px' }
      );
      document.querySelectorAll('#parcours,#experience,#esprit').forEach((e) => navIO.observe(e));
    } else {
      document.querySelectorAll('.reveal').forEach((e) => e.classList.add('visible'));
    }

    // Hero-art pointer 3D tilt
    const heroArt = heroArtRef.current;
    let onHeroPointerMove = null;
    let onHeroPointerLeave = null;
    if (!reduced && fine && heroArt) {
      onHeroPointerMove = (e) => {
        const r = heroArt.getBoundingClientRect();
        heroArt.style.transform = `perspective(1000px) rotateY(${((e.clientX - r.left) / r.width - 0.5) * 6
          }deg) rotateX(${((e.clientY - r.top) / r.height - 0.5) * -4}deg)`;
      };
      onHeroPointerLeave = () => {
        heroArt.style.transform = '';
      };
      heroArt.style.transition = 'transform .6s ease';
      heroArt.addEventListener('pointermove', onHeroPointerMove);
      heroArt.addEventListener('pointerleave', onHeroPointerLeave);
    }

    // Magnetic buttons
    const btnCleanups = [];
    if (!reduced && fine) {
      document.querySelectorAll('.btn').forEach((b) => {
        const onMove = (e) => {
          if (motionPausedRef.current) return;
          const r = b.getBoundingClientRect();
          b.style.setProperty('--mx', (e.clientX - r.left - r.width / 2) * 0.1 + 'px');
          b.style.setProperty('--my', (e.clientY - r.top - r.height / 2) * 0.15 + 'px');
        };
        const onLeave = () => {
          b.style.setProperty('--mx', '0px');
          b.style.setProperty('--my', '0px');
        };
        b.addEventListener('pointermove', onMove);
        b.addEventListener('pointerleave', onLeave);
        btnCleanups.push(() => {
          b.removeEventListener('pointermove', onMove);
          b.removeEventListener('pointerleave', onLeave);
        });
      });
    }

    // Sticky Manifesto & App Window scroll parallax
    let dirty = true;
    const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));

    const scrollMotion = () => {
      dirty = false;
      if (reduced || motionPausedRef.current) return;

      const manifesto = manifestoRef.current;
      const stage = stageRef.current;
      const meter = meterRef.current;
      const indexEl = indexRef.current;
      const statement = statementRef.current;
      const app = appWindowRef.current;

      if (manifesto && stage) {
        const r = manifesto.getBoundingClientRect();
        const distance = manifesto.offsetHeight - stage.offsetHeight;
        const p = clamp(-r.top / Math.max(distance, 1));

        if (meter) {
          meter.style.width = `${(p * 100).toFixed(1)}%`;
        }

        const step = p < 0.35 ? 0 : p < 0.70 ? 1 : 2;

        if (indexEl) {
          indexEl.innerHTML = `ÉTAPE 0${step + 1} <i>/</i> 03`;
        }

        if (statement) {
          const cards = statement.querySelectorAll('.manifesto-card');
          if (cards.length) {
            cards.forEach((card, i) => {
              card.classList.toggle('active', i === step);
              card.classList.toggle('past', i < step);
            });
          } else {
            statement.querySelectorAll('span').forEach((s, i) => {
              s.classList.toggle('lit', p > i * 0.28);
            });
          }
        }

        // Parallax depth & dynamic float on character duo artwork
        const art = stage.querySelector('.manifesto-duo');
        if (art) {
          const y = (p - 0.5) * -55;
          const rot = (p - 0.5) * 3.5;
          const scale = 1 + p * 0.04;
          art.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0) rotate(${rot.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
        }

        // Atmospheric golden aura expansion
        const aura = stage.querySelector('.manifesto-aura');
        if (aura) {
          aura.style.opacity = (0.45 + p * 0.55).toFixed(2);
          aura.style.transform = `scale(${(1 + p * 0.28).toFixed(2)})`;
        }
      }

      if (app) {
        const ar = app.getBoundingClientRect();
        app.style.setProperty(
          '--app-angle',
          `${clamp((ar.top - window.innerHeight * 0.3) / window.innerHeight, 0, 1) * 8}deg`
        );
      }

      if (fine && heroArt) {
        const hr = heroArt.getBoundingClientRect();
        heroArt.style.translate = `0 ${clamp(-hr.top / window.innerHeight, -0.4, 0.5) * 32}px`;
      }
    };

    const onScrollDirty = () => {
      dirty = true;
    };
    const onResizeDirty = () => {
      dirty = true;
      resizeCanvas();
    };
    window.addEventListener('scroll', onScrollDirty, { passive: true });
    window.addEventListener('resize', onResizeDirty, { passive: true });

    // Orbital canvas network in hero (optional)
    const canvas = canvasRef?.current || null;
    let ctx = null;
    let w = 0;
    let h = 0;
    let last = 0;
    let canvasActive = true;
    let heroIO = null;
    const nodes = Array.from({ length: 42 }, (_, i) => ({
      a: (i / 42) * Math.PI * 2,
      r: 0.3 + (i % 5) * 0.035,
      s: 1 + (i % 3) * 0.5,
    }));

    const resizeCanvas = () => {
      if (!canvas) return;
      const r = canvas.getBoundingClientRect();
      w = r.width;
      h = r.height;
      const d = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * d;
      canvas.height = h * d;
      ctx = canvas.getContext('2d');
      if (ctx) ctx.setTransform(d, 0, 0, d, 0, 0);
    };

    if (canvas) {
      resizeCanvas();
      if (heroArt && 'IntersectionObserver' in window) {
        heroIO = new IntersectionObserver((entries) => {
          canvasActive = entries[0].isIntersecting;
        });
        heroIO.observe(heroArt);
      }
    }

    let animId = 0;
    const draw = (t = 0) => {
      if (motionPausedRef.current || document.hidden) return;
      if (dirty) scrollMotion();

      if (canvasActive && ctx && (t - last > 32 || reduced)) {
        last = t;
        ctx.clearRect(0, 0, w, h);
        const time = reduced ? 0 : t * 0.00007;
        const points = nodes.map((n) => {
          const a = n.a + time;
          return {
            x: w / 2 + Math.cos(a) * w * n.r,
            y: h / 2 + Math.sin(a) * h * n.r * 0.8 + Math.sin(a * 3 + time) * 12,
            s: n.s,
          };
        });
        ctx.lineWidth = 0.55;
        points.forEach((p, i) => {
          points.slice(i + 1).forEach((v) => {
            const d = Math.hypot(p.x - v.x, p.y - v.y);
            if (d < 90) {
              ctx.strokeStyle = `rgba(166,125,49,${(1 - d / 90) * 0.22})`;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(v.x, v.y);
              ctx.stroke();
            }
          });
          ctx.beginPath();
          ctx.fillStyle = 'rgba(174,132,57,.45)';
          ctx.arc(p.x, p.y, p.s, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      if (!reduced) {
        animId = requestAnimationFrame(draw);
      }
    };

    triggerDrawRef.current = () => {
      cancelAnimationFrame(animId);
      animId = requestAnimationFrame(draw);
    };

    const onVisibility = () => {
      if (!document.hidden && !motionPausedRef.current) {
        animId = requestAnimationFrame(draw);
      }
    };
    document.addEventListener('visibilitychange', onVisibility);
    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      triggerDrawRef.current = null;
      window.removeEventListener('scroll', onScrollWindow);
      window.removeEventListener('scroll', onScrollDirty);
      window.removeEventListener('resize', onResizeDirty);
      document.removeEventListener('visibilitychange', onVisibility);
      if (heroArt && onHeroPointerMove) {
        heroArt.removeEventListener('pointermove', onHeroPointerMove);
        heroArt.removeEventListener('pointerleave', onHeroPointerLeave);
      }
      btnCleanups.forEach((c) => c());
      if (revealIO) revealIO.disconnect();
      if (navIO) navIO.disconnect();
      if (heroIO) heroIO.disconnect();
    };
  }, []);
}


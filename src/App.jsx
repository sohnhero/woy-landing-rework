import { useRef, useState } from 'react';
import SvgDefs from './components/SvgDefs.jsx';
import Navbar from './components/Navbar.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Hero from './components/Hero.jsx';
import PrinciplesRibbon from './components/PrinciplesRibbon.jsx';
import Manifesto from './components/Manifesto.jsx';
import RouteSection from './components/RouteSection.jsx';
import Practice from './components/Practice.jsx';
import ProductSection from './components/ProductSection.jsx';
import EcosystemSection from './components/EcosystemSection.jsx';
import SpiritSection from './components/SpiritSection.jsx';
import FaqSection from './components/FaqSection.jsx';
import ClosingSection from './components/ClosingSection.jsx';
import Footer from './components/Footer.jsx';
import Dialogs from './components/Dialogs.jsx';
import VideoModal from './components/VideoModal.jsx';
import { useMotion } from './hooks/useMotion.js';

export default function App() {
  const [joinOpen, setJoinOpen] = useState(false);
  const [infoType, setInfoType] = useState(null);
  const [videoOpen, setVideoOpen] = useState(false);
  const [motionPaused, setMotionPaused] = useState(false);

  const heroArtRef = useRef(null);
  const canvasRef = useRef(null);
  const manifestoRef = useRef(null);
  const stageRef = useRef(null);
  const meterRef = useRef(null);
  const indexRef = useRef(null);
  const statementRef = useRef(null);
  const appWindowRef = useRef(null);

  useMotion({
    heroArtRef,
    canvasRef,
    manifestoRef,
    stageRef,
    meterRef,
    indexRef,
    statementRef,
    appWindowRef,
    motionPaused,
  });

  return (
    <>
      <a className="skip" href="#main">Aller au contenu</a>
      <div className="scroll-progress" aria-hidden="true"></div>
      <SvgDefs />
      <Navbar
        onJoin={() => setJoinOpen(true)}
        motionPaused={motionPaused}
        onToggleMotion={() => setMotionPaused((p) => !p)}
      />
      <main id="main">
        <Hero
          onJoin={() => setJoinOpen(true)}
          onOpenVideo={() => setVideoOpen(true)}
          heroArtRef={heroArtRef}
          canvasRef={canvasRef}
        />
        <PrinciplesRibbon />
        <Manifesto
          manifestoRef={manifestoRef}
          stageRef={stageRef}
          meterRef={meterRef}
          indexRef={indexRef}
          statementRef={statementRef}
        />
        <RouteSection />
        <Practice />
        <ProductSection appWindowRef={appWindowRef} />
        <EcosystemSection onJoin={() => setJoinOpen(true)} />
        <SpiritSection />
        <FaqSection />
        <ClosingSection onJoin={() => setJoinOpen(true)} />
      </main>
      <Footer onInfo={(type) => setInfoType(type)} />
      <ScrollToTop />
      <VideoModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
      />
      <Dialogs
        joinOpen={joinOpen}
        setJoinOpen={setJoinOpen}
        infoType={infoType}
        setInfoType={setInfoType}
      />
    </>
  );
}


import HeroSection from "./components/Hero/HeroSection";

import PazSection from "./components/Paz/PazSection";

import CinematicImage from "./components/Cinematic/CinematicImage";

import OriginSection from "./components/Origin/OriginSection";

import BackgroundMusic from "./components/Audio/BackgroundMusic";

export default function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      
      <BackgroundMusic />

      <HeroSection />

      <PazSection />

      <CinematicImage />

      <OriginSection />
    </div>
  );
}
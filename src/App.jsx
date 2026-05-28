import HeroSection from "./components/Hero/HeroSection";

import PazSection from "./components/Paz/PazSection";

import CinematicImage from "./components/Cinematic/CinematicImage";

import OriginSection from "./components/Origin/OriginSection";

export default function App() {
  return (
    <div className="w-screen overflow-x-hidden bg-black text-white">
      
      <HeroSection />

      <PazSection />

      <CinematicImage />

      <OriginSection />
    </div>
  );
}
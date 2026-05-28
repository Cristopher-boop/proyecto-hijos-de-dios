import HeroSection from "./components/Hero/HeroSection";
import HistoryBirth from "./components/Story/HistoryBirth";
import HistoryPresident from "./components/Story/HistoryPresident";
import PazSection from "./components/Paz/PazSection";
import CinematicImage from "./components/Cinematic/CinematicImage";
import OriginSection from "./components/Origin/OriginSection";
import BackgroundMusic from "./components/Audio/BackgroundMusic";
import RodrigoSection from "./components/3D/RodrigoSection";
import BoomerSection from "./components/3D/BoomerSection";

export default function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      
      <BackgroundMusic />

      <HeroSection />

      <HistoryBirth />
      
      <HistoryPresident />

      <PazSection />       

      <CinematicImage />

      <OriginSection />

      <RodrigoSection />

      <BoomerSection />
    </div>
  );
}
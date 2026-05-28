import HeroSection from "./components/Hero/HeroSection";
import PazSection from "./components/Paz/PazSection";
import CinematicImage from "./components/Cinematic/CinematicImage";
import OriginSection from "./components/Origin/OriginSection";

export default function App() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      
      {/* HERO */}
      <HeroSection />

      {/* HISTORIA DE PAZ */}
      <PazSection />

      {/* IMAGEN CINEMATOGRÁFICA */}
      <CinematicImage />

      {/* ORIGEN */}
      <OriginSection />
    </main>
  );
}
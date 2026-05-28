import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";

import ParticlesBackground from "../Particles/ParticlesBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      
      <HeroBackground />

      <ParticlesBackground />

      <HeroContent />
    </section>
  );
}
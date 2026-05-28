import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StorySection from "./components/StorySection";
import PresidentSection from "./components/PresidentSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      
      {/* BACKGROUND FX */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-200px] left-[-200px] w-[700px] h-[700px] bg-red-700/20 rounded-full blur-[180px]" />

        <div className="absolute bottom-[-200px] right-[-200px] w-[700px] h-[700px] bg-orange-600/10 rounded-full blur-[180px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.08),transparent_60%)]" />
      </div>

      <Navbar />
      <Hero />
      <StorySection />
      <PresidentSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
import { motion } from "framer-motion";

import { sections } from "./sectionsData";

import OverlayText from "./OverlayText";

export default function CinematicSection() {
  return (
    <section className="bg-black">
      
      {sections.map((section) => (
        <div
          key={section.id}
          className="relative h-screen overflow-hidden"
        >
          {/* BACKGROUND */}
          <motion.img
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 2 }}
            src={section.image}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/65 z-10" />

          {/* CINEMATIC LIGHT */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10" />

          {/* RED GLOW */}
          <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-red-700/20 rounded-full blur-[180px] z-10" />

          {/* CONTENT */}
          <OverlayText
            subtitle={section.subtitle}
            title={section.title}
            description={section.description}
          />
        </div>
      ))}
    </section>
  );
}
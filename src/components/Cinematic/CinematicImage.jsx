import { motion } from "framer-motion";

import zombies from "../../assets/zombies.png";

import NoiseOverlay from "../Effects/NoiseOverlay";

export default function CinematicImage() {
  return (
    <section className="relative h-screen overflow-hidden">
      
      {/* IMAGE */}
      <motion.img
        initial={{ scale: 1.4 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 2 }}
        src={zombies}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 z-10" />

      {/* NOISE */}
      <NoiseOverlay />

      {/* TEXT */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        
        <motion.h2
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="text-5xl md:text-8xl lg:text-[160px] font-black text-center leading-none"
        >
          LAS CALLES
          <motion.span
            animate={{
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="block text-red-500"
          >
            ARDIERON
          </motion.span>
        </motion.h2>
      </div>
    </section>
  );
}
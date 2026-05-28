import { motion } from "framer-motion";

import Tilt from "react-parallax-tilt";

import palacio from "../../assets/palacio.png";

import FloatingParticles from "../Effects/FloatingParticles";

import NoiseOverlay from "../Effects/NoiseOverlay";

import HeroSound from "../Audio/HeroSound";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-screen h-screen overflow-hidden"
    >  
      <HeroSound />

      {/* BACKGROUND */}
      <motion.img
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3 }}
        src={palacio}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* PARTICLES */}
      <FloatingParticles />

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-black/35 z-10" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20 z-10" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent z-10" />

      {/* RED GLOW */}
      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="absolute top-[-200px] left-[-200px] w-[700px] h-[700px] bg-red-700/20 rounded-full blur-[180px] z-10"
      />

      {/* NOISE */}
      <NoiseOverlay />

      {/* CONTENT */}
      <div className="absolute inset-0 flex items-center z-20">
        
        <div className="w-full px-[8vw]">
          
          <Tilt
            tiltMaxAngleX={3}
            tiltMaxAngleY={3}
            perspective={2000}
            transitionSpeed={2000}
            scale={1.01}
          >
            {/* SUBTITLE */}
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="uppercase tracking-[16px] text-white/70 text-sm md:text-lg mb-8"
            >
              Bolivia 2029
            </motion.p>

            {/* TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 120 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4 }}
              className="text-7xl sm:text-8xl md:text-[160px] lg:text-[220px] font-black leading-[0.82]"
            >
              RODRIGO
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 10px rgba(255,0,0,0.4)",
                    "0 0 40px rgba(255,0,0,0.9)",
                    "0 0 10px rgba(255,0,0,0.4)",
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}
                className="block text-red-500"
              >
                PAZ
              </motion.span>
            </motion.h1>

            {/* LINE */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 260 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="h-[4px] bg-red-600 rounded-full mt-10 mb-12 shadow-[0_0_25px_red]"
            />

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="max-w-4xl text-xl md:text-3xl text-gray-200 leading-relaxed"
            >
              El último hombre que observó el colapso de Bolivia.
            </motion.p>
          </Tilt>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-[34px] h-[60px] border-2 border-white/40 rounded-full flex justify-center p-2">
          
          <motion.div
            animate={{
              y: [0, 18, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
            className="w-2 h-2 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
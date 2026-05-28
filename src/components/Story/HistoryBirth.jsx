import React from 'react';
import { motion } from 'framer-motion';
// Importamos la imagen desde la carpeta assets
import bolivia from "../../assets/bolivia.jpeg"; 

import BirthVoice from "../Audio/BirthVoice";

export default function HistoryBirth() {
  return (
    <section
      id="birth"
      className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center py-32 px-8"
    >
      <BirthVoice />
        
      <motion.img
        initial={{ scale: 1.15 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        src={bolivia}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10" />
      <div className="absolute inset-0 bg-white/5 blur-[120px] pointer-events-none z-10" />

      {/* CONTENIDO DE TEXTO */}
      <div className="relative z-20 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="uppercase tracking-[15px] text-gray-400 mb-6 text-sm md:text-base font-semibold drop-shadow-md">
            22 de Septiembre de 1967
          </p>
          
          <h2 className="text-4xl md:text-6xl font-black leading-tight text-white mb-10 drop-shadow-xl">
            EL NACIMIENTO <br />
            <span className="text-gray-300">DE UN LÍDER</span>
          </h2>
          
          <p className="text-gray-200 text-xl md:text-2xl leading-relaxed font-light drop-shadow-lg">
            En una Bolivia tranquila y ajena a la oscuridad que se avecinaba, nacía un niño al que le aguardaba un destino tan grandioso como catastrófico. En aquellos días de paz, nadie habría imaginado el peso absoluto que esos hombros llegarían a cargar para intentar salvar a una nación entera.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
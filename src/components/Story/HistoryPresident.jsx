import React from 'react';
import { motion } from 'framer-motion';
// Importamos la imagen desde la carpeta assets
import presidencia from "../../assets/presidencia.jpeg"; 

export default function HistoryPresident() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center py-32 px-8">
      
      {/* IMAGEN DE FONDO CON ZOOM LENTO */}
      <motion.img
        initial={{ scale: 1.15 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        src={presidencia}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAYS CINEMÁTICOS (Capas oscuras para resaltar el texto) */}
      <div className="absolute inset-0 bg-black/70 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black z-10" />
      
      {/* Resplandor ligeramente rojo para anticipar el peligro */}
      <div className="absolute inset-0 bg-red-900/10 blur-[120px] pointer-events-none z-10" />

      {/* CONTENIDO DE TEXTO */}
      <div className="relative z-20 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="uppercase tracking-[15px] text-red-500 mb-6 text-sm md:text-base font-semibold drop-shadow-md">
            El Apogeo
          </p>
          
          <h2 className="text-4xl md:text-6xl font-black leading-tight text-white mb-10 drop-shadow-xl">
            EL SUEÑO DE <br />
            <span className="text-red-600">UNA NACIÓN</span>
          </h2>
          
          <p className="text-gray-200 text-xl md:text-2xl leading-relaxed font-light drop-shadow-lg">
            Con el firme propósito de forjar un futuro brillante, Rodrigo logró un ascenso a la presidencia sin precedentes. Fue un momento de júbilo puro, la promesa de una Bolivia mejor. Pero mientras la superficie celebraba, el verdadero horror ya comenzaba a gestarse bajo tierra... ¿quién sabría lo que se desataría poco tiempo después?
          </p>
        </motion.div>
      </div>
    </section>
  );
}
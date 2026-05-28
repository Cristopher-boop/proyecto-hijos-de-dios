import { motion } from "framer-motion";

import zombies from "../../assets/zombies.png";

export default function CinematicImage() {
  return (
    <section className="relative h-screen overflow-hidden">
      
      {/* IMAGE */}
      <motion.img
        initial={{ scale: 1.3 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 2 }}
        src={zombies}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* TEXT */}
      <div className="absolute inset-0 flex items-center justify-center">
        
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="text-5xl md:text-8xl lg:text-[140px] font-black text-center leading-none"
        >
          LAS CALLES
          <span className="block text-red-500">
            ARDIERON
          </span>
        </motion.h2>
      </div>
    </section>
  );
}
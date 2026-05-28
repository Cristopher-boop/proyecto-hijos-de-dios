import { motion } from "framer-motion";

import palacio from "../../assets/palacio.png";

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      
      {/* IMAGEN COMPLETA */}
      <motion.img
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        src={palacio}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* TEXTO */}
      <div className="absolute inset-0 flex items-end">
        
        <div className="max-w-7xl mx-auto px-8 pb-24 w-full">
          
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="uppercase tracking-[12px] text-white/70 text-sm md:text-base mb-5"
          >
            Bolivia 2029
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 120 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            className="text-6xl md:text-8xl lg:text-[140px] font-black leading-[0.9]"
          >
            RODRIGO
            <span className="block text-red-500">
              PAZ
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="max-w-2xl text-lg md:text-2xl text-gray-300 leading-10 mt-8"
          >
            El último hombre que observó el colapso de Bolivia.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";

import palacio from "../../assets/palacio.png";

export default function HeroSection() {
  return (
    <section className="relative w-screen h-screen overflow-hidden">
      
      {/* BACKGROUND */}
      <motion.img
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5 }}
        src={palacio}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/35" />

      {/* CINEMATIC SHADOW */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />

      {/* CONTENT */}
      <div className="absolute inset-0 flex items-center">
        
        {/* IMPORTANTE:
           YA NO USAMOS max-w-7xl
           YA NO USAMOS mx-auto
        */}

        <div className="w-full px-[8vw]">
          
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
            <span className="block text-red-500 drop-shadow-[0_0_40px_rgba(255,0,0,0.8)]">
              PAZ
            </span>
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
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
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
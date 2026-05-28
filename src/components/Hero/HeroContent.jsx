import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
      
      <div className="max-w-3xl">
        
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="uppercase tracking-[10px] text-red-500 mb-6"
        >
          El fin de Bolivia
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-6xl md:text-8xl lg:text-[120px] font-black leading-[0.9]"
        >
          LA PAZ
          <span className="block text-red-500">
            HA CAÍDO
          </span>
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 180 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="h-1 bg-red-600 rounded-full mt-8 mb-10"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-xl md:text-2xl text-gray-300 leading-10"
        >
          Todo comenzó en las minas abandonadas de Potosí.
          Una infección desconocida convirtió a miles de personas
          en criaturas violentas.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-6 text-gray-400 text-lg leading-9"
        >
          Mientras Bolivia colapsaba, Rodrigo Paz permaneció
          atrapado dentro del Palacio Quemado observando
          el fin del país.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="flex gap-5 mt-14"
        >
          <button className="bg-red-600 hover:bg-red-700 px-10 py-5 rounded-2xl text-xl font-black transition hover:scale-105 shadow-[0_0_50px_rgba(255,0,0,0.8)]">
            VER HISTORIA
          </button>

          <button className="border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white hover:text-black px-10 py-5 rounded-2xl text-xl font-bold transition">
            EXPLORAR
          </button>
        </motion.div>
      </div>
    </div>
  );
}
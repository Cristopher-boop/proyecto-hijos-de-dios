import { motion } from "framer-motion";

import rodrigo from "../../assets/rodrigo.png";

export default function PazSection() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden py-32">
      
      {/* GLOW */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-red-700/10 blur-[180px]" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-red-600/20 blur-[100px]" />

            <img
              src={rodrigo}
              className="relative rounded-[40px] h-[850px] w-full object-cover"
            />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <p className="uppercase tracking-[10px] text-red-500 mb-6">
              El Presidente
            </p>

            <h2 className="text-6xl md:text-8xl font-black leading-[0.9]">
              EL ÚLTIMO
              <span className="block text-red-500">
                SOBREVIVIENTE
              </span>
            </h2>

            <div className="w-40 h-1 bg-red-600 rounded-full mt-8 mb-10" />

            <p className="text-xl text-gray-300 leading-10">
              Mientras el país colapsaba bajo la infección, Rodrigo Paz quedó
              atrapado dentro del Palacio Quemado observando cómo las calles de
              La Paz eran tomadas por hordas violentas.
            </p>

            <p className="mt-8 text-lg text-gray-500 leading-9">
              Las comunicaciones desaparecieron. El ejército cayó en menos de
              una semana. Nadie volvió a salir de la ciudad.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
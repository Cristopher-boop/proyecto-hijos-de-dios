import { motion } from "framer-motion";

import mineros from "../../assets/mineros.png";

export default function OriginSection() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden py-40">
      
      {/* RED LIGHT */}
      <div className="absolute right-0 top-0 w-[700px] h-[700px] bg-red-700/10 blur-[180px]" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <p className="uppercase tracking-[10px] text-red-500 mb-6">
              El Origen
            </p>

            <h2 className="text-6xl md:text-8xl font-black leading-[0.9]">
              TODO
              <span className="block text-red-500">
                COMENZÓ
              </span>
            </h2>

            <div className="w-40 h-1 bg-red-600 rounded-full mt-8 mb-10" />

            <p className="text-xl text-gray-300 leading-10">
              Todo comenzó en las minas abandonadas de Potosí. Un grupo de
              trabajadores encontró una extraña sustancia enterrada bajo la
              tierra.
            </p>

            <p className="mt-8 text-lg text-gray-500 leading-9">
              Días después aparecieron los primeros síntomas. Violencia,
              mutaciones y comportamientos inhumanos comenzaron a extenderse por
              todo el país.
            </p>

            <p className="mt-8 text-lg text-gray-500 leading-9">
              Cuando las autoridades reaccionaron, Bolivia ya había colapsado.
            </p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-red-600/20 blur-[100px]" />

            <img
              src={mineros}
              className="relative rounded-[40px] h-[850px] w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
import rodrigo from "../assets/rodrigo.png";

export default function PresidentSection() {
  return (
    <section
      id="presidente"
      className="relative py-44 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-red-950 via-black to-black" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        
        <div>
          <p className="uppercase tracking-[10px] text-red-500 mb-5">
            Último Hombre en Pie
          </p>

          <h2 className="text-6xl md:text-8xl font-black leading-none">
            RODRIGO
            <span className="block text-red-500 mt-4">
              PAZ
            </span>
          </h2>

          <p className="mt-10 text-xl leading-10 text-gray-300">
            Refugiado dentro del Palacio Quemado, Rodrigo Paz lidera
            la última resistencia humana mientras hordas zombis
            rodean toda La Paz.
          </p>

          <p className="mt-6 text-gray-500 text-lg leading-9">
            Las comunicaciones colapsaron hace días. El ejército fue
            destruido. El país cayó.
          </p>

          <button className="mt-12 bg-red-600 hover:bg-red-700 px-12 py-5 rounded-2xl text-2xl font-black transition duration-300 hover:scale-105 shadow-[0_0_50px_rgba(255,0,0,0.7)]">
            INICIAR MISIÓN
          </button>
        </div>

        <div className="relative">
          
          <div className="absolute inset-0 bg-red-600/20 blur-[120px] rounded-full" />

          <img
            src={rodrigo}
            className="relative rounded-[45px] w-full h-[700px] object-cover border border-red-500/20 shadow-[0_0_60px_rgba(255,0,0,0.2)]"
          />
        </div>
      </div>
    </section>
  );
}
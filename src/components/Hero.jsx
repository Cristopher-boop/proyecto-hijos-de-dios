import palacio from "../assets/palacio.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-32">
      
      {/* BACKGROUND */}
      <img
        src={palacio}
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      {/* CINEMATIC OVERLAYS */}
      <div className="absolute inset-0 bg-black/75" />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

      {/* RED LIGHT */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-red-700/20 rounded-full blur-[180px]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT SIDE */}
          <div className="pt-10">
            
            {/* MINI TEXT */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-[2px] bg-red-600" />

              <p className="uppercase tracking-[10px] text-red-500 text-sm md:text-base font-semibold">
                Apocalipsis Zombie en Bolivia
              </p>
            </div>

            {/* TITLE */}
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[120px] font-black leading-[0.88]">
              LA PAZ
              <span className="block text-red-500 drop-shadow-[0_0_30px_rgba(255,0,0,0.8)]">
                HA CAÍDO
              </span>
            </h1>

            {/* LINE */}
            <div className="w-40 h-1 bg-red-600 rounded-full mt-8 mb-10 shadow-[0_0_25px_red]" />

            {/* DESCRIPTION */}
            <p className="text-lg md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
              Todo comenzó en las minas abandonadas de Potosí. Un grupo de
              trabajadores encontró una extraña sustancia enterrada a cientos
              de metros bajo tierra.
            </p>

            <p className="mt-6 text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl">
              Días después, los mineros comenzaron a mutar. La infección se
              expandió rápidamente hacia las ciudades, protestas y bloqueos,
              convirtiendo Bolivia en un infierno.
            </p>

            <p className="mt-6 text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl">
              Las calles fueron tomadas por hordas de mineros infectados,
              manifestantes zombificados y bloqueadores violentos.
            </p>

            <p className="mt-6 text-xl md:text-2xl text-white leading-relaxed max-w-2xl font-semibold">
              El único sobreviviente conocido es:
              <span className="text-red-500">
                {" "}el presidente Rodrigo Paz.
              </span>
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5 mt-14">
              
              <button className="group relative overflow-hidden bg-red-600 hover:bg-red-700 px-10 py-5 rounded-2xl text-xl font-black transition duration-300 hover:scale-105 shadow-[0_0_60px_rgba(255,0,0,0.8)]">
                
                <span className="relative z-10">
                  VER TRAILER
                </span>

                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition duration-500" />
              </button>

              <button className="border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white hover:text-black px-10 py-5 rounded-2xl text-xl font-bold transition duration-300">
                EXPLORAR HISTORIA
              </button>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-10 mt-20 max-w-2xl">
              
              <div>
                <h3 className="text-5xl font-black text-red-500">
                  9
                </h3>

                <p className="text-gray-400 mt-3 text-lg">
                  Ciudades Caídas
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-black text-red-500">
                  50K+
                </h3>

                <p className="text-gray-400 mt-3 text-lg">
                  Infectados
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-black text-red-500">
                  1
                </h3>

                <p className="text-gray-400 mt-3 text-lg">
                  Sobreviviente
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="hidden lg:flex justify-center">
            
            <div className="relative">
              
              {/* GLOW */}
              <div className="absolute inset-0 bg-red-600/30 blur-[100px] rounded-full" />

              {/* CARD */}
              <div className="relative bg-black/40 border border-red-500/20 backdrop-blur-2xl rounded-[40px] overflow-hidden w-[440px] shadow-[0_0_60px_rgba(255,0,0,0.15)]">
                
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  
                  <img
                    src={palacio}
                    className="h-[320px] w-full object-cover hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                  {/* ALERT */}
                  <div className="absolute top-6 left-6 bg-red-600 px-4 py-2 rounded-full text-sm font-bold tracking-widest shadow-[0_0_20px_rgba(255,0,0,0.8)]">
                    ALERTA MÁXIMA
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-10">
                  
                  <p className="text-red-500 uppercase tracking-[8px] text-sm mb-5">
                    Último Reporte
                  </p>

                  <h2 className="text-5xl font-black leading-none">
                    EL PALACIO
                    <span className="block text-red-500 mt-2">
                      RESISTE
                    </span>
                  </h2>

                  <p className="text-gray-400 leading-9 mt-8 text-xl">
                    Rodrigo Paz y un pequeño grupo militar continúan resistiendo
                    dentro del Palacio Quemado mientras miles de zombis rodean
                    La Paz.
                  </p>

                  <p className="text-gray-500 leading-8 mt-6 text-lg">
                    Las comunicaciones colapsaron hace 72 horas. No hay contacto
                    con el exterior.
                  </p>

                  {/* BUTTON */}
                  <button className="mt-10 w-full bg-red-600 hover:bg-red-700 py-5 rounded-2xl text-xl font-black transition duration-300 hover:scale-[1.02] shadow-[0_0_40px_rgba(255,0,0,0.5)]">
                    ENTRAR AL BUNKER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
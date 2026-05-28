export default function FinalCTA() {
  return (
    <section className="relative py-44 px-6 text-center overflow-hidden">
      
      <div className="absolute inset-0 bg-black" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.2),transparent_60%)]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        
        <p className="uppercase tracking-[10px] text-red-500 mb-6">
          ¿Podrás sobrevivir?
        </p>

        <h2 className="text-6xl md:text-8xl font-black leading-none">
          APOCALIPSIS
          <span className="block text-red-500 mt-4">
            BOLIVIA
          </span>
        </h2>

        <p className="mt-10 text-2xl text-gray-300 leading-10 max-w-3xl mx-auto">
          Explora una Bolivia destruida por hordas de zombis mineros y
          manifestantes infectados.
        </p>

        <button className="mt-14 bg-red-600 hover:bg-red-700 px-14 py-6 rounded-2xl text-2xl font-black transition duration-300 hover:scale-110">
          JUGAR AHORA
        </button>
      </div>
    </section>
  );
}
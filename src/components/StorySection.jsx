import zombies from "../assets/zombies.png";
import mutantes from "../assets/mutantes.png";
import mineros from "../assets/mineros.png";

const cards = [
  {
    title: "Mineros Infectados",
    text: "Una infección salió de las minas y convirtió a los trabajadores en criaturas violentas.",
    image: mineros,
},

  {
    title: "Bloqueadores Zombies",
    text: "Las carreteras fueron tomadas por hordas infectadas.",
    image: zombies,
},

  {
    title: "Manifestantes Mutados",
    text: "Las protestas terminaron en una masacre nacional.",
    image: mutantes,
},
];

export default function StorySection() {
  return (
    <section
      id="historia"
      className="relative py-40 px-6 bg-gradient-to-b from-black to-zinc-950"
    >
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-24">
          <p className="text-red-500 uppercase tracking-[10px] mb-5">
            Historia
          </p>

          <h2 className="text-6xl md:text-8xl font-black leading-none">
            EL FIN DE
            <span className="block text-red-500 mt-4">
              BOLIVIA
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[35px] overflow-hidden hover:border-red-500/40 transition duration-500 hover:-translate-y-3"
            >
              <div className="overflow-hidden h-[280px]">
                <img
                  src={card.image}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-8">
                <h3 className="text-4xl font-black text-red-500 mb-6">
                  {card.title}
                </h3>

                <p className="text-gray-400 text-lg leading-9">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
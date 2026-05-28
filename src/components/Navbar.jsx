import { useEffect, useState } from "react";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        showNavbar
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
      }`}
    >
      <div className="mx-6 mt-5 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          
          <h1 className="text-2xl md:text-4xl font-black tracking-[6px] text-red-500">
            APOCALIPSIS BOLIVIA
          </h1>

          <div className="hidden md:flex items-center gap-10 text-lg font-semibold text-gray-300">
            <a href="#historia" className="hover:text-red-500 transition">
              Historia
            </a>

            <a href="#presidente" className="hover:text-red-500 transition">
              Rodrigo Paz
            </a>

            <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl transition font-bold">
              Jugar
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
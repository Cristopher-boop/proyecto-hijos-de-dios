import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{
        y: showNavbar ? 0 : -120,
      }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="mx-6 mt-5 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-2xl">
        
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          
          <h1 className="text-2xl md:text-4xl font-black tracking-[6px] text-red-500">
            APOCALIPSIS
          </h1>

          <div className="hidden md:flex gap-10 text-gray-300 font-semibold">
            <a href="#historia" className="hover:text-red-500 transition">
              Historia
            </a>

            <a href="#presidente" className="hover:text-red-500 transition">
              Rodrigo Paz
            </a>

            <a href="#final" className="hover:text-red-500 transition">
              Final
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
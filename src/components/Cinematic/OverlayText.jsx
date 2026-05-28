import { motion } from "framer-motion";

export default function OverlayText({
  subtitle,
  title,
  description,
}) {
  return (
    <div className="absolute inset-0 z-20 flex items-center">
      
      <div className="max-w-7xl mx-auto px-8 w-full">
        
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="uppercase tracking-[10px] text-red-500 text-sm md:text-base mb-6"
        >
          {subtitle}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-5xl sm:text-6xl md:text-8xl lg:text-[120px] font-black leading-[0.9] whitespace-pre-line"
        >
          {title}
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 180 }}
          transition={{ duration: 1 }}
          className="h-1 bg-red-600 rounded-full mt-8 mb-10"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="max-w-2xl text-lg md:text-2xl text-gray-300 leading-10"
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
}
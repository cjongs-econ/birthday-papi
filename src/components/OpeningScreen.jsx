import { motion } from "framer-motion";
import { opening } from "../data/relationshipData.js";

export default function OpeningScreen({ onStart }) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <motion.span
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 140, damping: 10, delay: 0.1 }}
        className="text-6xl mb-6 animate-floaty inline-block"
        aria-hidden="true"
      >
        🎂
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blush-500 via-blush-400 to-lavender-300 leading-tight"
      >
        {opening.heading}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="mt-5 max-w-md text-lg sm:text-xl text-rose-900/80"
      >
        {opening.subheading}
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-3 text-sm text-rose-400 italic"
      >
        {opening.smallText}
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.65 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        onClick={onStart}
        className="mt-10 rounded-full bg-gradient-to-r from-blush-400 to-blush-500 px-8 py-4 text-white font-semibold shadow-lg shadow-blush-300/50 hover:shadow-xl hover:shadow-blush-300/60 transition-shadow"
      >
        {opening.buttonText} ✨
      </motion.button>
    </section>
  );
}

import { motion } from "framer-motion";
import { distanceSection } from "../data/relationshipData.js";

export default function DistanceSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 gap-8 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl font-bold text-rose-900"
      >
        {distanceSection.title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-lg text-rose-800/90 leading-relaxed"
      >
        {distanceSection.text}
      </motion.p>

      <div className="w-full max-w-lg flex items-center justify-between gap-4">
        <div className="flex flex-col items-center gap-2">
          <span className="text-4xl" aria-hidden="true">
            🏙️
          </span>
          <span className="font-semibold text-rose-900">{distanceSection.cityA}</span>
        </div>

        <svg
          className="flex-1 h-8"
          viewBox="0 0 200 20"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <line
            x1="0"
            y1="10"
            x2="200"
            y2="10"
            stroke="url(#lineGradient)"
            strokeWidth="3"
            strokeDasharray="8 6"
            strokeLinecap="round"
            className="animate-dashMove"
          />
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ff7aa8" />
              <stop offset="100%" stopColor="#bfaefc" />
            </linearGradient>
          </defs>
        </svg>

        <div className="flex flex-col items-center gap-2">
          <span className="text-4xl" aria-hidden="true">
            🌉
          </span>
          <span className="font-semibold text-rose-900">{distanceSection.cityB}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg mt-4">
        <div className="rounded-2xl bg-white/70 backdrop-blur-sm border border-white/60 shadow-md shadow-blush-100/60 px-5 py-4">
          <p className="text-xs uppercase tracking-widest text-blush-400 font-semibold">
            Current distance
          </p>
          <p className="mt-1 text-lg font-semibold text-rose-900">
            {distanceSection.currentDistance}
          </p>
        </div>
        <div className="rounded-2xl bg-white/70 backdrop-blur-sm border border-white/60 shadow-md shadow-blush-100/60 px-5 py-4">
          <p className="text-xs uppercase tracking-widest text-blush-400 font-semibold">
            Days until we see each other again
          </p>
          <p className="mt-1 text-lg font-semibold text-rose-900">
            {distanceSection.daysUntilNextMeeting}
          </p>
        </div>
      </div>
    </section>
  );
}

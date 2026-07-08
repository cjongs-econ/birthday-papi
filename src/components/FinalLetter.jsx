import { motion } from "framer-motion";
import { finalLetter } from "../data/relationshipData.js";

export default function FinalLetter() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl rounded-3xl bg-white/80 backdrop-blur-sm shadow-xl shadow-blush-200/40 p-8 sm:p-12"
      >
        <div className="flex flex-col gap-4 text-rose-900/90 leading-relaxed">
          {finalLetter.paragraphs.map((paragraph, i) => (
            <p key={i} className={i === 0 ? "text-2xl font-display font-semibold text-rose-900" : ""}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-8 text-right">
          <p className="text-rose-800/80 italic">{finalLetter.signatureLead}</p>
          <p className="mt-1 text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-blush-500 to-lavender-300">
            {finalLetter.signature}
          </p>
        </div>
      </motion.div>
    </section>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";
import { assetPath } from "../utils/assetPath.js";
import { finalGift } from "../data/relationshipData.js";

export default function FinalGift() {
  const [photoError, setPhotoError] = useState(false);
  const photoSrc = assetPath(`photos/${finalGift.photo.filename}`);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 gap-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
        className="text-center"
      >
        <span className="text-6xl animate-popIn inline-block" aria-hidden="true">
          🎁
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-rose-900">
          {finalGift.heading}
        </h2>
        <p className="mt-2 text-rose-800/80">{finalGift.subheading}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md rounded-3xl border-2 border-dashed border-blush-300 bg-white/80 backdrop-blur-sm shadow-xl shadow-blush-200/50 p-8 relative overflow-hidden"
      >
        <span className="absolute -top-4 -right-4 text-4xl rotate-12 opacity-70" aria-hidden="true">
          ✨
        </span>
        <p className="text-xs font-semibold uppercase tracking-widest text-blush-400">
          {finalGift.coupon.subtitle}
        </p>
        <h3 className="mt-1 text-2xl font-bold text-rose-900">{finalGift.coupon.title}</h3>
        <p className="mt-4 text-rose-800/90 leading-relaxed">{finalGift.coupon.body}</p>
        <p className="mt-6 text-xs italic text-rose-400 border-t border-blush-100 pt-4">
          {finalGift.coupon.finePrint}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-full max-w-md rounded-3xl bg-white/80 backdrop-blur-sm shadow-xl shadow-lavender-200/50 p-6 sm:p-8"
      >
        <h3 className="text-xl font-bold text-rose-900 mb-4">{finalGift.photo.title}</h3>

        {!photoError ? (
          <img
            src={photoSrc}
            alt={finalGift.photo.title}
            className="w-full rounded-2xl object-cover"
            onError={() => setPhotoError(true)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-gradient-to-br from-lavender-100 via-blush-100 to-peach-100 py-16 px-6 text-center">
            <span className="text-4xl" aria-hidden="true">
              📷
            </span>
            <p className="text-rose-800/80">{finalGift.photo.placeholderText}</p>
            <p className="text-xs uppercase tracking-wide text-rose-300">
              photos/{finalGift.photo.filename}
            </p>
          </div>
        )}
      </motion.div>
    </section>
  );
}

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MemoryCard from "./MemoryCard.jsx";
import { memoryStops, questIntro } from "../data/relationshipData.js";

export default function MemoryQuest({ onComplete }) {
  const [index, setIndex] = useState(0);
  const [showCollected, setShowCollected] = useState(false);
  const total = memoryStops.length;
  const stop = memoryStops[index];
  const isLast = index === total - 1;

  function handleContinue() {
    setShowCollected(true);
    setTimeout(() => {
      setShowCollected(false);
      if (isLast) {
        onComplete();
      } else {
        setIndex((i) => i + 1);
      }
    }, 750);
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 gap-8">
      <div className="max-w-md text-center">
        <p className="text-rose-900/80 leading-relaxed">{questIntro.missionText}</p>
      </div>

      <div className="w-full max-w-md">
        <div className="flex items-center justify-between text-xs font-semibold text-rose-400 mb-2">
          <span>
            Memory {index + 1} of {total}
          </span>
          <span>{Math.round(((index + 1) / total) * 100)}%</span>
        </div>
        <div className="h-2 w-full rounded-full bg-blush-100 overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-blush-400 to-lavender-300"
            initial={{ width: 0 }}
            animate={{ width: `${((index + 1) / total) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>

      <div className="relative w-full flex justify-center">
        <AnimatePresence mode="wait">
          <MemoryCard
            key={stop.id}
            stop={stop}
            index={index}
            total={total}
            isLast={isLast}
            onContinue={handleContinue}
          />
        </AnimatePresence>

        <AnimatePresence>
          {showCollected && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute inset-0 flex items-center justify-center bg-white/70 backdrop-blur-sm rounded-3xl"
            >
              <div className="flex flex-col items-center gap-2 animate-popIn">
                <span className="text-5xl" aria-hidden="true">
                  💗
                </span>
                <span className="font-display font-semibold text-blush-500">
                  Memory collected!
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

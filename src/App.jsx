import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import OpeningScreen from "./components/OpeningScreen.jsx";
import MemoryQuest from "./components/MemoryQuest.jsx";
import DistanceSection from "./components/DistanceSection.jsx";
import FinalGift from "./components/FinalGift.jsx";
import FinalLetter from "./components/FinalLetter.jsx";
import { footerText } from "./data/relationshipData.js";

// Stages of the whole experience, in order.
const STAGES = {
  OPENING: "opening",
  QUEST: "quest",
  REVEAL: "reveal",
};

function FloatingBackdrop() {
  const symbols = ["💗", "✨", "💫", "💕", "⭐"];
  const items = Array.from({ length: 14 }, (_, i) => ({
    id: i,
    symbol: symbols[i % symbols.length],
    left: `${(i * 37) % 100}%`,
    delay: `${(i % 7) * 0.6}s`,
    duration: `${6 + (i % 5)}s`,
    size: `${1 + (i % 3) * 0.4}rem`,
    top: `${(i * 53) % 100}%`,
  }));

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0" aria-hidden="true">
      {items.map((item) => (
        <span
          key={item.id}
          className="absolute opacity-40 animate-floatySlow select-none"
          style={{
            left: item.left,
            top: item.top,
            fontSize: item.size,
            animationDelay: item.delay,
            animationDuration: item.duration,
          }}
        >
          {item.symbol}
        </span>
      ))}
    </div>
  );
}

export default function App() {
  const [stage, setStage] = useState(STAGES.OPENING);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <FloatingBackdrop />

      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {stage === STAGES.OPENING && (
            <motion.div
              key="opening"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <OpeningScreen onStart={() => setStage(STAGES.QUEST)} />
            </motion.div>
          )}

          {stage === STAGES.QUEST && (
            <motion.div
              key="quest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <MemoryQuest onComplete={() => setStage(STAGES.REVEAL)} />
            </motion.div>
          )}

          {stage === STAGES.REVEAL && (
            <motion.div
              key="reveal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <DistanceSection />
              <FinalGift />
              <FinalLetter />
              <footer className="text-center text-sm text-rose-400/80 py-10 px-4">
                {footerText}
              </footer>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

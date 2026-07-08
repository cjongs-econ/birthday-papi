import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assetPath } from "../utils/assetPath.js";

function normalize(value) {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

export default function MemoryCard({ stop, index, total, onContinue, isLast }) {
  const [guess, setGuess] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [showWrong, setShowWrong] = useState(false);

  function handleGuessSubmit(e) {
    e.preventDefault();
    const correct = stop.answers.some((answer) => normalize(answer) === normalize(guess));
    if (correct) {
      setIsCorrect(true);
      setShowWrong(false);
    } else {
      setShowWrong(true);
    }
  }

  return (
    <motion.div
      key={stop.id}
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -24, scale: 0.97 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="w-full max-w-md rounded-3xl bg-white/80 backdrop-blur-sm shadow-xl shadow-blush-200/40 border border-white/60 overflow-hidden"
    >
      <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-blush-100 via-peach-100 to-lavender-100 flex items-center justify-center">
        <img
          src={assetPath(`photos/${stop.photo}`)}
          alt={stop.title}
          className="h-full w-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.nextSibling.style.display = "flex";
          }}
        />
        <div
          className="absolute inset-0 hidden flex-col items-center justify-center gap-2 text-rose-400"
          style={{ display: "none" }}
        >
          <span className="text-4xl" aria-hidden="true">
            📷
          </span>
          <span className="text-xs uppercase tracking-wide text-rose-300">
            photos/{stop.photo}
          </span>
        </div>
      </div>

      <div className="p-6 sm:p-8 flex flex-col gap-4">
        <span className="text-xs font-semibold uppercase tracking-widest text-blush-400">
          Memory {index + 1} of {total}
        </span>
        <h2 className="text-2xl font-bold text-rose-900">{stop.title}</h2>
        <p className="text-rose-800/90 leading-relaxed">{stop.message}</p>
        <p className="text-sm italic text-lavender-400 bg-lavender-50 rounded-xl px-4 py-3">
          {stop.clue}
        </p>

        <AnimatePresence mode="wait">
          {!isCorrect ? (
            <motion.form
              key="guess-form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleGuessSubmit}
              className="flex flex-col gap-2"
            >
              <label htmlFor={`guess-${stop.id}`} className="text-sm font-semibold text-rose-900">
                Guess the city to unlock this memory
              </label>
              <motion.div
                animate={showWrong ? { x: [0, -8, 8, -6, 6, 0] } : { x: 0 }}
                transition={{ duration: 0.4 }}
                className="flex gap-2"
              >
                <input
                  id={`guess-${stop.id}`}
                  type="text"
                  value={guess}
                  onChange={(e) => {
                    setGuess(e.target.value);
                    setShowWrong(false);
                  }}
                  placeholder="Type a city..."
                  className="flex-1 rounded-full border border-blush-200 bg-white px-4 py-2 text-rose-900 placeholder:text-rose-300 focus:outline-none focus:ring-2 focus:ring-blush-300"
                />
                <button
                  type="submit"
                  className="rounded-full bg-gradient-to-r from-blush-400 to-lavender-300 px-5 py-2 text-white font-semibold shadow-md shadow-blush-200/60 whitespace-nowrap"
                >
                  Guess
                </button>
              </motion.div>
              {showWrong && (
                <span className="text-xs text-blush-500">Not quite — try again 💭</span>
              )}
            </motion.form>
          ) : (
            <motion.div
              key="guess-correct"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-3"
            >
              <span className="text-sm font-semibold text-blush-500">
                Yes! It's {stop.city} 💗
              </span>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onContinue}
                className="self-start rounded-full bg-gradient-to-r from-blush-400 to-lavender-300 px-6 py-3 text-white font-semibold shadow-md shadow-blush-200/60"
              >
                {isLast ? "Unlock your birthday gift 🎁" : "Collect memory & continue →"}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        blush: {
          50: "#fff5f7",
          100: "#ffe4ec",
          200: "#ffc9dd",
          300: "#ffa3c4",
          400: "#ff7aa8",
          500: "#f9548c",
        },
        peach: {
          50: "#fff8f0",
          100: "#ffecd9",
          200: "#ffd9b3",
          300: "#ffc08a",
        },
        lavender: {
          50: "#f6f3ff",
          100: "#ece5ff",
          200: "#d8ccff",
          300: "#bfaefc",
        },
      },
      fontFamily: {
        display: ["'Quicksand'", "'Poppins'", "system-ui", "sans-serif"],
        body: ["'Poppins'", "system-ui", "sans-serif"],
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(6deg)" },
        },
        floatySlow: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-12px) translateX(6px)" },
        },
        sparkle: {
          "0%, 100%": { opacity: "0.2", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1.1)" },
        },
        popIn: {
          "0%": { transform: "scale(0.6)", opacity: "0" },
          "60%": { transform: "scale(1.08)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        dashMove: {
          "0%": { strokeDashoffset: "0" },
          "100%": { strokeDashoffset: "-24" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        floatySlow: "floatySlow 8s ease-in-out infinite",
        sparkle: "sparkle 2.4s ease-in-out infinite",
        popIn: "popIn 0.5s ease-out",
        dashMove: "dashMove 1.5s linear infinite",
      },
    },
  },
  plugins: [],
};

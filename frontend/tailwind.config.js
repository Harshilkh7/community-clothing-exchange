// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
   extend: {
  animation: {
    fadeIn: "fadeIn 0.8s ease-out forwards",
    slideUp: "slideUp 0.8s ease-out forwards",
    slideDown: "slideDown 0.8s ease-out forwards",
  },
  keyframes: {
    fadeIn: {
      "0%": { opacity: 0 },
      "100%": { opacity: 1 },
    },
    slideUp: {
      "0%": { opacity: 0, transform: "translateY(40px)" },
      "100%": { opacity: 1, transform: "translateY(0)" },
    },
    slideDown: {
      "0%": { opacity: 0, transform: "translateY(-40px)" },
      "100%": { opacity: 1, transform: "translateY(0)" },
    },
  },
},

  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
const animations = require("tailwindcss-animations");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        openMenu: {
          "0%": { height: 0 },
          "100%": { height: 200 },
        },
        closeMenu: {
          "0%": { height: 200 },
          "100%": { height: 0 },
        },
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 100,
          },
        },
      },
      animation: {
        openMenu: "openMenu 0.3s ease-in-out",
        closeMenu: "closeMenu 0.3s ease-in-out",
        fadeIn: "fadeIn 2s ease-in-out",
        pulseSlow: "pulse 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

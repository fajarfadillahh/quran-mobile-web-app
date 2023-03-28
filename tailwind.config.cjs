/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
        arabic: ["Noto Naskh Arabic", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

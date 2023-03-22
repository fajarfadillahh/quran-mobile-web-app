/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
        arabic: ["Noto Naskh Arabic", "serif"],
      },
      letterSpacing: {
        tighter: "0.98px",
      },
    },
  },
  plugins: [],
};

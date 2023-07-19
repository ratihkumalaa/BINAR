/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#674188",
        secondary: "#C3ACD0",
        crem: "#E4C988",
        tertiary:"#f1e2ff",
      },
      fontFamily: {
        quickSand: ["Quicksand"],
      },
    },
  },
  plugins: [],
};

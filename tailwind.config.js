/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "Montserrat", "ui-sans-serif", "system-ui"],
      },
      colors: {
        cosmicPurple: "#6b21a8",
        cosmicIndigo: "#4f46e5",
        cosmicBlue: "#2563eb",
        cosmicPink: "#db2777",
      },
      boxShadow: {
        "cosmic-glow": "0 0 15px 4px rgba(107,33,168,0.7)",
      },
      animation: {
        "glow-pulse": "pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

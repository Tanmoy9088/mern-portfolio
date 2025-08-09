// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        classy: ['"Playfair Display"', "serif"],
        clean: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

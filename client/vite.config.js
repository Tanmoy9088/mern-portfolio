import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
  theme: {
    extend: {
      fontFamily: {
        classy: ['"Playfair Display"', "serif"],
      },
    },
  },
});

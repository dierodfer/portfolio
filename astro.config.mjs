import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://dierodfer.github.io",
  base: "/portfolio",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});

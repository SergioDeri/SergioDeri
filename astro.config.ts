import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { site } from "./src/data/site";

export default defineConfig({
  site: site.url,
  vite: { plugins: [tailwindcss()] },
});

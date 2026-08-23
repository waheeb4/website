// @ts-check
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  fonts: [
    {
      name: "Special Gothic Expanded One",
      cssVariable: "--font-special-gothic-expanded-one",
      provider: fontProviders.google(),
    },
  ],
});

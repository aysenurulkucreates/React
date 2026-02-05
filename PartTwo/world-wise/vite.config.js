import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({
      failOnError: false, // Hata olsa da durma, devam et!
      emitWarning: true, // Hataları sadece uyarı (sarı) olarak göster
      include: ["**/*.jsx", "**/*.js"], // Sadece bu dosyalara bak
      exclude: ["/node_modules/"], // Kütüphanelere karışma
    }),
  ],
});

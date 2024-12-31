import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // optimizes react code, isnt importing react itself

export default defineConfig({
  plugins: [react()],
  server: {
    // tells vite to automatically open browser when program is run
    open: true,
    // sets port number for deployment server
    port: 3000,
  },
});

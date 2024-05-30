import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // Disable TypeScript type checking
    exclude: ["typescript"],
  },
});

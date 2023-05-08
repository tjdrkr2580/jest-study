import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { test } from "vitest";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
  },
});

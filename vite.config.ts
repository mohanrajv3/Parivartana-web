import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// GitHub Pages repo name
const repoName = "Parivartana-web";

export default defineConfig(async () => {
  const plugins = [react(), runtimeErrorOverlay()];

  if (
    process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
  ) {
    const { cartographer } = await import("@replit/vite-plugin-cartographer");
    plugins.push(cartographer());
  }

  return {
    base: `/${repoName}/`, // 👈 Required for GitHub Pages

    plugins,

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),               // React frontend files
        "@shared": path.resolve(__dirname, "shared"),       // Shared types/schemas
        "@assets": path.resolve(__dirname, "attached_assets") // Static/media files
      },
    },

    root: ".", // Root of monorepo project

    build: {
      outDir: "dist",         // Output to dist/
      emptyOutDir: true,      // Clean before building
    },
  };
});

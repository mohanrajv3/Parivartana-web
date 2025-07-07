import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

<<<<<<< HEAD
// GitHub Pages repo name
const repoName = "Parivartana-web";
=======
const repoName = "Parivartana-web"; // 👈 Your GitHub repo name
>>>>>>> b5355d9 (Update: fixed Vite config and deployment setup for GitHub Pages)

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
<<<<<<< HEAD
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
=======
    base: `/${repoName}/`, // 👈 For GitHub Pages

    root: "client", // 👈 Tells Vite to look inside client/

    build: {
      outDir: "../dist", // 👈 Output built files to /dist
      emptyOutDir: true,
    },

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "client", "src"),
        "@shared": path.resolve(__dirname, "shared"),
        "@assets": path.resolve(__dirname, "attached_assets"),
      },
    },

    plugins,
>>>>>>> b5355d9 (Update: fixed Vite config and deployment setup for GitHub Pages)
  };
});

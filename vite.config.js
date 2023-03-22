import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";
import { resolve } from "path";

const rootDir = "./src";
export default defineConfig({
  root: rootDir,
  base: "/",
  rollupOptions: {
    input: {
      main: resolve(__dirname, rootDir, "index.html"),
      "001": resolve(__dirname, rootDir, "privacy/index.html"),
    },
  },
  outDir: "./dist",
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
});

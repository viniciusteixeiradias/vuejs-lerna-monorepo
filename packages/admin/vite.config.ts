import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const adminNodeModules = fileURLToPath(
  new URL("./node_modules", import.meta.url)
);
const sharedNodeModules = fileURLToPath(
  new URL("../shared/node_modules", import.meta.url)
);

// const adminSrc = path.resolve(__dirname, "src");
// const sharedSrc = path.resolve(__dirname, "../shared/src");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@admin": fileURLToPath(new URL("./src", import.meta.url)),
      "@shared": fileURLToPath(new URL("../shared/src", import.meta.url)),
    },
    conditions: [adminNodeModules, sharedNodeModules],
  },
});

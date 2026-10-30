import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";

export default defineConfig(({ command }) => ({
  plugins: [reactRouter()],
  resolve: {
    tsconfigPaths: true,
  },
  base: command === "build" ? "/svalbard/" : "/",
}));

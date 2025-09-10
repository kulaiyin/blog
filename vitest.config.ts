import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["markdown/leetcode/test/*.spec.ts"],
    exclude: [],
    watch: false,
  },
});

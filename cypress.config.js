import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://www.baidu.com",
    specPattern: 'cypress/integration',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  viewportHeight: 680,
  viewportWidth: 1280,
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
    specPattern: 'test.js'
  },
});

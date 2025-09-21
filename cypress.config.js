const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    pageLoadTimeout: 60000,
    defaultCommandTimeout: 8000,
    screenshotOnRunFailure: true,
    video: true,
    trashAssetsBeforeRuns: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

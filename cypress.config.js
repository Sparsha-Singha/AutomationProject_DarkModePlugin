const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost/DarkTest/wp-login.php',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      userName: process.env.USER,
      passWord: process.env.PASS,

    },
  },
});

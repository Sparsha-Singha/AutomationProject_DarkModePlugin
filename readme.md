Test Suite is created Using Visual Studio Code Tool

Getting Started:
1. Install cypress using command "npm install cypress --save-dev"
2. Install plugin dotenv using command "npm install dotenv --save"
3. Install plugin cypress-if using command "npm i -D cypress-if"
4. Install plugin cypress-xpath using command "npm install -D @cypress/xpath"
5. Download and open "AutomationProject_DarkModePlugin" folder in Cypress  environment
6. Create a .env file in the root of the project (outside of the cypress folder). This file will contain your username and password.
7. Modify your Cypress configuration file to load environment variables using dotenv as-
   const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      config.env.username = process.env.CYPRESS_USERNAME;
      config.env.password = process.env.CYPRESS_PASSWORD;
      return config;
    },
  },
};
8. use Cypress.env() to access the username and password in the test cases
9. Run comnand "npx cypress open" to view test

## Overview

![App Screenshot](https://github.com/Sparsha-Singha/AutomationProject_DarkModePlugin/blob/main/Image%20Gallery/Capture1.PNG)

## Graphs

![App Screenshot](https://github.com/Sparsha-Singha/AutomationProject_DarkModePlugin/blob/main/Image%20Gallery/Capture2.PNG)

![App Screenshot](https://github.com/Sparsha-Singha/AutomationProject_DarkModePlugin/blob/main/Image%20Gallery/Capture3.PNG)

![App Screenshot](https://github.com/Sparsha-Singha/AutomationProject_DarkModePlugin/blob/main/Image%20Gallery/Capture4.PNG)

## Tests

![App Screenshot](https://github.com/Sparsha-Singha/AutomationProject_DarkModePlugin/blob/main/Image%20Gallery/Capture5.PNG)

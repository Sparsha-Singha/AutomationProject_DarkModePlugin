# 🌙 Automation Project: Dark Mode Plugin Tester
This Cypress-based automation project is built to test **dark mode plugin functionalities** of the 'WP Dark Mode' plugin by 'WPPOOL'. It ensures UI consistency, accessibility, and toggle behavior for light and dark modes.

## Overview

![App Screenshot](https://github.com/Sparsha-Singha/AutomationProject_DarkModePlugin/blob/main/Image%20Gallery/Capture1.PNG)

## Graphs

![App Screenshot](https://github.com/Sparsha-Singha/AutomationProject_DarkModePlugin/blob/main/Image%20Gallery/Capture2.PNG)

![App Screenshot](https://github.com/Sparsha-Singha/AutomationProject_DarkModePlugin/blob/main/Image%20Gallery/Capture3.PNG)

![App Screenshot](https://github.com/Sparsha-Singha/AutomationProject_DarkModePlugin/blob/main/Image%20Gallery/Capture4.PNG)

## Tests

![App Screenshot](https://github.com/Sparsha-Singha/AutomationProject_DarkModePlugin/blob/main/Image%20Gallery/Capture5.PNG)

---
## 📌 Features

- 🔄 Toggle detection between light and dark themes
- 🎨 UI validation in both modes
- 🧪 Visual regression checks (via screenshots or DOM checks)
- 🧰 Easily configurable through `.env` file

---
## ⚙️ Setup Instructions

1. 📥 Install Cypress  
   `npm install cypress --save-dev`

2. 🌱 Install dotenv  
   `npm install dotenv --save`

3. 🔄 Install cypress-if  
   `npm i -D cypress-if`

4. 🔍 Install cypress-xpath  
   `npm install -D @cypress/xpath`

5. 📂 Open the `AutomationProject_DarkModePlugin` folder in Cypress

6. 📝 Create a `.env` file in the project root  
   Add your credentials: 
    * `CYPRESS_USERNAME='User Name'`
    * `CYPRESS_PASSWORD='password'` 

7. ⚙️ Load env in `cypress.config.js`:
```js
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
```

8. 🔐 Use `Cypress.env()` in test cases to access credentials  
   `npm install -D @cypress/xpath`

9. ▶️ Run the tests `npx cypress open`

  


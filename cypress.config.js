const addCucumberPreprocessorPlugin =require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
// import cypress from "cypress";
const { defineConfig } =require("cypress");
const createEsbuildPlugin =require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;


module.exports = defineConfig({
  projectId: "cpvu5h",
  reporter:'cypress-mochawesome-reporter',
  video:true,
  reporterOptions: {
    "reportDir": "cypress/results",
    "charts":true,
    "overwrite": false,
    "html": true,
    "json": false
    
  },

  e2e: {
    
    async setupNodeEvents(on, config) {
      
     
      const bundler =createBundler({
        plugins:[createEsbuildPlugin(config)],
      });
      
      on("file:preprocessor",bundler);
      await addCucumberPreprocessorPlugin(on,config);
      require('cypress-mochawesome-reporter/plugin')(on); 
      return config;

      
    },

    "cypress-cucumber-preprocessor": {
      "stepDefinitions": "cypress/e2e/bdd-cucumber/step-defination/*.js",
      "filterSpecs": true,
      "omitFiltered": true,
      "json": {
        "enabled": true,
        "formatter": "cucumber-json-formatter",
        "output": "cypress/reports/json/cucumber-report.json"
     }
    },

    // setupNodeEvents(on, config) {
    //   screenshotonRunfailure=true;
    //  require('cypress-mochawesome-reporter/plugin')(on);  
    // },

    specPattern:"cypress/e2e/features/*.feature",
    
  },
});

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  require('cypress-mochawesome-reporter/plugin')(on);
  return config;
}

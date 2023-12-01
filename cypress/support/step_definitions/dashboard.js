import { Then } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-mochawesome-reporter/register';
import FMS_Home from "../../pages/FMS_Home";


Then('enter required details and view Dashboard', function() {
    //  cy.visit("https://fmsqa.goddardschool.com/login.aspx");
    const fmsHome= new FMS_Home();
    fmsHome.navigateDashboard("08/2023","11/2023");
    cy.log("Navigated to dashboard");
});
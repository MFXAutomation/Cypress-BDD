import { Given } from "@badeball/cypress-cucumber-preprocessor";
// const loginPage =require("../../pages/LoginPage");
import FMS_Login from "../../pages/FMS_Login";
import 'cypress-mochawesome-reporter/register';
import 'cypress-xpath';
/// <reference types="cypress-xpath"/>

Given('launch the URL', function() {
    cy.visit("https://fmsqa.goddardschool.com/login.aspx");
    // return "pending";
});

Given('enter the credentials', function() {
   const login=new FMS_Login();
   login.setUserName("vkumar@goddardsystems.com");
   login.setPassword("Testing.2");
   login.clickSubmit();
});

Then('enter required details and view Dashboard', function() {
    //  cy.visit("https://fmsqa.goddardschool.com/login.aspx");
    const fmsHome= new FMS_Home();
    fmsHome.navigateDashboard("08/2023","11/2023");
    cy.log("Navigated to dashboard");
});
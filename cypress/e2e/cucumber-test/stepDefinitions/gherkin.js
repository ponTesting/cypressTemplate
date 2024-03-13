import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { login } from '@pages/login.Page';
//
//
//
Given('User visit SwagLabs page', () => {
  cy.visit('https://www.saucedemo.com/');
});
When(
  'The user enters username as {string} and passsword as {string}',
  (username, password) => {
    login.enterUsername(username);
    login.enterPassword(password);
  }
);
When('clicks on login button', () => {
  login.submitLogin();
});
Then('it will enter to the home page', () => {
  cy.url().should('include', 'inventory');
});
Then('The error message {string} is displayed', (errorMessage) => {
  login.get.errorMessage().should('have.text', errorMessage);
});
//
//
//
//
// This piece of code avoids XHR/Fetch request to displays on test runner and make it cleaner
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
const origLog = Cypress.log;
Cypress.log = function (opts, ...other) {
  if (
    opts.displayName === 'xhr' ||
    (opts.displayName === 'fetch' && opts.url.startsWith('https://'))
  ) {
    return;
  }
  return origLog(opts, ...other);
};

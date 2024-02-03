import { Before } from '@badeball/cypress-cucumber-preprocessor';

Before(() => {
  Cypress.on('uncaught:exception', () => {
    // returning false here prevents Cypress from failing the test
    return false;
  });
});

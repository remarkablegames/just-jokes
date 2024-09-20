import { When } from '@badeball/cypress-cucumber-preprocessor';
import { When_I_visit_URL } from 'cypress-cucumber-steps';

function When_I_load_joke_id(jokeId: string) {
  cy.url().then((url) => {
    When_I_visit_URL(`${url}&joke_id=${jokeId}`);

    cy.on('window:confirm', (text) => {
      expect(text).to.contains('Reload site?');
    });
  });
}

When('I load joke id {string}', When_I_load_joke_id);

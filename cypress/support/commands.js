// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { faker } from '@faker-js/faker'

const fakerEmail = faker.internet.email();


Cypress.Commands.add('registerFunction', () =>{

    cy.request({
        method: 'POST',
        url: 'https://gallery-api.vivifyideas.com/api/auth/register',
        body: {
            email: fakerEmail,
            first_name: "Dzon",
            last_name: "Lok",
            password: "12345678",
            password_confirmation: "12345678",
            terms_and_conditions: true
        }
    }).its('body').then((response) => {
        cy.log(response);
        const token = response.access_token;
        expect(token).to.be.a('string')
        const userId = response.user_id;
        expect(userId).to.be.a('number');
    })

})

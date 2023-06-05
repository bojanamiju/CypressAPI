/// <reference types='cypress'/>

import { faker } from '../../node_modules/@faker-js/faker';

const fakerEmail = faker.internet.email();

describe('Register user via API', () => {

    beforeEach(() => {
        cy.visit('register');
    })

    it('Register user with valid inputs', () => {
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

    it('Register user with empty first name', () => {
        cy.request({
            method: 'POST',
            url: 'https://gallery-api.vivifyideas.com/api/auth/register',
            body: {
                email: fakerEmail,
                first_name: "",
                last_name: "Lok",
                password: "12345678",
                password_confirmation: "12345678",
                terms_and_conditions: true
            }
        }).its('body').then((response) => {
            cy.log(response);
            const token = response.access_token;
            expect(token).to.be.a('undefined')
            const userId = response.user_id;
            expect(userId).to.be.a('undefined');
        })

    })

    it('Register user with empty last name', () => {
        cy.request({
            method: 'POST',
            url: 'https://gallery-api.vivifyideas.com/api/auth/register',
            body: {
                email: fakerEmail,
                first_name: "Dzon",
                last_name: "",
                password: "12345678",
                password_confirmation: "12345678",
                terms_and_conditions: true
            }
        }).its('body').then((response) => {
            cy.log(response);
            const token = response.access_token;
            expect(token).to.be.a('undefined')
            const userId = response.user_id;
            expect(userId).to.be.a('undefined');
        })

    })

    it('Register user with wrong confirmation pass', () => {
        cy.request({
            method: 'POST',
            url: 'https://gallery-api.vivifyideas.com/api/auth/register',
            body: {
                email: fakerEmail,
                first_name: "Dzon",
                last_name: "Lok",
                password: "12345678",
                password_confirmation: "123456789",
                terms_and_conditions: true
            }
        }).its('status').should('equal', 422);


    })

    it('Register user with wrong confirmation pass', () => {
        cy.request({
            method: 'POST',
            url: 'https://gallery-api.vivifyideas.com/api/auth/register',
            body: {
                email: fakerEmail,
                first_name: "Dzon",
                last_name: "Lok",
                password: "12345678",
                password_confirmation: "123456789",
                terms_and_conditions: true
            }
        }).its('status').should('equal', 422);

    })

    it('Register user with wrong confirmation pass', () => {
        cy.request({
            method: 'POST',
            url: 'https://gallery-api.vivifyideas.com/api/auth/register',
            body: {
                email: fakerEmail,
                first_name: "Dzon",
                last_name: "Lok",
                password: "12345678",
                password_confirmation: "123456789",
                terms_and_conditions: true
            }
        }).its('body').then((response)  => {
            cy.log(response);
            const token = response.access_token;
            expect(token).to.be.a('undefined')

        })

    })
    
    it('Register with functiongi', () => {
        cy.registerFunction()

    })  

});
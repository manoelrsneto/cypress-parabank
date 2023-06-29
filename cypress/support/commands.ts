/// <reference types="cypress" />

import { randomData } from './scripts/randomData';

Cypress.Commands.add('login', () => {
    cy.get('[name="username"]').type(Cypress.env('testAccount').CYPRESS_USERNAME);
    cy.get('[name="password"]').type(Cypress.env('testAccount').CYPRESS_PASSWORD);
    cy.contains('input', 'Log In').click();
});

Cypress.Commands.add('fillRegistrationForm', () => {
    cy.get('[name="customer.firstName"]').type(randomData.firstName);
    cy.get('[name="customer.lastName"]').type(randomData.lastName);
    cy.get('[name="customer.address.street"]').type(randomData.address);
    cy.get('[name="customer.address.city"]').type(randomData.city);
    cy.get('[name="customer.address.state"]').type(randomData.state);
    cy.get('[name="customer.address.zipCode"]').type(randomData.zipCode);
    cy.get('[name="customer.phoneNumber"]').type(randomData.phoneNumber);
    cy.get('[name="customer.ssn"]').type(randomData.ssn);
    cy.get('[name="customer.username"]').type(randomData.username);
    cy.get('[name="customer.password"]').type(randomData.password);
    cy.get('[name="repeatedPassword"]').type(randomData.password);
});

Cypress.Commands.add('validateEmptyFields', () => {
    cy.contains('span', 'First name is required.').should('be.visible');
    cy.contains('span', 'Last name is required.').should('be.visible');
    cy.contains('span', 'Address is required.').should('be.visible');
    cy.contains('span', 'City is required.').should('be.visible');
    cy.contains('span', 'State is required.').should('be.visible');
    cy.contains('span', 'Zip Code is required.').should('be.visible');
    cy.contains('span', 'Social Security Number is required.').should('be.visible');
    cy.contains('span', 'Username is required.').should('be.visible');
    cy.contains('span', 'Password is required.').should('be.visible');
    cy.contains('span', 'Password confirmation is required.').should('be.visible');
});

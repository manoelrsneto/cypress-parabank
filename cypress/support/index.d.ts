/// <reference types="cypress" />

export {};
declare global {
    namespace Cypress {
        interface Chainable {
            fillRegistrationForm(): Chainable<void>;
            login(): Chainable<void>;
            validateEmptyFields(): Chainable<void>;
        }
    }
}

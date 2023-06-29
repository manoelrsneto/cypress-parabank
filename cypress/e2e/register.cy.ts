describe('Registration Suite', () => {
    it('Should Register with success', { tags: 'sanity' }, () => {
        cy.visit('/');
        cy.contains('a', 'Register').click();
        cy.url().should('include', '/register');
        cy.fillRegistrationForm();
        cy.contains('input', 'Register').click();
        cy.contains('p', 'Your account was created successfully. You are now logged in.').should(
            'be.visible'
        );
    });

    it('Should show an error message when register with empty form', { tags: 'error' }, () => {
        cy.visit('/');
        cy.contains('a', 'Register').click();
        cy.url().should('include', '/register');
        cy.contains('input', 'Register').click();
        cy.validateEmptyFields();
    });
});

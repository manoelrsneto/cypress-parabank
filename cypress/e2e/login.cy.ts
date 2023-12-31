describe('Login Suite', () => {
    it('Should login with success', { tags: 'sanity' }, () => {
        cy.visit('/');
        cy.login();
        cy.get('.smallText').should('be.visible');
    });

    it(
        'Should show an error message when login with invalid credentials',
        { tags: 'error' },
        () => {
            cy.visit('/');
            cy.get('[name="username"]').type('invalidUsername');
            cy.get('[name="password"]').type('invalidPassword');
            cy.contains('input', 'Log In').click();
            cy.get('.error').should('be.visible');
        }
    );

    it('Should show an error message when login with empty credentials', { tags: 'error' }, () => {
        cy.visit('/');
        cy.contains('input', 'Log In').click();
        cy.get('.error').should('be.visible');
    });
});

describe('App initialization', () => {
    it('Loads todos on page load', () => {
      cy.visit('http://localhost:3000');
      // cy.pause();
      cy.get('.todos')
        .should('exist')
        .and('have.length', 4);
    });
    it('Should be focused on new todo input', () => {
      cy.visit('http://localhost:3000');
      cy.focused().should('exist');
    });
  });
describe('Visit a non-existing route', () => {
  it('should render the not found page', () => {
    cy.visit('/non-existing-route');
    cy.get('[data-testid="not-found-title"]').should('exist');
    cy.get('[data-testid="not-found-button"]').should('exist');
    cy.get('a').should('have.attr', 'href', '/');
  });

  it('should redirect the user back to the login page after clicking the button when they are not logged in', () => {
    const mockNonExistingRoute = '/non-existing-route';
    cy.visit('/non-existing-route');
    cy.get('a').should('have.attr', 'href', '/').click();
    cy.location('pathname').should('eq', '/login');
    cy.location('pathname').should('not.eq', mockNonExistingRoute);
  });

  it('should redirect the user back to the home page after clicking the button when they are logged in', () => {
    const mockNonExistingRoute = '/non-existing-route';
    cy.fixture('login-success-response').then((loginSuccessResponse) => {
      cy.intercept('POST', 'login', loginSuccessResponse);
    });
    cy.visit('/login');
    cy.get('[data-testid="log-in-username-input"]').type('correctUsername');
    cy.get('[data-testid="log-in-content-password-input"]').type(
      'correctPassword',
    );
    cy.get('[data-testid="log-in-content-submit-button"]').click();
    cy.url().should('not.contain', '/login');

    cy.visit('/non-existing-route');
    cy.get('a').should('have.attr', 'href', '/').click();
    cy.location('pathname').should('not.eq', '/login');
    cy.location('pathname').should('not.eq', mockNonExistingRoute);
    cy.location('pathname').should('eq', '/');
  });
});

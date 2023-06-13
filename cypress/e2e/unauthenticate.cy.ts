describe('Visit the website without login', () => {
  it('should be redirected to login page when visiting homepage without login', () => {
    cy.visit('/');
    cy.url().should('contain', '/login');
  });
});

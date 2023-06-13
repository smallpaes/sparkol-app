import localStorageKeys from '../../src/constants/localStorageKeys';

describe('Log out from the application', () => {
  beforeEach(() => {
    cy.fixture('login-success-response').then((loginSuccessResponse) => {
      cy.intercept('POST', 'login', loginSuccessResponse).as('loginRequest');
    });
    cy.visit('/login');
    cy.get('[data-testid="log-in-username-input"]').type('correctUsername');
    cy.get('[data-testid="log-in-content-password-input"]').type(
      'correctPassword',
    );
    cy.get('[data-testid="log-in-content-submit-button"]').click();
    cy.location('pathname').should('eq', '/');
  });

  it('should be able to logout from the application on homepage', () => {
    cy.get('[data-testid="home-page-button"]').click();
    cy.url().should('contain', '/login');
    cy.location('pathname').should('not.eq', '/');
  });

  it('should remove the user from local storage', () => {
    cy.get('[data-testid="home-page-button"]').click();
    cy.url().should('contain', '/login');
    cy.window().then((window) => {
      const user = window.localStorage.getItem(localStorageKeys.USER);
      expect(user).to.not.exist;
    });
  });

  it('should remove the token from local storage', () => {
    cy.get('[data-testid="home-page-button"]').click();
    cy.url().should('contain', '/login');
    cy.window().then((window) => {
      const token = window.localStorage.getItem(localStorageKeys.TOKEN);
      expect(token).to.not.exist;
    });
  });
});

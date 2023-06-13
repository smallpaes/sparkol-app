import localStorageKeys from '../../src/constants/localStorageKeys';

describe('Log in to the application', () => {
  beforeEach(() => {
    cy.fixture('login-success-response').as('loginSuccessResponse');
    cy.fixture('login-failed-response').as('loginFailedResponse');
    cy.visit('/login');
  });

  it('should render the login form', () => {
    cy.get('[data-testid="form"]').should('exist');
  });

  it('should call api after form submit', () => {
    cy.fixture('login-success-response').then((loginSuccessResponse) => {
      cy.intercept('POST', 'login', loginSuccessResponse).as('loginRequest');
    });
    cy.get('[data-testid="username-input"]').type('correctUsername');
    cy.get('[data-testid="password-input"]').type('correctPassword');
    cy.get('[data-testid="submit-button"]').click();
    cy.wait('@loginRequest');
  });

  it('should be able to login with valid username and password', () => {
    cy.fixture('login-success-response').then((loginSuccessResponse) => {
      cy.intercept('POST', 'login', loginSuccessResponse);
    });
    cy.get('[data-testid="username-input"]').type('correctUsername');
    cy.get('[data-testid="password-input"]').type('correctPassword');
    cy.get('[data-testid="submit-button"]').click();
    cy.url().should('not.contain', '/login');
    cy.location('pathname').should('eq', '/');
    cy.get('[data-testid="title"]').should('contain', 'Welcome');
  });

  it('should not be able to login with empty username and password', () => {
    cy.fixture('login-success-response').then((loginSuccessResponse) => {
      cy.intercept('POST', 'login', loginSuccessResponse);
    });
    cy.get('[data-testid="submit-button"]').click();
    cy.url().should('contain', '/login');
    cy.location('pathname').should('not.eq', '/');
  });

  it('should set the user in local storage', () => {
    cy.fixture('login-success-response').then((loginSuccessResponse) => {
      cy.intercept('POST', 'login', loginSuccessResponse);
    });
    cy.get('[data-testid="username-input"]').type('correctUsername');
    cy.get('[data-testid="password-input"]').type('correctPassword');
    cy.get('[data-testid="submit-button"]').click();
    cy.location('pathname').should('eq', '/');
    cy.window().then((window) => {
      const user = window.localStorage.getItem(localStorageKeys.USER);
      expect(user).to.exist;
      cy.get('@loginSuccessResponse')
        .its('body')
        .its('user')
        .then((responseUser) => {
          expect(responseUser).to.deep.equal(JSON.parse(user));
        });
    });
  });

  it('should set the token in local storage', () => {
    cy.fixture('login-success-response').then((loginSuccessResponse) => {
      cy.intercept('POST', 'login', loginSuccessResponse);
    });
    cy.get('[data-testid="username-input"]').type('correctUsername');
    cy.get('[data-testid="password-input"]').type('correctPassword');
    cy.get('[data-testid="submit-button"]').click();
    cy.location('pathname').should('eq', '/');
    cy.window().then((window) => {
      const token = window.localStorage.getItem(localStorageKeys.TOKEN);
      expect(token).to.exist;
      cy.get('@loginSuccessResponse')
        .its('body')
        .its('token')
        .then((responseToken) => {
          expect(responseToken).to.equal(JSON.parse(token));
        });
    });
  });

  it('should show a warning message when logging in with invalid username and password', () => {
    cy.fixture('login-failed-response').then((loginFailedResponse) => {
      cy.intercept('POST', 'login', loginFailedResponse);
    });
    cy.get('[data-testid="username-input"]').type('wrongUsername');
    cy.get('[data-testid="password-input"]').type('wrongPassword');
    cy.get('[data-testid="submit-button"]').click();
    cy.url().should('contain', '/login');
    cy.location('pathname').should('not.eq', '/');
    cy.get('[data-testid="warning-message"]').should('exist');
    cy.get('[data-testid="warning-message"]').as('warningMessage');
    cy.get('@loginFailedResponse')
      .its('body')
      .then((responseBody) => {
        cy.get('@warningMessage').should('contain', responseBody);
      });
  });

  it('should show a hint message when username is empty', () => {
    cy.get('[data-testid="username-input"]').click();
    cy.get('[data-testid="username-input"]').blur();
    cy.get('[data-testid="message"]').should('exist');
  });

  it('should show a hint message when password is empty', () => {
    cy.get('[data-testid="password-input"]').click();
    cy.get('[data-testid="password-input"]').blur();
    cy.get('[data-testid="message"]').should('exist');
  });
});

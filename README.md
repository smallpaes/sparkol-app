<h3 align="center">
Sparkol App</h3>

<p align="center">
  An user-facing web application and is currently supporting basic authentication features
  <br>

  <br>
  <a href="https://github.com/smallpaes/sparkol-app/actions/workflows/main.yml" rel="End-to-end testing status page"><img src="https://github.com/smallpaes/sparkol-app/actions/workflows/main.yml/badge.svg?branch=main" alt="End-to-end testing status on main branch"></a>
  <a href="https://github.com/smallpaes/sparkol-app/actions/workflows/unit-testing.yml" rel="Unit testing and building status page"><img src="https://github.com/smallpaes/sparkol-app/actions/workflows/unit-testing.yml/badge.svg?branch=main" alt="Unit testing and building status on main branch"></a>
  <a href="https://cloud.cypress.io/projects/d8jmn7/runs" rel="End-to-end testing status page on Cypress cloud"><img src="https://img.shields.io/endpoint?url=https://cloud.cypress.io/badge/detailed/d8jmn7&style=flat&logo=cypress" alt="End-to-end testing status on main branch for Cypress cloud"></a>
</p>

## Table of contents

- [Table of contents](#table-of-contents)
- [App first look](#app-first-look)
  - [Login Page](#login-page)
    - [Initial state](#initial-state)
    - [Display hint message](#display-hint-message)
    - [Display error message](#display-error-message)
  - [Home Page After Login](#home-page-after-login)
- [About the project](#about-the-project)
  - [Tools \& API used for the application](#tools--api-used-for-the-application)
- [What are included in detail](#what-are-included-in-detail)
  - [Sign In Page](#sign-in-page)
  - [Home page](#home-page)
  - [Others](#others)
- [Run the app locally](#run-the-app-locally)
  - [Prerequisites](#prerequisites)
  - [Clone the project](#clone-the-project)
  - [Setup the App](#setup-the-app)
  - [Other scripts](#other-scripts)
- [Testing](#testing)
  - [Unit testing Strategy](#unit-testing-strategy)
  - [E2E testing strategy](#e2e-testing-strategy)

## App first look

#### Login Page

##### Initial state

<div style="width:100%">
  <img src="https://ik.imagekit.io/mikank/GitHub/login-pure?updatedAt=1686606247550" alt="Login page screenshot" style="width:100%">
</div>

##### Display hint message

<div style="width:100%">
  <img src="https://ik.imagekit.io/mikank/GitHub/login-invalid?updatedAt=1686606247500" alt="Login page with hint message below invalid field screenshot" style="width:100%">
</div>

##### Display error message

<div style="width:100%">
  <img src="https://ik.imagekit.io/mikank/GitHub/login-reject?updatedAt=1686606247488" alt="Login page with invalid message displayed on top of the form screenshot" style="width:100%">
</div>

#### Home Page After Login

<div style="width:100%">
  <img src="https://ik.imagekit.io/mikank/GitHub/screencapture-localhost-5173-2023-06-12-22_40_29.png?updatedAt=1686606098642" alt="Home page screenshot" style="width:100%">
</div>

## About the project

Sparkol app is a user-facing web application, current support the following features:

- User can logs in to the application on the login page.
- User can explore the homepage, a protected route, after logged in to see a greeting message.
- User can sign out from the application on the homepage after logged in.

### Tools & API used for the application

- [React](https://react.dev/): For building user interfaces.
- [React Router](https://reacttraining.com/react-router/): For routing in React.
- [TypeScript](https://www.typescriptlang.org/): For static type checking.
- [Vite](https://vitejs.dev/): Used as a local development server and build tool.
- [styled-components](https://styled-components.com/): For writing CSS in JS in React.
- [ESLint](https://eslint.org/): For code linting.
- [Prettier](https://prettier.io/): For code formatting.
- [axios](https://axios-http.com/): For making HTTP requests.
- [Vitest](https://vitest.dev/): For unit testing.
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/): For testing React components.
- [Happy Dom](https://github.com/capricorn86/happy-dom): Used as a JavaScript implementation of a web browser for testing.
- [Sparkol Authentication Service](https://github.com/Sparkol/interview-authentication-service/blob/master/src/app.js): For user authentication.

## What are included in detail

#### Sign In Page

- Login with username and password
- Form validation:
  - Username and password are required
  - Display a hint message below the input filed when username or password is invalid
- Display an error message on top of the form when login failed
- Redirect the user to the home page after login successfully

#### Home page

- Display a greeting message with the username
- Show a logout button:
  - Log out current user and redirect them to the login page after clicking the button
- Persist user login status:
  - Login status will be persisted after refreshing the page
  - Redirect the user to the login page if the data is missing in the local storage

#### Others

- Redirect the user to the login page if subsequent requests to protected API routes are failed due to unauthorized access

## Run the app locally

The following instructions will go through the setting needed to run the front-end app on your local machine.

### Prerequisites

- [npm v9.2.0](https://www.npmjs.com/get-npm)
- [Node.js v18.12.1](https://nodejs.org/en/download/)

### Clone the project

```
git clone https://github.com/smallpaes/sparkol-app.git
```

### Setup the App

**1. Enter the project folder**

> Open a new terminal and enter the folder

```
$ cd sparkol-app
```

**2. Install packages via npm**

```
$ npm install
```

**3. Create .env file**

```
$ touch .env
```

**4. Added env variables**

```
VITE_API_BASE_URL=
```

**5. Run the app for development**

```
$ npm run dev
```

### Other scripts

**1. Code linting**

```
$ npm run lint
```

**2. Code formatting**

```
$ npm run format
```

**3. Unit testing (Either one)**

```
$ npm run test
$ npm t
```

**4. Test coverage report generation for unit testing**

```
$ npm run test:coverage
```

> View the report in the browser:

```
$ open ./coverage/index.html
```

**5. E2E testing using Cypress**

> Start the server:

```
$ npm run dev
```

> Run the test using Cypress:

```
$ npm run cy:open
```

**6. E2E testing headlessly with recording**

```
$ npm run cy:run
```

## Testing

#### Unit testing Strategy

1. Focused on small functionalities that could be used in one or more components first: Tested custom hooks and helper functions.
2. Tested the components: UI and user interactions.
3. Generated a coverage report to check the test coverage:

<div style="width:100%">
  <img src="https://ik.imagekit.io/mikank/GitHub/test-coverage?updatedAt=1686664903316" alt="Test coverage report" style="width:100%">
</div>

#### E2E testing strategy

1. Tested the login flow: Made sure the user can log in to the application successfully and be redirected to the home page.
2. Tested the login functionalities: Handled different scenario on the login page.
3. Tested the logout flow: Made sure the user can log out from the application successfully on the home page.
4. Tested route protection: Made sure the user can't access the home page without logging in and will be redirected to the login page.
5. Generated the testing report:

<div style="width:100%">
  <img src="https://ik.imagekit.io/mikank/GitHub/cypress-report?updatedAt=1686686801908" alt="Test coverage report" style="width:100%">
</div>

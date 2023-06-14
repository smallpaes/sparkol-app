<h3 align="center">Sparkol App</h3>

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
- [Project Overview](#project-overview)
  - [User stories](#user-stories)
  - [Features Detail](#features-detail)
    - [Sign In Page](#sign-in-page)
    - [Home page](#home-page)
    - [Others](#others)
  - [Tools \& API used for the application](#tools--api-used-for-the-application)
- [Run the app locally](#run-the-app-locally)
  - [Prerequisites](#prerequisites)
  - [Clone the project](#clone-the-project)
  - [Setup the App](#setup-the-app)
  - [Other scripts](#other-scripts)
- [Testing](#testing)
  - [Unit testing Strategy](#unit-testing-strategy)
  - [E2E testing strategy](#e2e-testing-strategy)
- [Continuous Integration (CI)](#continuous-integration-ci)
  - [Cypress End-to-End Testing (Local):](#cypress-end-to-end-testing-local)
  - [Cypress End-to-End Testing (Cloud)](#cypress-end-to-end-testing-cloud)
  - [Unit Testing and Build](#unit-testing-and-build)
  - [Other Information](#other-information)
- [Future Enhancements](#future-enhancements)
  - [Data fetching](#data-fetching)
  - [CSS code reusability](#css-code-reusability)
- [Challenges and Solutions](#challenges-and-solutions)
  - [Refactor the code for unit testing:](#refactor-the-code-for-unit-testing)
  - [End-to-End Testing with Cypress](#end-to-end-testing-with-cypress)
  - [Continuous Integration with GitHub Actions](#continuous-integration-with-github-actions)
  - [Making development process more efficient](#making-development-process-more-efficient)

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

## Project Overview

### User stories

Sparkol app is a user-facing web application with the following user stories implemented:

- User can logs in to the application on the login page.
- User can explore the homepage, a protected route, after logged in to see a greeting message.
- User can sign out from the application on the homepage after logged in.

### Features Detail

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
- [Cypress](https://www.cypress.io/): For end-to-end testing.
- [GitHub Actions](https://docs.github.com/en/actions): For continuous integration.
- [Sparkol Authentication Service](https://github.com/Sparkol/interview-authentication-service/blob/master/src/app.js): For user authentication.

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

## Continuous Integration (CI)

The project utilizes GitHub Actions as the primary tool for implementing a robust continuous integration (CI) process. The CI pipeline is triggered automatically whenever changes are pushed to the main branch, ensuring the reliability and quality of the application codebase. The CI process includes the following steps:

#### Cypress End-to-End Testing (Local):

- The CI pipeline executes the Cypress end-to-end testing to validate the application's behavior and interactions, ensuring its overall functionality and user experience.

#### Cypress End-to-End Testing (Cloud)

- The CI pipeline executes the Cypress end-to-end testing, which validate the application's functionality and user flows from a user's perspective.

- The test results are recorded and sent to Cypress Cloud, a testing platform that provides in-depth and shareable test reports.

- Cypress Cloud offers valuable features such as quick access to error messages, stack traces, screenshots, videos, and contextual details, facilitating efficient debugging and issue resolution.

#### Unit Testing and Build

- The CI process starts the build process to ensures that the codebase is in a deployable state and ready for further testing.

- After that, the pipeline proceeds to running unit testing that validates the functionality of individual components, functions, and custom hooks within the application.

#### Other Information

- Status badges on the README file to provide a quick overview of the CI pipeline's status:

<div style="width:100%">
  <img src="https://ik.imagekit.io/mikank/GitHub/CI-status-badges?updatedAt=1686732495326" alt="CI pipeline status badges" style="width:100%">
</div>

## Future Enhancements

Some potential improvements that could be made to the application to provide a better user experience and code maintainability across the team:

#### Data fetching

Might consider using TanStack Query for data fetching as it provides some benefits:

- Fetching state will be handled by the library.
- Automatic caching, refetching, and updating of data--Could be useful if there are other APIs that need to be integrated into the application in the future.

#### CSS code reusability

Creates more mixins using styled-components, allowing the CSS code to be reused across the application.

## Challenges and Solutions

During the development of this project, there are some challenges that allowed me to learn and implement new technologies and practices. Here are some of them and how I addressed them:

#### Refactor the code for unit testing:

One of the challenges I encountered was ensuring the reliability and stability of the codebase. To overcome this, I adopted a unit testing approach using Vitest and React Testing Library. This process allows me think about how I should structure and refactor my components, functions, custom hooks for easier testing.

#### End-to-End Testing with Cypress

To ensure end-to-end functionality and simulate real-world user interactions, I integrated Cypress into the project for comprehensive end-to-end testing. Cypress allowed me to write tests that cover multiple components, interactions, and API integrations. The process allowed me to think about the use case from the users' perspective and ensure the application's overall functionality and user experience.

As the backend server should be run locally at this moment before the frontend application could call the API, I tried to mock the API response in Cypress to make sure the frontend functionalities could work properly without having to integrate with the real API.

#### Continuous Integration with GitHub Actions

As part of the development process, I wanted to automate CI process to ensure consistent quality and reliability, therefore, I integrated GitHub Actions into the project, which provided a robust and flexible CI solution.

#### Making development process more efficient

To make the development process more efficient among the team, I created or used:

- Common theme and basic mixins using styled-components.
- ESLint and Prettier for code linting and formatting.
- Github pull request template to make sure the PRs are following the same format and contain the necessary information.
- CI pipeline to ensure the codebase is in a deployable state and passed the necessary testing.

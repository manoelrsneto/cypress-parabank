<h1 align="center">Cypress Parabank</h1>

This is a sample project that demonstrates how to use Cypress to test a web application called Parabank. The project is written in JavaScript and TypeScript and uses npm to manage dependencies.

## Getting Started

To get started, clone the repository and install the dependencies:

```sh
git clone https://github.com/your-username/cypress-parabank.git
cd cypress-parabank
npm install
```

Once the dependencies are installed, you should copy the .env.example file and fill each one of the environment variables with your own data

After the environment variables are filled, you can run the tests using the following command:

```sh
npm run e2e
```

This will launch Cypress and run the tests in the Chrome browser.

## Important information

This project uses the following tools to ensure quality standards:

-   [ESLint](https://github.com/eslint/eslint): With cypress [plugin](https://github.com/cypress-io/eslint-plugin-cypress)
-   [Prettier](https://github.com/prettier/prettier)
-   [Editor Config](https://github.com/editorconfig)
-   [Husky](https://github.com/typicode/husky): With pre-commit hooks for prettier, eslint and [stop-only](https://github.com/bahmutov/stop-only) and also commit-msg hook with [commitlint](https://github.com/conventional-changelog/commitlint).

And also uses [faker.js](https://fakerjs.dev/) to generate random data for tests.

## Actions

It's possible to run the project tests with the [e2e](https://github.com/manoelrsneto/cypress-parabank/actions/workflows/e2e.yml) action with the possibility to also choose the browser to run the tests: Just click on run workflow button.

## Cypress Dashboard

This project integrates with Cypress Cloud, you can access the dashboard on [this](https://cloud.cypress.io/projects/ffch5k/runs) link.

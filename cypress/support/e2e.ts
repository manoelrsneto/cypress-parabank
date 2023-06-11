// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// In order to use the Cypress Grep plugin, you need to use ts-ignore
// For more information see: https://github.com/cypress-io/cypress/tree/develop/npm/grep#support-file
// @ts-ignore
import registerCypressGrep from '@cypress/grep';
registerCypressGrep();

// Alternatively you can use CommonJS syntax:
// require('./commands')

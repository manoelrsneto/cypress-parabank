import { defineConfig } from 'cypress';
import 'dotenv/config';
// @ts-ignore
import cypressGrepPlugin from '@cypress/grep/src/plugin';

export default defineConfig({
    e2e: {
        baseUrl: 'https://parabank.parasoft.com/',
        projectId: process.env.CYPRESS_PROJECT_ID,
        env: {
            testAccount: {
                CYPRESS_USERNAME: process.env.CYPRESS_USERNAME,
                CYPRESS_PASSWORD: process.env.CYPRESS_PASSWORD,
            },
        },
        setupNodeEvents(on, config) {
            cypressGrepPlugin(config);
            return config;
        },
    },
});

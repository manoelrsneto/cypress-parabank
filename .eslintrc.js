/* eslint-env node */
module.exports = {
    extends: [
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:cypress/recommended',
    ],
    env: {
        'cypress/globals': true,
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'cypress', 'prettier'],
    root: true,
    rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
    },
};

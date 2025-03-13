import globals from 'globals';

/**
 * @returns {import('eslint').Linter.Config}
 */
export default [
    {
        files: ['**/*.{js,mjs,mts,cjs,cts}'],
        languageOptions: {
            globals: globals.browser,
        },
    },
];

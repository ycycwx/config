import globals from 'globals';

/**
 * @returns {import('typescript-eslint').ConfigArray}
 */
export default [
    {
        files: ['**/*.{js,mjs,mts,cjs,cts}'],
        languageOptions: {
            globals: globals.browser,
        },
    },
];

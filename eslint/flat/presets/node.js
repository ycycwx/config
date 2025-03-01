const globals = require('globals');

/**
 * @returns {import('typescript-eslint').ConfigArray}
 */
module.exports = [
    {
        files: ['**/*.{js,mjs,mts,cjs,cts}'],
        languageOptions: {
            globals: globals.node,
        },
    },
];

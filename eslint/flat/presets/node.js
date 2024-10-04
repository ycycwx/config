const globals = require('globals');

module.exports = [
    {
        files: ['**/*.{js,mjs,mts,cjs,cts}'],
        languageOptions: {
            globals: globals.node,
        },
    },
];

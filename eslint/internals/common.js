// See: https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-patch/modern-module-resolution');

const ECMA_VERSION = 2021;

module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:eslint-comments/recommended',
        require.resolve('./import'),
        require.resolve('./base'),
    ],
    env: {
        [`es${ECMA_VERSION}`]: true,
    },
    reportUnusedDisableDirectives: true,
    ignorePatterns: ['!.*.js'],
    settings: {
        'import/resolver': {node: {}},
    },
    parserOptions: {
        ecmaVersion: ECMA_VERSION,
        sourceType: 'module',
    },
    overrides: [
        {
            files: ['*.js?(x)', '*.mjs'],
            parser: '@babel/eslint-parser',
            parserOptions: {
                requireConfigFile: false,
            },
        },
    ],
};

const importPlugin = require('eslint-plugin-import');
const js = require('@eslint/js');
const stylistic = require('@stylistic/eslint-plugin');
const comments = require('@eslint-community/eslint-plugin-eslint-comments');
const baseRules = require('../internals/base').rules;
const importRules = require('../internals/import');
const stylisticRules = require('../internals/stylistic').rules;

/**
 * @returns {import('typescript-eslint').ConfigArray}
 */
module.exports = [
    {
        plugins: {
            import: importPlugin,
            '@eslint-community/eslint-comments': comments,
            '@stylistic': stylistic,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...importPlugin.flatConfigs.recommended.rules,
            ...baseRules,
            ...importRules.rules,
            ...comments.configs.recommended.rules,
            ...stylisticRules,
        },
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        linterOptions: {
            reportUnusedDisableDirectives: true,
        },
        ignores: ['!.*.js'],
    },
];

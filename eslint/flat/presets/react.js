const globals = require('globals');
const reactPlugin = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const importPlugin = require('eslint-plugin-import');
const reactRules = require('../../react').rules;

module.exports = [
    {
        files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
        settings: {
            ...importPlugin.flatConfigs.react.settings,
            react: {version: 'detect'},
        },
        languageOptions: {
            ...reactPlugin.configs.flat.recommended.languageOptions,
            ...importPlugin.flatConfigs.react.languageOptions,
            globals: {
                ...globals.browser,
            },
        },
        plugins: {
            ...reactPlugin.configs.flat.recommended.plugins,
            'react-hooks': reactHooks,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            ...reactRules,
        },
    },
];

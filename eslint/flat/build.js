const importPlugin = require('eslint-plugin-import');
const js = require('@eslint/js');
const stylistic = require('@stylistic/eslint-plugin');
const comments = require('@eslint-community/eslint-plugin-eslint-comments/configs');
const base = require('../internals/base');
const importRules = require('../internals/import');
const stylisticRules = require('../internals/stylistic').rules;
const node = require('./presets/node');
const browser = require('./presets/browser');
const react = require('./presets/react');
const typescript = require('./presets/typescript');

const presetsMap = {
    node,
    browser,
    react,
    typescript,
};

/**
 * @typedef {'node' | 'browser' | 'react' | 'typescript'} Preset
 */

/**
 * Create eslint flat config
 *
 * @param {Array<Preset> | Preset} presets
 * @param {{ tsconfigRootDir: string }} [config]
 */
module.exports = (presets, config) => [
    js.configs.recommended,
    base,
    importPlugin.flatConfigs.recommended,
    importRules,
    comments.recommended,
    {
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        linterOptions: {
            reportUnusedDisableDirectives: true,
        },
        settings: {
            'import/resolver': {node: {}},
        },
    },
    {
        plugins: {'@stylistic': stylistic},
        rules: stylisticRules,
    },
    {
        ignores: ['!.*.js'],
    },
    ...(Array.isArray(presets) ? presets : [presets]).flatMap(preset => {
        if (preset === 'typescript') {
            return presetsMap[preset]({tsconfigRootDir: config?.tsconfigRootDir});
        }
        return presetsMap[preset];
    }),
];

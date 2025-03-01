const base = require('./base');
const node = require('./presets/node');
const browser = require('./presets/browser');
const react = require('./presets/react');
const typescript = require('./presets/typescript');

/**
 * @typedef {'node' | 'browser' | 'react' | 'typescript'} Preset
 */

/**
 * Create eslint flat config
 *
 * @param {Array<Preset> | Preset | undefined} presets
 * @param {import('typescript-eslint').ConfigArray} extendedFlatConfigs
 * @returns {import('typescript-eslint').ConfigArray}
 */
module.exports = (presets, ...extendedFlatConfigs) => {
    /**
     * @type {Preset[]}
     */
    const resolvedPresets = Array.isArray(presets ?? []) ? presets : [presets];
    return [
        ...base,
        ...resolvedPresets.includes('typescript') ? typescript : [],
        ...resolvedPresets.includes('node') ? node : [],
        ...resolvedPresets.includes('browser') ? browser : [],
        ...resolvedPresets.includes('react') ? react : [],
        ...extendedFlatConfigs,
    ];
};

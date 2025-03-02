import base from './base.js';
import browser from './browser.js';
import node from './node.js';
import react from './react.js';
import typescript from './typescript.js';

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
export default (presets, ...extendedFlatConfigs) => {
    /**
     * @type {Preset[]}
     */
    const resolvedPresets = Array.isArray(presets ?? []) ? presets : [presets];
    return [
        ...base,
        ...resolvedPresets.includes('node') ? node : [],
        ...resolvedPresets.includes('browser') ? browser : [],
        ...resolvedPresets.includes('react') ? react : [],
        ...resolvedPresets.includes('typescript') ? typescript : [],
        ...extendedFlatConfigs,
    ];
};

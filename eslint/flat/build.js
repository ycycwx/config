const base = require('./base');
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
 * @deprecated use `flatConfigs.config` instead
 *
 * @param {Array<Preset> | Preset} presets
 * @param {{ tsconfigRootDir: string }} [config]
 */
module.exports = (presets, config) => [
    ...base,
    ...(Array.isArray(presets) ? presets : [presets]).flatMap(preset => {
        if (preset === 'typescript') {
            return presetsMap[preset]({tsconfigRootDir: config?.tsconfigRootDir});
        }
        return presetsMap[preset];
    }),
];

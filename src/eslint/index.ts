import {defineConfig} from 'eslint/config';
import base from './base.js';
import browser from './browser.js';
import node from './node.js';
import react from './react.js';
import typescript from './typescript.js';
import type {Linter} from 'eslint';

type Preset = 'node' | 'browser' | 'react' | 'typescript';

/**
 * Create eslint flat config
 */
export default (presets: Preset[] | Preset | undefined, ...configWithExtendsArray: Linter.Config[]) => {
    const resolvedPresets = (Array.isArray(presets ?? []) ? presets : [presets]) as Preset[];
    return defineConfig([
        ...base,
        ...(resolvedPresets.includes('node') ? node : []),
        ...(resolvedPresets.includes('browser') ? browser : []),
        ...(resolvedPresets.includes('react') ? react : []),
        ...(resolvedPresets.includes('typescript') ? (typescript) : []),
        ...configWithExtendsArray,
    ]);
};

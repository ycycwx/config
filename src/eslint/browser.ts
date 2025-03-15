import globals from 'globals';
import {defineConfig} from 'eslint/config';

export default defineConfig([
    {
        files: ['**/*.{js,mjs,mts,cjs,cts}'],
        languageOptions: {
            globals: globals.browser,
        },
    },
]);

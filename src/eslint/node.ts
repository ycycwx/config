import {defineConfig} from 'eslint/config';
import globals from 'globals';

export default defineConfig([
    {
        files: ['**/*.{js,mjs,mts,cjs,cts}'],
        languageOptions: {
            globals: globals.node,
        },
        settings: {
            'import/resolver': {
                node: {
                    extensions: ['.js', '.jsx', '.ts', '.tsx'],
                },
            },
        },
    },
]);

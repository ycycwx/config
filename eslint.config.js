import {globalIgnores} from 'eslint/config';
import config from './eslint/index.js';

export default config(
    ['node', 'typescript'],
    {
        languageOptions: {
            parserOptions: {
                projectService: {
                    allowDefaultProject: ['*.js'],
                },
                tsconfigRootDir: import.meta.dirname,
            },
        },
        settings: {
            'import/resolver': {
                typescript: {
                    project: import.meta.dirname,
                },
            },
        },
    },
    globalIgnores(['eslint/**/*'])
);

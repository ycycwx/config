const importPlugin = require('eslint-plugin-import');
const tseslint = require('typescript-eslint');
const tsRules = require('../../typescript').overrides.at(0).rules;

/**
 * @param {{ tsconfigRootDir: string }} config
 */
module.exports = config => [
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    {
        files: ['**/*.{ts,tsx,mtsx}'],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: config.tsconfigRootDir,
            },
        },
        settings: {
            ...importPlugin.flatConfigs.typescript.settings,
        },
        plugins: {
            '@typescript-eslint': tseslint.plugin,
        },
        rules: {
            ...importPlugin.flatConfigs.typescript.rules,
            ...tsRules,
        },
    },
    {
        files: ['**/*.{js,mjs,cjs,jsx,mjsx}'],
        ...tseslint.configs.disableTypeChecked,
    },
];

import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import {defineConfig} from 'eslint/config';

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
        plugins: {
            react: reactPlugin,
            'react-hooks': reactHooks,
        },
        settings: {
            ...importPlugin.flatConfigs.react.settings,
            react: {version: 'detect'},
        },
        languageOptions: {
            ...reactPlugin.configs.flat.recommended?.languageOptions,
            ...importPlugin.flatConfigs.react.languageOptions,
            globals: {
                ...globals.browser,
            },
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react/jsx-no-bind': ['off'],
            'react/jsx-uses-react': ['off'],
            'react/react-in-jsx-scope': ['off'],
            'react/default-props-match-prop-types': ['off'],
            'react/display-name': ['off'],
            'react/forbid-component-props': ['off'],
            'react/forbid-elements': ['off'],
            'react/forbid-foreign-prop-types': ['warn'],
            'react/forbid-prop-types': ['off'],
            'react/jsx-boolean-value': ['error', 'never'],
            'react/jsx-filename-extension': [
                'error',
                {
                    extensions: ['.js', '.jsx', '.es', '.tsx'],
                },
            ],
            'react/jsx-handler-names': [
                'off',
                {
                    eventHandlerPrefix: '.*',
                    eventHandlerPropPrefix: 'on',
                },
            ],
            'react/jsx-key': ['error'],
            'react/jsx-no-comment-textnodes': ['warn'],
            'react/jsx-no-duplicate-props': [
                'error',
                {
                    ignoreCase: true,
                },
            ],
            'react/jsx-no-literals': ['off'],
            'react/jsx-no-target-blank': ['error'],
            'react/jsx-no-undef': ['error'],
            'react/jsx-uses-vars': ['error'],
            'react/no-array-index-key': ['error'],
            'react/no-children-prop': ['error'],
            'react/no-danger-with-children': ['error'],
            'react/no-danger': ['warn'],
            'react/no-deprecated': ['warn'],
            'react/no-did-mount-set-state': ['off'],
            'react/no-did-update-set-state': ['off'],
            'react/no-will-update-set-state': ['error'],
            'react/no-direct-mutation-state': ['error'],
            'react/no-find-dom-node': ['warn'],
            'react/no-is-mounted': ['error'],
            'react/no-multi-comp': [
                'error',
                {
                    ignoreStateless: true,
                },
            ],
            'react/no-render-return-value': ['error'],
            'react/no-set-state': ['off'],
            'react/no-string-refs': ['error'],
            'react/no-unescaped-entities': ['error'],
            'react/no-unknown-property': ['error'],
            'react/no-unused-prop-types': ['off'],
            'react/prefer-es6-class': ['error', 'always'],
            'react/prefer-stateless-function': ['error'],
            'react/prop-types': ['off'],
            'react/require-default-props': ['off'],
            'react/require-optimization': ['off'],
            'react/require-render-return': ['error'],
            'react/self-closing-comp': [
                'error',
                {
                    component: true,
                    html: false,
                },
            ],
            'react/sort-prop-types': ['off'],
            'react/style-prop-object': ['error'],
            'react/void-dom-elements-no-children': ['error'],
            'react/sort-comp': [
                'off',
                {
                    order: [
                        'static-properties',
                        'static-methods',
                        'state',
                        'properties',
                        'lifecycle',
                        'everything-else',
                        'render',
                    ],
                    groups: {
                        'static-properties': [
                            'displayName',
                            'propTypes',
                            'contextTypes',
                            'childContextTypes',
                            'mixins',
                            'statics',
                        ],
                        lifecycle: [
                            'getDefaultProps',
                            'getInitialState',
                            'constructor',
                            'getChildContext',
                            'componentWillMount',
                            'componentDidMount',
                            'componentWillReceiveProps',
                            'shouldComponentUpdate',
                            'componentWillUpdate',
                            'componentDidUpdate',
                            'componentDidCatch',
                            'componentWillUnmount',
                        ],
                    },
                },
            ],
        },
    },
]);

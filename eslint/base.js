/* eslint-disable max-lines */

import importPlugin from 'eslint-plugin-import';
import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import comments from '@eslint-community/eslint-plugin-eslint-comments';

/**
 * @returns {import('eslint').Linter.Config}
 */
export default [
    {
        plugins: {
            import: importPlugin,
            '@eslint-community/eslint-comments': comments,
            '@stylistic': stylistic,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...importPlugin.flatConfigs.recommended.rules,
            ...comments.configs.recommended.rules,
            'no-redeclare': ['off'],
            'max-lines': [
                'warn',
                {
                    max: 300,
                    skipBlankLines: true,
                    skipComments: true,
                },
            ],
            'max-lines-per-function': [
                'warn',
                {
                    max: 100,
                    skipBlankLines: true,
                    skipComments: true,
                },
            ],
            'no-duplicate-imports': ['off'],
            'no-empty-function': [
                'off',
                {
                    allow: ['generatorFunctions', 'methods', 'generatorMethods', 'setters', 'asyncMethods'],
                },
            ],
            'no-unused-vars': ['off'],
            'init-declarations': ['off'],
            'no-undef': ['off'],
            'require-await': ['off'],
            'no-use-before-define': [
                'off',
                {
                    variables: false,
                    classes: false,
                    functions: true,
                },
            ],
            'no-dupe-class-members': ['off'],
            'no-useless-constructor': ['off'],
            'dot-notation': [
                'off',
                {
                    allowKeywords: true,
                    allowPattern: '',
                },
            ],
            'no-void': [
                'error',
                {
                    allowAsStatement: true,
                },
            ],
            'accessor-pairs': ['error'],
            'array-callback-return': ['error'],
            'arrow-body-style': ['off'],
            'block-scoped-var': ['warn'],
            'callback-return': ['off'],
            camelcase: ['error'],
            'capitalized-comments': ['off'],
            'class-methods-use-this': ['off'],
            complexity: ['warn', 10],
            'consistent-return': ['off'],
            'consistent-this': ['off'],
            'constructor-super': ['error'],
            curly: ['error', 'all'],
            'default-case': ['off'],
            eqeqeq: [
                'error',
                'always',
                {
                    null: 'ignore',
                },
            ],
            'for-direction': ['off'],
            'func-name-matching': ['off'],
            'func-names': ['warn', 'always'],
            'func-style': ['off'],
            'global-require': ['warn'],
            'guard-for-in': ['warn'],
            'handle-callback-err': ['off'],
            'id-blacklist': ['off'],
            'id-length': ['off'],
            'id-match': ['off'],
            'indent-legacy': ['off'],
            'max-depth': ['warn', 3],
            'max-nested-callbacks': ['off'],
            'max-params': ['off'],
            'max-statements': [
                'warn',
                30,
                {
                    ignoreTopLevelFunctions: true,
                },
            ],
            'new-cap': ['error'],
            'no-alert': ['warn'],
            'no-array-constructor': ['off'],
            'no-await-in-loop': ['off'],
            'no-bitwise': ['off'],
            'no-buffer-constructor': ['warn'],
            'no-caller': ['error'],
            'no-case-declarations': ['error'],
            'no-catch-shadow': ['off'],
            'no-class-assign': ['error'],
            'no-compare-neg-zero': ['error'],
            'no-cond-assign': ['error'],
            'no-console': [
                'error',
                {
                    allow: ['error', 'warn', 'info'],
                },
            ],
            'no-const-assign': ['error'],
            'no-constant-condition': ['error'],
            'no-continue': ['off'],
            'no-control-regex': ['error'],
            'no-debugger': ['error'],
            'no-delete-var': ['error'],
            'no-div-regex': ['off'],
            'no-dupe-args': ['error'],
            'no-dupe-keys': ['error'],
            'no-duplicate-case': ['error'],
            'no-else-return': ['off'],
            'no-empty': ['error'],
            'no-empty-character-class': ['error'],
            'no-empty-pattern': ['error'],
            'no-eq-null': ['off'],
            'no-eval': ['error'],
            'no-ex-assign': ['error'],
            'no-extend-native': ['error'],
            'no-extra-bind': ['warn'],
            'no-extra-boolean-cast': ['error'],
            'no-extra-label': ['error'],
            'no-fallthrough': ['error'],
            'no-func-assign': ['warn'],
            'no-global-assign': ['error'],
            'no-implicit-coercion': ['off'],
            'no-implicit-globals': ['off'],
            'no-implied-eval': ['error'],
            'no-inline-comments': ['off'],
            'no-inner-declarations': ['error'],
            'no-invalid-regexp': ['error'],
            'no-invalid-this': ['off'],
            'no-irregular-whitespace': ['error'],
            'no-iterator': ['off'],
            'no-label-var': ['off'],
            'no-labels': ['off'],
            'no-lone-blocks': ['off'],
            'no-lonely-if': ['error'],
            'no-loop-func': ['warn'],
            'no-magic-numbers': ['off'],
            'no-mixed-requires': ['off'],
            'no-multi-assign': ['warn'],
            'no-multi-str': ['warn'],
            'no-negated-condition': ['warn'],
            'no-negated-in-lhs': ['error'],
            'no-nested-ternary': ['off'],
            'no-new': ['error'],
            'no-new-func': ['error'],
            'no-new-object': ['error'],
            'no-new-require': ['error'],
            'no-new-symbol': ['error'],
            'no-new-wrappers': ['error'],
            'no-obj-calls': ['error'],
            'no-octal': ['error'],
            'no-octal-escape': ['error'],
            'no-param-reassign': [
                'warn',
                {
                    props: true,
                },
            ],
            'no-path-concat': ['off'],
            'no-plusplus': ['off'],
            'no-process-env': ['off'],
            'no-process-exit': ['off'],
            'no-proto': ['error'],
            'no-prototype-builtins': ['off'],
            'no-regex-spaces': ['error'],
            'no-restricted-globals': ['off'],
            'no-restricted-modules': ['off'],
            'no-restricted-properties': ['off'],
            'no-restricted-syntax': ['off'],
            'no-return-assign': ['error', 'except-parens'],
            'no-return-await': ['error'],
            'no-script-url': ['warn'],
            'no-self-assign': ['error'],
            'no-self-compare': ['error'],
            'no-sequences': ['error'],
            'no-shadow': ['off'],
            'no-shadow-restricted-names': ['off'],
            'no-sparse-arrays': ['error'],
            'no-sync': ['off'],
            'no-template-curly-in-string': ['off'],
            'no-ternary': ['off'],
            'no-this-before-super': ['error'],
            'no-throw-literal': ['warn'],
            'no-undef-init': ['warn'],
            'no-undefined': ['off'],
            'no-underscore-dangle': ['warn'],
            'no-unexpected-multiline': ['error'],
            'no-unmodified-loop-condition': ['warn'],
            'no-unneeded-ternary': ['error'],
            'no-unreachable': ['error'],
            'no-unreachable-loop': ['error'],
            'no-unsafe-finally': ['error'],
            'no-unsafe-negation': ['error'],
            'no-unused-expressions': [
                'warn',
                {
                    allowShortCircuit: true,
                    allowTernary: false,
                    allowTaggedTemplates: false,
                    enforceForJSX: false,
                },
            ],
            'no-unused-labels': ['error'],
            'no-useless-call': ['warn'],
            'no-useless-computed-key': ['error'],
            'no-useless-concat': ['warn'],
            'no-useless-escape': ['error'],
            'no-useless-rename': ['error'],
            'no-useless-return': ['error'],
            'no-var': ['error'],
            'no-warning-comments': ['off'],
            'no-with': ['error'],
            'object-shorthand': ['off', 'consistent-as-needed'],
            'one-var': ['error', 'never'],
            'operator-assignment': ['off'],
            'prefer-arrow-callback': [
                'warn',
                {
                    allowNamedFunctions: true,
                    allowUnboundThis: true,
                },
            ],
            'prefer-const': ['error'],
            'prefer-destructuring': ['off'],
            'prefer-numeric-literals': ['error'],
            'prefer-promise-reject-errors': ['warn'],
            'prefer-reflect': ['off'],
            'prefer-rest-params': ['error'],
            'prefer-spread': ['warn'],
            'prefer-template': ['off'],
            radix: ['error'],
            'require-jsdoc': ['off'],
            'require-yield': ['error'],
            'sort-imports': ['off'],
            'sort-keys': ['off'],
            'sort-vars': ['off'],
            strict: ['off'],
            'symbol-description': ['warn'],
            'unicode-bom': ['warn'],
            'use-isnan': ['error'],
            'valid-jsdoc': ['off'],
            'valid-typeof': ['error'],
            'vars-on-top': ['off'],
            yoda: ['warn'],
            'import/no-cycle': 'error',
            'import/order': [
                'error',
                {
                    groups: [
                        'builtin',
                        'external',
                        'internal',
                        'unknown',
                        'parent',
                        'sibling',
                        'index',
                        'object',
                        'type',
                    ],
                    'newlines-between': 'never',
                },
            ],
            'import/named': ['error'],
            'import/default': ['error'],
            'import/namespace': ['off'],
            'import/no-restricted-paths': ['off'],
            'import/no-absolute-path': ['error'],
            'import/no-dynamic-require': ['warn'],
            'import/no-internal-modules': ['off'],
            'import/no-webpack-loader-syntax': ['warn'],
            'import/export': ['error'],
            'import/no-named-as-default': ['warn'],
            'import/no-named-as-default-member': ['error'],
            'import/no-deprecated': ['error'],
            'import/no-extraneous-dependencies': [
                'error',
                {
                    devDependencies: true,
                    optionalDependencies: true,
                    peerDependencies: true,
                },
            ],
            'import/no-mutable-exports': ['warn'],
            'import/no-amd': ['error'],
            'import/no-nodejs-modules': ['off'],
            'import/first': ['error'],
            'import/no-duplicates': ['error'],
            'import/no-namespace': ['off'],
            // FIXME: Need to have a best practice for browser and node side
            'import/extensions': ['off'],
            'import/newline-after-import': ['error'],
            'import/prefer-default-export': ['off'],
            'import/max-dependencies': ['off'],
            'import/no-unassigned-import': ['off'],
            // FIXME: Plan to replace with `eslint-plugin-import-x` to fix `exports` issue
            'import/no-unresolved': ['off'],
            'import/no-named-default': ['error'],
            // type import related
            'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
            '@stylistic/indent': ['error', 4],
            '@stylistic/func-call-spacing': ['error'],
            '@stylistic/member-delimiter-style': [
                'error',
                {
                    multiline: {
                        delimiter: 'semi',
                        requireLast: true,
                    },
                    singleline: {
                        delimiter: 'comma',
                        requireLast: false,
                    },
                },
            ],
            '@stylistic/no-extra-parens': ['off'],
            '@stylistic/semi': ['error'],
            '@stylistic/type-annotation-spacing': ['error'],
            '@stylistic/quotes': ['error', 'single'],
            '@stylistic/template-curly-spacing': ['off', 'never'],
            '@stylistic/brace-style': ['error', 'stroustrup'],
            '@stylistic/function-call-argument-newline': ['warn', 'consistent'],
            '@stylistic/no-multiple-empty-lines': [
                'warn',
                {
                    max: 1,
                    maxEOF: 0,
                    maxBOF: 0,
                },
            ],
            '@stylistic/array-bracket-newline': ['warn', 'consistent'],
            '@stylistic/array-bracket-spacing': ['error', 'never'],
            '@stylistic/arrow-parens': ['error', 'as-needed'],
            '@stylistic/arrow-spacing': ['error'],
            '@stylistic/block-spacing': ['error', 'never'],
            '@stylistic/comma-dangle': [
                'error',
                {
                    arrays: 'always-multiline',
                    objects: 'always-multiline',
                    imports: 'always-multiline',
                    exports: 'always-multiline',
                    functions: 'never',
                },
            ],
            '@stylistic/comma-spacing': [
                'error',
                {
                    before: false,
                    after: true,
                },
            ],
            '@stylistic/comma-style': ['error', 'last'],
            '@stylistic/computed-property-spacing': ['error', 'never'],
            '@stylistic/dot-location': ['error', 'property'],
            '@stylistic/eol-last': ['error', 'always'],
            '@stylistic/generator-star-spacing': [
                'error',
                {
                    before: false,
                    after: true,
                },
            ],
            '@stylistic/jsx-quotes': ['error', 'prefer-double'],
            '@stylistic/key-spacing': [
                'error',
                {
                    beforeColon: false,
                    afterColon: true,
                },
            ],
            '@stylistic/keyword-spacing': ['error'],
            '@stylistic/line-comment-position': ['off'],
            '@stylistic/linebreak-style': ['error', 'unix'],
            '@stylistic/lines-around-comment': ['off'],
            '@stylistic/max-len': [
                'error',
                120,
                4,
                {
                    ignoreUrls: true,
                },
            ],
            '@stylistic/max-statements-per-line': ['error'],
            '@stylistic/multiline-ternary': ['off'],
            '@stylistic/new-parens': ['warn'],
            '@stylistic/newline-per-chained-call': ['off'],
            '@stylistic/no-confusing-arrow': [
                'error',
                {
                    allowParens: true,
                    onlyOneSimpleParam: false,
                },
            ],
            '@stylistic/no-extra-semi': ['error'],
            '@stylistic/no-floating-decimal': ['error'],
            '@stylistic/no-mixed-operators': ['off'],
            '@stylistic/no-mixed-spaces-and-tabs': ['error'],
            '@stylistic/no-multi-spaces': [
                'error',
                {
                    exceptions: {
                        Property: false,
                    },
                    ignoreEOLComments: false,
                },
            ],
            '@stylistic/no-tabs': ['warn'],
            '@stylistic/no-trailing-spaces': ['error'],
            '@stylistic/no-whitespace-before-property': ['error'],
            '@stylistic/nonblock-statement-body-position': ['off'],
            '@stylistic/object-curly-newline': [
                'error',
                {
                    consistent: true,
                    multiline: true,
                },
            ],
            '@stylistic/object-curly-spacing': ['error', 'never'],
            '@stylistic/object-property-newline': ['off'],
            '@stylistic/one-var-declaration-per-line': ['error'],
            '@stylistic/operator-linebreak': ['error', 'before'],
            '@stylistic/padded-blocks': ['off'],
            '@stylistic/padding-line-between-statements': ['off'],
            '@stylistic/quote-props': ['off'],
            '@stylistic/rest-spread-spacing': ['error', 'never'],
            '@stylistic/semi-spacing': ['error'],
            '@stylistic/semi-style': ['error', 'last'],
            '@stylistic/space-before-blocks': ['error', 'always'],
            '@stylistic/space-before-function-paren': [
                'error',
                {
                    anonymous: 'always',
                    named: 'never',
                    asyncArrow: 'always',
                },
            ],
            '@stylistic/space-in-parens': ['error', 'never'],
            '@stylistic/space-infix-ops': ['error'],
            '@stylistic/space-unary-ops': ['warn'],
            '@stylistic/spaced-comment': [
                'error',
                'always',
                {
                    exceptions: ['-', '+', '\'', '#'],
                    block: {
                        balanced: true,
                    },
                },
            ],
            '@stylistic/switch-colon-spacing': [
                'error',
                {
                    before: false,
                    after: true,
                },
            ],
            '@stylistic/template-tag-spacing': ['error', 'never'],
            '@stylistic/wrap-iife': ['error', 'any'],
            '@stylistic/wrap-regex': ['off'],
            '@stylistic/yield-star-spacing': ['off'],
            '@stylistic/jsx-closing-bracket-location': ['error', 'line-aligned'],
            '@stylistic/jsx-curly-spacing': ['error', 'never'],
            '@stylistic/jsx-equals-spacing': ['error', 'never'],
            '@stylistic/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
            '@stylistic/jsx-indent-props': ['error', 4],
            '@stylistic/jsx-indent': ['error', 4],
            '@stylistic/jsx-max-props-per-line': [
                'error',
                {
                    when: 'multiline',
                },
            ],
            '@stylistic/jsx-pascal-case': [
                'error',
                {
                    allowAllCaps: true,
                },
            ],
            '@stylistic/jsx-sort-props': ['off'],
            '@stylistic/jsx-tag-spacing': [
                'error',
                {
                    closingSlash: 'never',
                    beforeSelfClosing: 'always',
                    beforeClosing: 'never',
                    afterOpening: 'never',
                },
            ],
            '@stylistic/jsx-wrap-multilines': [
                'error',
                {
                    declaration: 'parens-new-line',
                    assignment: 'parens-new-line',
                    return: 'parens-new-line',
                    arrow: 'parens-new-line',
                },
            ],
            '@stylistic/jsx-closing-tag-location': ['error'],
            '@stylistic/jsx-props-no-multi-spaces': ['error'],
        },
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        linterOptions: {
            reportUnusedDisableDirectives: true,
        },
    },
];

/* eslint-enable max-lines */

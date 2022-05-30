module.exports = {
    overrides: [
        {
            files: ['*.ts?(x)'],
            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
                'plugin:import/typescript',
            ],
            rules: {
                '@typescript-eslint/indent': ['error', 4],
                '@typescript-eslint/consistent-type-imports': [
                    'error',
                    {
                        prefer: 'type-imports',
                    },
                ],
                '@typescript-eslint/method-signature-style': ['error', 'property'],
                '@typescript-eslint/naming-convention': [
                    'error',
                    {
                        selector: 'typeParameter',
                        format: ['PascalCase'],
                        custom: {
                            regex: '^[A-Z][a-zA-Z0-9]*$',
                            match: true,
                        },
                    },
                ],
                '@typescript-eslint/no-redeclare': ['error'],
                '@typescript-eslint/prefer-nullish-coalescing': ['warn'],
                '@typescript-eslint/prefer-optional-chain': ['warn'],
                '@typescript-eslint/prefer-ts-expect-error': ['error'],
                '@typescript-eslint/restrict-plus-operands': ['off'],
                '@typescript-eslint/adjacent-overload-signatures': ['error'],
                '@typescript-eslint/array-type': [
                    'error',
                    {
                        default: 'array-simple',
                        readonly: 'array-simple',
                    },
                ],
                '@typescript-eslint/await-thenable': ['warn'],
                '@typescript-eslint/ban-ts-comment': [
                    'warn',
                    {
                        'ts-expect-error': 'allow-with-description',
                        'ts-ignore': 'allow-with-description',
                        'ts-nocheck': 'allow-with-description',
                        'ts-check': 'allow-with-description',
                        minimumDescriptionLength: 3,
                    },
                ],
                '@typescript-eslint/ban-types': ['error'],
                '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
                '@typescript-eslint/explicit-function-return-type': ['off'],
                '@typescript-eslint/explicit-member-accessibility': [
                    'error',
                    {
                        accessibility: 'no-public',
                    },
                ],
                '@typescript-eslint/func-call-spacing': ['error'],
                '@typescript-eslint/member-delimiter-style': [
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
                '@typescript-eslint/member-ordering': ['warn'],
                '@typescript-eslint/no-array-constructor': ['error'],
                '@typescript-eslint/no-empty-function': ['off'],
                '@typescript-eslint/no-empty-interface': ['warn'],
                '@typescript-eslint/no-explicit-any': ['off'],
                '@typescript-eslint/no-extra-parens': ['off'],
                '@typescript-eslint/no-extraneous-class': ['error'],
                '@typescript-eslint/no-floating-promises': [
                    'error',
                    {
                        ignoreVoid: true,
                    },
                ],
                '@typescript-eslint/no-for-in-array': ['error'],
                '@typescript-eslint/no-inferrable-types': ['off'],
                '@typescript-eslint/no-magic-numbers': ['off'],
                '@typescript-eslint/no-misused-new': ['error'],
                '@typescript-eslint/no-misused-promises': ['off'],
                '@typescript-eslint/no-namespace': ['error'],
                '@typescript-eslint/no-non-null-assertion': ['off'],
                '@typescript-eslint/consistent-type-assertions': ['error'],
                '@typescript-eslint/no-parameter-properties': ['off'],
                '@typescript-eslint/no-require-imports': ['error'],
                '@typescript-eslint/no-this-alias': ['error'],
                '@typescript-eslint/no-type-alias': ['off'],
                '@typescript-eslint/no-unnecessary-qualifier': ['error'],
                '@typescript-eslint/no-unnecessary-type-assertion': ['error'],
                '@typescript-eslint/no-unsafe-assignment': ['warn'],
                '@typescript-eslint/no-unused-vars': [
                    'error',
                    {
                        vars: 'all',
                        args: 'after-used',
                        ignoreRestSiblings: true,
                    },
                ],
                '@typescript-eslint/init-declarations': ['error'],
                '@typescript-eslint/no-use-before-define': ['error'],
                '@typescript-eslint/no-useless-constructor': ['error'],
                '@typescript-eslint/no-var-requires': ['error'],
                '@typescript-eslint/no-dupe-class-members': ['error'],
                '@typescript-eslint/no-duplicate-imports': ['error'],
                '@typescript-eslint/no-extra-non-null-assertion': ['error'],
                '@typescript-eslint/prefer-for-of': ['error'],
                '@typescript-eslint/prefer-function-type': ['error'],
                '@typescript-eslint/prefer-includes': ['warn'],
                '@typescript-eslint/prefer-namespace-keyword': ['error'],
                '@typescript-eslint/prefer-readonly': ['error'],
                '@typescript-eslint/prefer-regexp-exec': ['warn'],
                '@typescript-eslint/prefer-string-starts-ends-with': ['error'],
                '@typescript-eslint/promise-function-async': ['off'],
                '@typescript-eslint/require-array-sort-compare': ['off'],
                '@typescript-eslint/dot-notation': [
                    'error',
                    {
                        allowIndexSignaturePropertyAccess: true,
                        allowKeywords: true,
                        allowPattern: '',
                        allowPrivateClassPropertyAccess: false,
                        allowProtectedClassPropertyAccess: false,
                    },
                ],
                '@typescript-eslint/semi': ['error'],
                '@typescript-eslint/strict-boolean-expressions': ['off'],
                '@typescript-eslint/triple-slash-reference': ['error'],
                '@typescript-eslint/type-annotation-spacing': ['error'],
                '@typescript-eslint/unbound-method': ['off'],
                '@typescript-eslint/unified-signatures': ['warn'],
                '@typescript-eslint/quotes': ['error', 'single'],
            },
        },
    ],
};
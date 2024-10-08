module.exports = {
    plugins: ['@stylistic'],
    rules: {
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
};

module.exports = {
    rules: {
        'import/no-cycle': 'error',
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', 'unknown', 'parent', 'sibling', 'index', 'object', 'type'],
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
        'import/extensions': [
            'error',
            {
                js: 'never',
                jsx: 'never',
                es: 'never',
            },
        ],
        'import/newline-after-import': ['error'],
        'import/prefer-default-export': ['off'],
        'import/max-dependencies': ['off'],
        'import/no-unassigned-import': ['off'],
        'import/no-named-default': ['error'],
        // type import related
        'import/consistent-type-specifier-style': [
            'error',
            'prefer-top-level',
        ],
    },
};

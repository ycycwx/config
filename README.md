# Config

Customize common config

## ESLint

```js
const {resolve} = require('path');

const project = resolve(__dirname, 'tsconfig.json');

modules.exports = {
    root: true,
    extends: [
        '@yotsubacy/config/eslint/browser',
        '@yotsubacy/config/eslint/react',
        '@yotsubacy/config/eslint/typescript',
    ],
    // use typescript config
    parserOptions: {
        project,
    },
    settings: {
        'import/resolver': {
            typescript: {
                project,
            },
        },
    },
};

modules.exports = {
    extends: ['@yotsubacy/config/eslint/node'],
};
```

## TypeScript

```json
{
    "extends": "@yotsubacy/config/typescript.json"
}
```

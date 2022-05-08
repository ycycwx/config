# Config

Customize common config

## ESLint

### TypeScript

```js
const {resolve} = require('node:path');

const project = resolve(__dirname, 'tsconfig.json');

modules.exports = {
    root: true,
    extends: [
        require.resolve('@yotsubacy/config/eslint/browser'),
        require.resolve('@yotsubacy/config/eslint/react'),
        require.resolve('@yotsubacy/config/eslint/typescript'),
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
```

### Node

```js
modules.exports = {
    extends: [require.resolve('@yotsubacy/config/eslint/node')],
};
```

## TypeScript

```json
{
    "extends": "@yotsubacy/config/typescript.json"
}
```

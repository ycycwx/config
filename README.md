# Config

Extract common config

## eslint

```js
modules.exports = {
    extends: [
        '@yotsubacy/config/eslint/browser',
        '@yotsubacy/config/eslint/react',
        '@yotsubacy/config/eslint/typescript',
    ],
    // use typescript config
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
    }
}

modules.exports = {
    extends: ['@yotsubacy/config/eslint/node'],
}
```

## typescript

```json
{
    "extends": "@yotsubacy/config/typescript.json"
}
```

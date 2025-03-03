# Config

customize common config inspired by Vercel config.

## ESLint

### TypeScript

```js
// filename: eslint.config.js
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import config from '@yotsubacy/config/eslint';

export default config('typescript', {
    languageOptions: {
        parserOptions: {
            projectService: {
                allowDefaultProject: ['*.{js,mjs,cjs}'],
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
});
```

### Node

```js
// filename: eslint.config.js
import config from '@yotsubacy/config/eslint';
export default config('node');
```

### Multi presets support

```js
// filename: eslint.config.js
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import config from '@yotsubacy/config/eslint';

export default config(['browser', 'react', 'typescript'], {
    languageOptions: {
        parserOptions: {
            projectService: {
                allowDefaultProject: ['*.{js,mjs,cjs}'],
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
});
```

## TypeScript

```json
{
    "extends": "@yotsubacy/config/typescript.json"
}
```

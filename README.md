# PodCodar Eslint Configs

This projects create some eslint configuration shared across @PodCodar project's.

This uses Turborepo.

## Published packages

```sh
@podcodar/eslint-config-base  # base preset (with prettier)
@podcodar/eslint-config-react # react
@podcodar/eslint-config-next  # next.js
@podcodar/eslint-config-turbo # turbo repo
```

## Using

1. Setup Eslint in your project

  ```sh
  # with npm
  npm init @eslint/config

  # with yarn
  yarn init @eslint/config

  # with pnpm
  pnpm create @eslint/config
  ```

2. Install the desired podcodar config

```sh
npm install @podcodar/eslint-config-next
```

3. extend configs by editing your `.eslintrc` file

```jsonc
// .eslintrc file
{
  "extends": [
    "@podcodar/eslint-config-next",
    // ...
  ]
}
```

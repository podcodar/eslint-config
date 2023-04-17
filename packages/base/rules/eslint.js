module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  },
  rules: {
    "no-trailing-spaces": ["error"],
    "eol-last": ["error", "always"],
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "no-multiple-empty-lines": ["error", { "max": 1 }],
    "array-element-newline": ["error", { "minItems": 3 }],
    "array-bracket-newline": ["error", { "minItems": 3 }],
  }
};

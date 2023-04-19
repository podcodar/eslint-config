module.exports = {
  rules: {
    "react/jsx-sort-props": "error",
    "react/self-closing-comp": "error",
    "react/jsx-closing-bracket-location": "error",
    "react/jsx-first-prop-new-line": ["error", "multiline-multiprop"],
    "react/jsx-max-props-per-line": ["error", { "maximum": { "single": 2, "multi": 1 } }],
  }
};

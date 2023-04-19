module.exports = {
  extends: [
    "@podcodar/eslint-config-react",
    "next",
    "next/core-web-vitals",
    "./rules/next"
  ],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
};

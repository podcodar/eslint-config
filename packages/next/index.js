module.exports = {
  extends: ["@base/eslint-config-base", "next", "./rules/next"],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
};

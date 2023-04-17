module.exports = {
  extends: ["@podcodar/eslint-config-base", "next", "./rules/next"],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
};

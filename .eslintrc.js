module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ["@podcodar/eslint-config-turbo"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};

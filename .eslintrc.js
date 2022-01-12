module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "standard", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
  },
  plugins: ["react"],
  rules: {},
};

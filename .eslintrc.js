module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: [
    "eslint:recommended",
    "prettier",
    "jest",
    "plugin:jest/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["prettier"],
  rules: { "prettier/prettier": ["error"] },
};

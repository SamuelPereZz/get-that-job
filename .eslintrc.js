/** @type {import("eslint").Linter.Config} */

const path = require("path");

module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "eslint-config-prettier",
    "next"
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "import/no-duplicates": "off",
    "no-unused-vars": "off"
  },
  env: {
    browser: true,
    node: true
  },
  overrides: [
    {
      files: "**/*.+(ts|tsx)",
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json"
      },
      plugins: ["@typescript-eslint/eslint-plugin"],
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
      ],
      settings: {
        "import/resolver": {
          node: {
            paths: [path.resolve(__dirname, "src")]
          },
          typescript: {
            project: path.resolve(__dirname, "tsconfig.json")
          }
        }
      },
      rules: {
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/ban-ts-ignore": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/no-unused-vars": [
          "warn",
          { vars: "all", args: "none", ignoreRestSiblings: true }
        ]
      }
    }
  ]
};

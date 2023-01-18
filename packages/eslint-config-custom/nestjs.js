module.exports = {
  env: {
    node: true,
    jest: true,
  },
  extends: [
    "airbnb-base",
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/strict",
    "plugin:eslint-comments/recommended",
    "plugin:unicorn/all",
    "plugin:sonarjs/recommended",
    "plugin:security/recommended",
    "turbo",
    "prettier",
  ],
  ignorePatterns: [
    "node_modules",
    "dist",
    "build",
    "coverage",
    ".next",
    ".turbo",
    ".eslintrc.js",
    "jest.config.js",
  ],
  plugins: [
    "@typescript-eslint/eslint-plugin",
    "sonarjs",
    "simple-import-sort",
  ],
  rules: {
    "class-methods-use-this": "off",
    "no-console": ["error", { allow: ["error"] }],

    // @typescript-eslint
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/no-extraneous-class": "off",
    "@typescript-eslint/no-require-imports": "error",

    // unicorn
    "unicorn/no-array-for-each": "off",
    "unicorn/prevent-abbreviations": "off",
    "unicorn/prefer-top-level-await": "off",

    // no default export
    "import/no-default-export": "error",
    "import/prefer-default-export": "off",

    // simple-import-sort
    "sort-imports": "off",
    "import/order": "off",
    "sort-imports": "off",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Side effect imports.
          ["^\\u0000"],
          // Node.js builtins
          [
            "^(node:)?(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)",
          ],
          // External packages
          ["^@?\\w"],
          // Internal packages.
          ["^(@sit-igp)(/.*|$)"],
          // Absolute imports and other imports
          ["^"],
          // Parent imports. Put `..` last.
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // Other relative imports. Put same-folder imports and `.` last.
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
        ],
      },
    ],
    "simple-import-sort/exports": "error",
  },
  overrides: [
    {
      files: ["**/*spec.ts"],
      plugins: ["jest"],
      extends: ["plugin:jest/recommended", "plugin:jest/style"],
    },
  ],
};

module.exports = {
  extends: ["next/core-web-vitals", "turbo", "prettier"],
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
  rules: {},
};

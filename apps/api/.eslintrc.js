module.exports = {
  root: true,
  extends: ["@sit-igp/custom/nestjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
};

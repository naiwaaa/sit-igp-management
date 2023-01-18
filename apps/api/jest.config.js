module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["**/*.ts", "!**/*.interface{,s}.ts"],
  coverageDirectory: "../coverage",
  coveragePathIgnorePatterns: ["main.ts"],
  coverageProvider: "v8",
  coverageReporters: ["json", "lcov", "text", "text-summary"],
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60,
    },
  },
  errorOnDeprecated: true,
  moduleFileExtensions: ["js", "json", "ts"],
  rootDir: "src",
  setupFilesAfterEnv: ["../test/setup-jest-unit.ts"],
  testEnvironment: "node",
  testRegex: ".*\\.spec\\.ts$",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest",
  },
};

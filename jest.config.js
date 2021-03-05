//https://jestjs.io/docs/configuration.html   ==jest.config.js 文档地址

module.exports = {
  verbose: true,
  clearMocks: false,
  //=====测试相关的
  collectCoverage: true,
  collectCoverageFrom: [
    "lib/**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!lib/icon-svgs/*",
    "!lib/app.tsx",
    "!lib/index.tsx"
  ],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov"],
  reporters: [
    "default",
    [
      "jest-junit",
      { outputDirectory: "test_reports/jest", outputName: "results.xml" }
    ]
  ],
  // ====
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleNameMapper: {
    //https://www.jianshu.com/p/5d11cd50ead4   --jest配置
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/test/__mocks__/fileMock.js",
    ".*\\.(css|less|scss)$": "<rootDir>/test/__mocks__/styleMock.js"
  },
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  moduleDirectories: ["node_modules"],
  testMatch: ["<rootDir>/**/__tests__/**/*.test.(js|jsx|ts|tsx)"],
  setupFilesAfterEnv: ["<rootDir>test/setupTests.js"]
};

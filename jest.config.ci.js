
//https://jestjs.io/docs/configuration.html   ==jest.config.js 文档地址

const base = require('./jest.config')
module.exports = Object.assign(base, {
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
})




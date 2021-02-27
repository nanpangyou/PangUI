//https://jestjs.io/docs/configuration.html   ==jest.config.js 文档地址



module.exports = {
    verbose: true,
    clearMocks: false,
    collectCoverage: false,
    reporters: ['default'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    moduleDirectories: ['node_modules'],
    testMatch: ['<rootDir>/**/__tests__/**/*.test.(js|jsx|ts|tsx)'],
    // setupFilesAfterEnv: ['<rootDir>test/setupTests.js']
};
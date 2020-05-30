module.exports = {
  collectCoverageFrom: ['src/**/*.+(js|jsx|ts|tsx)'],
  coveragePathIgnorePatterns: [
    'src/index.(js|jsx|ts|tsx)$',
    '/node_modules/',
    '/__fixtures__/',
    '/fixtures/',
    '/__tests__/',
    '/__tests__/helpers/',
    '/__tests__/utils/',
    '__mocks__',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  setupFilesAfterEnv: [
    './src/setupTests.ts'
  ],
  watchPlugins: [
    require.resolve('jest-watch-typeahead/filename'),
    require.resolve('jest-watch-typeahead/testname'),
  ],
}

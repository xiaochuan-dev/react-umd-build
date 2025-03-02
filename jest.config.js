module.exports = {
  testEnvironment: 'node',

  testMatch: [
    '**/__tests__/**/*.js?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],

  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/react/'],
  testTimeout: 50000
};
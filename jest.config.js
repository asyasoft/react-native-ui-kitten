const { defaults: tsJestConfig } = require('ts-jest/presets');
const { pathsToModuleNameMapper } = require('ts-jest/utils');
const jestConfig = require('./tsconfig.jest');

module.exports = {
  ...tsJestConfig,
  preset: 'react-native',
  transform: {
    ...tsJestConfig.transform,
    '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  globals: {
    'ts-jest': {
      babelConfig: true,
      tsConfig: './tsconfig.jest.json',
    },
  },
  cacheDirectory: './dist/jest/cache',
  coverageDirectory: './dist/jest/coverage',
  moduleNameMapper: pathsToModuleNameMapper(jestConfig.compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  modulePathIgnorePatterns: [
    '<rootDir>/src/playground/'
  ],
};

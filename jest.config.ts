import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  testMatch: ['<rootDir>/src/**/*.test.*'],
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: [],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default config;

import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testMatch: ["<rootDir>/src/**/?(*.)+(spec|test).[jt]s?(x)"],
  verbose: true,
};

export default jestConfig;

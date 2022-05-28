import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  clearMocks: true,
  collectCoverage: false,
  errorOnDeprecated: true,
  moduleDirectories: ['node_modules', '<rootDir>'],
  restoreMocks: true,
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    '^@components/(.*)$': '<rootDir>/components/$1',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    '^@pages/(.*)$': '<rootDir>/pages/$1',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    '^@lib/(.*)$': '<rootDir>/lib/$1',
  },
};

export default createJestConfig(customJestConfig);

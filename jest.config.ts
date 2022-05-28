const config = {
  clearMocks: true,
  collectCoverage: false,
  errorOnDeprecated: true,
  moduleDirectories: ['node_modules', '<rootDir>'],
  preset: 'ts-jest/presets/js-with-ts',
  restoreMocks: true,
  setupFilesAfterEnv: ['<rootDir>/.jest/setup/jestDomExpects.ts'],
  testEnvironment: 'jsdom',
  globals: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
};

export default config;

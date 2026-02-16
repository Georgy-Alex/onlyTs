import  path from "path";

export default {
    coveragePathIgnorePatterns: [
        "\\\\node_modules\\\\"
    ],
    clearMocks: true,
    testEnvironment: "jsdom",
    moduleFileExtensions: [
        "js",
        "mjs",
        "cjs",
        "jsx",
        "ts",
        "tsx",
        "json",
        "node"
    ],
    moduleDirectories: [
        "node_modules"
    ],
    modulePaths: [
        '<rootDir>src'
    ],
    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    ],
    rootDir: '../../',
    setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts'],
    moduleNameMapper: {
        '\\.s?css$': 'identity-obj-proxy',
        '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    },
};

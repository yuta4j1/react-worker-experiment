module.exports = {
    setupFilesAfterEnv: ["<rootDir>src/setupTests.ts"],
    moduleFileExtensions: [
        "js",
        "json",
        "jsx",
        "ts",
        "tsx",
        "node"
    ],
    preset: "ts-jest",
    "transform": {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    testMatch: [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[tj]s?(x)"
    ]
}
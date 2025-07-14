module.exports = {
  projects: [
    {
      displayName: "client",
      testEnvironment: "jsdom",
      testMatch: ["<rootDir>/client/src/tests/**/*.test.js"]
    },
    {
      displayName: "server",
      testEnvironment: "node",
      testMatch: ["<rootDir>/server/tests/**/*.test.js"],
      setupFilesAfterEnv: ["<rootDir>/server/tests/setup.js"]
    }
  ]
};

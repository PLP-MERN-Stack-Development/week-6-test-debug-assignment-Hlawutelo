const fs = require('fs');
const path = require('path');

// Folder structure to create
const folders = [
  'mern-testing/client/src/components',
  'mern-testing/client/src/tests/unit',
  'mern-testing/client/src/tests/integration',
  'mern-testing/client/cypress',
  'mern-testing/server/src/controllers',
  'mern-testing/server/src/models',
  'mern-testing/server/src/routes',
  'mern-testing/server/src/middleware',
  'mern-testing/server/tests/unit',
  'mern-testing/server/tests/integration'
];

// File structure to create (with default content)
const files = {
  'mern-testing/client/src/App.jsx': `import React from 'react';
function App() {
  return <h1>Hello MERN Testing App</h1>;
}
export default App;`,

  'mern-testing/jest.config.js': `module.exports = {
  projects: [
    {
      displayName: "client",
      testEnvironment: "jsdom",
      testMatch: ["<rootDir>/client/src/tests/**/*.test.js"]
    },
    {
      displayName: "server",
      testEnvironment: "node",
      testMatch: ["<rootDir>/server/tests/**/*.test.js"]
    }
  ]
};`,

  'mern-testing/package.json': `{
  "name": "mern-testing",
  "version": "1.0.0",
  "scripts": {
    "test": "jest",
    "test:client": "jest --selectProjects=client",
    "test:server": "jest --selectProjects=server",
    "test:coverage": "jest --coverage",
    "test:e2e": "cypress open"
  },
  "devDependencies": {
    "jest": "^29.0.0",
    "supertest": "^6.0.0",
    "@testing-library/react": "^14.0.0",
    "@testing-library/jest-dom": "^6.0.0",
    "@testing-library/user-event": "^14.4.3",
    "cypress": "^13.0.0",
    "mongodb-memory-server": "^9.0.0"
  }
}`
};

// Create folders recursively
folders.forEach(folder => {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
    console.log(`✅ Created folder: ${folder}`);
  }
});

// Create files with default content
for (const [filePath, content] of Object.entries(files)) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filePath, content);
  console.log(`📄 Created file: ${filePath}`);
}

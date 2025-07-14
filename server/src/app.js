const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Example route
app.get('/api/users', (req, res) => {
  res.status(200).json([{ id: 1, name: 'Alice' }]);
});

// Export app for testing
module.exports = app;

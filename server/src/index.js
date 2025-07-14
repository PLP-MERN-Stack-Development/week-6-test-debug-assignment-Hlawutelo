const express = require('express');
const app = express();
const PORT = 5000;

// ✅ Basic test route
app.get('/', (req, res) => {
  res.send('🚀 Server is running!');
});

// ✅ Error route to test global error handler
app.get('/error', (req, res) => {
  throw new Error('This is a test error!');
});

// ✅ Global error handler
app.use((err, req, res, next) => {
  console.error('🔥 Error caught by middleware:', err.stack);
  res.status(500).json({ message: 'Something broke!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});

// Catch-all error handler
app.use((err, req, res, next) => {
  console.error('🔥 Server Error:', err.stack); // Logs error stack to console
  res.status(500).json({ error: 'Something went wrong on the server!' });
});

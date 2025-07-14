// 🛠 Add this somewhere above your error handler
app.get('/error', (req, res) => {
  throw new Error('This is a test error!');
});

// ✅ Global Error Handler (must be last)
app.use((err, req, res, next) => {
  console.error('🔥 ERROR:', err.stack);
  res.status(500).json({ message: 'Something broke!' });
});


app.get('/error', (req, res) => {
  throw new Error('This is a test error!');
});

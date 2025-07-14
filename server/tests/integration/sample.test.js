const mongoose = require('mongoose');
const request = require('supertest');
const express = require('express');
const app = express();

app.use(express.json());
app.get('/api/ping', (req, res) => {
  res.status(200).json({ msg: 'pong' });
});

test('GET /api/ping should return pong', async () => {
  const res = await request(app).get('/api/ping');
  expect(res.statusCode).toBe(200);
  expect(res.body.msg).toBe('pong');
});

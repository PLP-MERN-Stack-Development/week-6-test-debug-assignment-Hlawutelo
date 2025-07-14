const request = require('supertest');
const app = require('../../src/app');

describe('User routes', () => {
  it('should return 200 on GET /api/users', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toBe(200);
  });
});

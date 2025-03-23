import request from 'supertest';
import express from 'express';
import authRouter from './auth';
import { StatusCodes } from 'http-status-codes';

// mock ל־controllers
jest.mock('../../controllers/auth/controller', () => ({
  getAllUsers: (_req: any, res: any) => res.status(200).json({ route: 'getAllUsers' }),
  login: (_req: any, res: any) => res.status(200).json({ route: 'login' }),
  register: (_req: any, res: any) => res.status(200).json({ route: 'register' }),
  deleteUser: (_req: any, res: any) => res.status(200).json({ route: 'deleteUser' }),
  updateUser: (_req: any, res: any) => res.status(200).json({ route: 'updateUser' }),
}));

// mock ל־middleware validation
jest.mock('../../middlewares/validation', () => () => (_req: any, _res: any, next: any) => next());

const app = express();
app.use(express.json());
app.use('/auth', authRouter);

describe('Auth Router', () => {
  test('GET /auth/', async () => {
    const res = await request(app).get('/auth/');
    expect(res.status).toBe(StatusCodes.OK);
    expect(res.body).toEqual({ route: 'getAllUsers' });
  });

  test('POST /auth/login', async () => {
    const res = await request(app)
      .post('/auth/login')
      .send({ username: 'a', password: 'b' });
    expect(res.status).toBe(StatusCodes.OK);
    expect(res.body).toEqual({ route: 'login' });
  });

  test('POST /auth/register', async () => {
    const res = await request(app)
      .post('/auth/register')
      .send({ name: 'User', username: 'u', password: 'p', email: 'a@b.com', role: 'user' });
    expect(res.status).toBe(StatusCodes.OK);
    expect(res.body).toEqual({ route: 'register' });
  });

  test('DELETE /auth/:id', async () => {
    const res = await request(app).delete('/auth/123');
    expect(res.status).toBe(StatusCodes.OK);
    expect(res.body).toEqual({ route: 'deleteUser' });
  });

  test('PUT /auth/:id', async () => {
    const res = await request(app)
      .put('/auth/123')
      .send({ name: 'Updated', username: 'u', password: 'p', email: 'a@b.com', role: 'admin' });
    expect(res.status).toBe(StatusCodes.OK);
    expect(res.body).toEqual({ route: 'updateUser' });
  });
});
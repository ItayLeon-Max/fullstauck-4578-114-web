"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("./auth"));
const http_status_codes_1 = require("http-status-codes");
// mock ל־controllers
jest.mock('../../controllers/auth/controller', () => ({
    getAllUsers: (_req, res) => res.status(200).json({ route: 'getAllUsers' }),
    login: (_req, res) => res.status(200).json({ route: 'login' }),
    register: (_req, res) => res.status(200).json({ route: 'register' }),
    deleteUser: (_req, res) => res.status(200).json({ route: 'deleteUser' }),
    updateUser: (_req, res) => res.status(200).json({ route: 'updateUser' }),
}));
// mock ל־middleware validation
jest.mock('../../middlewares/validation', () => () => (_req, _res, next) => next());
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/auth', auth_1.default);
describe('Auth Router', () => {
    test('GET /auth/', async () => {
        const res = await (0, supertest_1.default)(app).get('/auth/');
        expect(res.status).toBe(http_status_codes_1.StatusCodes.OK);
        expect(res.body).toEqual({ route: 'getAllUsers' });
    });
    test('POST /auth/login', async () => {
        const res = await (0, supertest_1.default)(app)
            .post('/auth/login')
            .send({ username: 'a', password: 'b' });
        expect(res.status).toBe(http_status_codes_1.StatusCodes.OK);
        expect(res.body).toEqual({ route: 'login' });
    });
    test('POST /auth/register', async () => {
        const res = await (0, supertest_1.default)(app)
            .post('/auth/register')
            .send({ name: 'User', username: 'u', password: 'p', email: 'a@b.com', role: 'user' });
        expect(res.status).toBe(http_status_codes_1.StatusCodes.OK);
        expect(res.body).toEqual({ route: 'register' });
    });
    test('DELETE /auth/:id', async () => {
        const res = await (0, supertest_1.default)(app).delete('/auth/123');
        expect(res.status).toBe(http_status_codes_1.StatusCodes.OK);
        expect(res.body).toEqual({ route: 'deleteUser' });
    });
    test('PUT /auth/:id', async () => {
        const res = await (0, supertest_1.default)(app)
            .put('/auth/123')
            .send({ name: 'Updated', username: 'u', password: 'p', email: 'a@b.com', role: 'admin' });
        expect(res.status).toBe(http_status_codes_1.StatusCodes.OK);
        expect(res.body).toEqual({ route: 'updateUser' });
    });
});

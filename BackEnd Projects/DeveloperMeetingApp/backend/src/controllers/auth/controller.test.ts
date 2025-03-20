import config from 'config'
import { getAllUsers, hashPassword } from './controller'
import { Request, Response, NextFunction } from 'express';
import User from '../../models/user';
import AppError from '../../errors/app-error';
import { StatusCodes } from 'http-status-codes';

// Test suite for hashPassword
describe('hashPassword', () => {
    test('should hash password correctly', () => {
        // Arrange
        const password = 'password'
        const secret = config.get<string>('app.secret')

        // Act
        const result1 = hashPassword(password)
        const result2 = hashPassword(password) 

        // Assert
        expect(result1).not.toBe(password) 
        expect(result1).toHaveLength(64) 
        expect(result1).toMatch(/^[a-f0-9]{64}$/) 
        expect(result1).toBe(result2) 
    })
})

// Test suite for getAllUsers
jest.mock('../../models/user', () => {
    return {
        __esModule: true,
        default: {
            findAll: jest.fn()
        }
    };
});

describe('getAllUsers', () => {
    let req: Partial<Request>;
    let res: Partial<Response>;
    let next: NextFunction;

    beforeEach(() => {
        req = {};
        res = {
            json: jest.fn()
        };
        next = jest.fn();
    });

    test('should return all users when User.findAll resolves successfully', async () => {
        const mockUsers = [
            {
                id: '550e8400-e29b-41d4-a716-446655440000',
                name: 'Alice',
                userName: 'alice123',
                password: 'hashedpassword',
                email: 'alice@example.com',
                role: 'user',
                tasks: []
            },
            {
                id: '550e8400-e29b-41d4-a716-446655440001',
                name: 'Bob',
                userName: 'bob456',
                password: 'hashedpassword',
                email: 'bob@example.com',
                role: 'admin',
                tasks: []
            }
        ];
        (User as any).findAll.mockResolvedValue(mockUsers);
        await getAllUsers(req as Request, res as Response, next);
        expect(User.findAll).toHaveBeenCalledTimes(1);
        expect(res.json).toHaveBeenCalledWith(mockUsers);
    });

    test('should handle errors and call next with an AppError', async () => {
        const errorMessage = 'Database error';
        (User as any).findAll.mockRejectedValue(new Error(errorMessage));
        await getAllUsers(req as Request, res as Response, next);

        const errorInstance = (next as jest.Mock).mock.calls[0][0];

        expect(next).toHaveBeenCalledTimes(1);
        expect(errorInstance).toBeInstanceOf(Error);
        expect(errorInstance.message).toBe(errorMessage);
    });
});

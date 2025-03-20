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


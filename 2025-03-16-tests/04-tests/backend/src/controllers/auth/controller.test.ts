import { v4 } from "uuid";
import { hashPassword, login } from "./controller";

describe('hashPassword', () => {
    test('should hash the password', () => {
        const result = hashPassword(v4())
        expect(result).toBeDefined()
        expect(result.length).toBe(64)
    })
    test('generates the same hash for the same password', () => {
        const input = v4()
        const result1 = hashPassword(input)
        const result2 = hashPassword(input)
        expect(result1).toEqual(result2)
    })
    test('generates different hash for different passwords', () => {
        const password1 = v4()
        const password2 = v4()
        const result1 = hashPassword(password1)
        const result2 = hashPassword(password2)
        expect(result1).not.toEqual(result2)
    })
    test('generate a given hash for a given password + secret', () => {
        const hash = hashPassword('123456')
        expect(hash).toBe('7f7737fddd2842bc2afdbf1868aaa8e986b83133a1f010fe96535c15e4584628')
    })
})

jest.mock('jsonwebtoken', () => ({
    sign: jest
        .fn()
        .mockImplementationOnce(() => 'jwt1')
        .mockImplementationOnce(() => 'jwt2')
}))

jest.mock('../../models/user', () => ({ findOne: jest.fn() }))

describe('login', () => {
    const req = { body: { username: 'user1', password: '123456' } }
    const res = { json: jest.fn() }
    const next = jest.fn()
    const user = { get: jest.fn().mockReturnValue({ id: 1, username: 'user1' }) }
    const findOne = require('../../models/user').findOne
})




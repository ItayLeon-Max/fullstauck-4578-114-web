import { Request, Response } from "express"
import enforceAuth from "./enforce-auth"
import AppError from "../errors/app-error"
import { StatusCodes } from "http-status-codes"
import { sign } from "jsonwebtoken"
import user from "../models/user"
import config from "config"

describe('enforceAuth middlewares test', () => {
    test('calls next with a 401 error when no authorization header is present', () => {
        const req = { headers: {} } as Request
        const res = {} as Response
        const next = jest.fn((err) => {})
        enforceAuth(req, res, next)
        expect(next.mock.calls.length).toBe(1)
        expect(next.mock.calls[0][0]).toEqual(new AppError(StatusCodes.UNAUTHORIZED, 'missing authorization header'))

    })
    test('calls next with a 401 error when no space between Bearer and token', () => {
        const req = {headers: {
            authorization: 'Bearer1234'
        }} as Request
        const res = {} as Response
        const next = jest.fn((err) => {})
        enforceAuth(req, res, next)
        expect(next.mock.calls.length).toBe(1)
        expect(next.mock.calls[0][0]).toEqual(new AppError(StatusCodes.UNAUTHORIZED, 'bad authorization header'))
    })
    test('calls next with a 401 error when no space between Bearer keyword is misspelled', () => {
        const req = {headers: {
            authorization: 'Bearerr 1234'
        }} as Request
        const res = {} as Response
        const next = jest.fn((err) => {})
        enforceAuth(req, res, next)
        expect(next.mock.calls.length).toBe(1)
        expect(next.mock.calls[0][0]).toEqual(new AppError(StatusCodes.UNAUTHORIZED, 'bad authorization header'))
    })
    test('success when all is valid', () => {
        const jwt = sign({},config.get<string>('app.jwtSecret'))
        
        const req = {headers: {
            authorization: `Bearer ${jwt}`
        }} as Request
        const res = {} as Response
        const next = jest.fn((err) => {})
        enforceAuth(req, res, next)
        expect(next.mock.calls.length).toBe(1)
        expect(next.mock.calls[0][0]).toBeUndefined()
    })
})
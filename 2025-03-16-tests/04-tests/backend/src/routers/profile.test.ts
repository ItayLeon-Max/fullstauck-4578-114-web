import { sign } from "jsonwebtoken"
import app, { start } from "../app"
import request from 'supertest'
import config from 'config'


describe('profile router test', () => {
    describe('/ endpoint test', () => {
        test('it should return an array of posts', async () => {
            await start()
            const result = await request(app).get('/profile')
            expect(result.statusCode).toBe(200)
        })
        test('it should return 401 if not auth', async () => {
            await start()
            const jwt = sign({id: '7f7737fddd2842bc2afdbf1868aaa8e986b83133a1f010fe96535c15e4584628'}, config.get<string>('app.jwtSecret'))
            const result = await request(app)
                    .get('/profile')
                    .set({"authorization": `Bearer ${jwt}`})
            expect(result.statusCode).toBe(401)
            expect(Array.isArray(result.body)).toBeTruthy()
        })
    })
})
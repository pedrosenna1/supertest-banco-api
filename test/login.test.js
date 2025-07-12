const request = require('supertest')
const {expect} = require('chai')
const postLogin = require('../fixtures/postLogin.json')

describe('login',()=>{
    describe('POST', () => {
        it('deve retornar 200 com um token em string quando usar credenciais validas', async () =>{
            const bodyLogin = {...postLogin}
            const response = await request('http://localhost:3000')
                .post('/login')
                .set('content-type','application/json')
                .send(bodyLogin)
            
            expect(response.status).to.eq(200)
            expect(response.body.token).to.be.a('string')
            

        })  



    })



})
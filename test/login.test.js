const request = require('supertest')
const {expect} = require('chai')

describe('login',()=>{
    describe('POST', () => {
        it('deve retornar 200 com um token em string quando usar credenciais validas', async () =>{
            const response = await request('http://localhost:3000')
                .post('/login')
                .set('content-type','application/json')
                .send({
                        "username": "julio.lima",
                        "senha": "123456"
                    })
            
            expect(response.status).to.eq(200)
            expect(response.body.token).to.be.a('string')
            

        })



    })



})
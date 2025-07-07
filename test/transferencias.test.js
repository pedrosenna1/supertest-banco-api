const request = require('supertest')
const {expect} = require('chai')

describe('transferencias', () =>{
    let token
    describe('GET', () =>{
        it('testes para verificar se o status é 200 para retornar todas as transferencias', async () =>{
            const responseAuth = await request('http://localhost:3000')
                            .post('/login')
                            .set('content-type','application/json')
                            .send({
                                    "username": "julio.lima",
                                    "senha": "123456"
                                })
                        
            token = responseAuth.body.token
            const response = await request('http://localhost:3000')
                .get('/transferencias')
                .set('Authorization', `Bearer ${token}`)
                expect(response.status).to.eq(200)
                


        })
        it('testes para verificar se retorna as transferencias', async () =>{
            const responseAuth = await request('http://localhost:3000')
                            .post('/login')
                            .set('content-type','application/json')
                            .send({
                                    "username": "julio.lima",
                                    "senha": "123456"
                                })
                        
            token = responseAuth.body.token
            const response = await request('http://localhost:3000')
                .get('/transferencias')
                .set('Authorization', `Bearer ${token}`)
                expect(response.status).to.eq(200)
                expect(response.body).to.property('transferencias')
                expect(response.body.transferencias.length).to.be.greaterThan(1)


        })



    })
    describe('POST',() =>{
        it('realizar transferencia',async () => {
            const response = await request('http://localhost:3000')
                .post('/transferencias')
                .set('authorization',`Bearer ${token}`)
                .send({
                    "contaOrigem": 1,
                    "contaDestino": 2,
                    "valor": 20.00,
                    "token": ""
                })
                expect(response.status).to.eq(201)
                expect(response.body.message).to.have.include('Transferência realizada com sucesso.')
                              





        })



    })

})
const request = require('supertest')
const {expect} = require('chai')
require('dotenv').config()
const {pegarToken} = require('../helpers/autenticacao')
const posTransferencias = require('../fixtures/postTransferencias.json')


describe('transferencias', () =>{
    let token
    beforeEach(async()=>{token = await pegarToken('julio.lima','123456')})
    describe('GET', () =>{
        
        it('testes para verificar se o status é 200 para retornar todas as transferencias', async () =>{
            
            const response = await request(process.env.BASE_URL)
                .get('/transferencias')
                .set('Authorization', `Bearer ${token}`)
                expect(response.status).to.eq(200)
        })

        it('testes para verificar se retorna as transferencias', async () =>{
            const response = await request(process.env.BASE_URL)
                .get('/transferencias')
                .set('Authorization', `Bearer ${token}`)
                expect(response.status).to.eq(200)
                expect(response.body).to.property('transferencias')
                expect(response.body.transferencias.length).to.be.greaterThan(1)
        })



    })

    describe('POST',() =>{
        it('realizar transferencia e verrificar se o status é 201 e o texto de mensagem esta correto', async () => {
            const response = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('authorization',`Bearer ${token}`)
                .send({...posTransferencias, valor: 12})
                expect(response.status).to.eq(201)
                expect(response.body.message).to.have.include('Transferência realizada com sucesso.')


        })



    })

    describe('GET /transferencias',()=>{
        it('Verificar get transferencias',async ()=>{
            const limitePagina = 10
            const pageResultados = 1
            const resposta = await request('http://localhost:3000')
                .get(`/transferencias?page=${pageResultados}&limit=${limitePagina}`)
                .set({Accept:'application/json',
                    Authorization: `Bearer ${token}`
                })

                expect(resposta.body.transferencias.length).to.eq(limitePagina)
                expect(resposta.body.page).to.eq(pageResultados)
                expect(resposta.body.transferencias).to.have.lengthOf(10)
            


        })


    })

})
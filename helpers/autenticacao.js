const request = require('supertest')
const {expect} = require('chai')
require('dotenv').config()

const pegarToken = async (usuario,senha) => {
    const responseAuth = await request(process.env.BASE_URL)
        .post('/login')
        .set('content-type','application/json')
        .send({
                "username": usuario,
                "senha": senha
        })
                        
return responseAuth.body.token


}

module.exports = {pegarToken}
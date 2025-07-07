const request = require('supertest')
const {expect} = require('chai')
require('dotenv').config()
const postLogin = require('../fixtures/postLogin.json')

const pegarToken = async (usuario,senha) => {
    const bodyLogin = {...postLogin}
    const responseAuth = await request(process.env.BASE_URL)
        .post('/login')
        .set('content-type','application/json')
        .send(bodyLogin)
                        
return responseAuth.body.token


}

module.exports = {pegarToken}
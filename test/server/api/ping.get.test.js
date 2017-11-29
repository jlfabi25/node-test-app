const superagent = require('supertest')
const {app} = require('../../../server')
const request = () => superagent(app())
const expect = require('chai').expect
const testHelper = require('../../test-helper')
testHelper.setUpAPITests()

const path = '/api/ping'
const method = 'GET'
describe(`${method} ${path}`, () => {
  it('returns an Http Status 200', () => {
    return request()
      .get(path)
      .expect(200)
      .then((res) => {
        expect(res.body.message).to.equal('pong')
      })
  })
})

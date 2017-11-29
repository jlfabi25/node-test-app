const superagent = require('supertest')
const {app} = require('../../../server')
const request = () => superagent(app())
const expect = require('chai').expect
const testHelper = require('../../test-helper')
testHelper.setUpAPITests()

const path = '/api/todo'
const method = 'GET'
var todoId = ''
describe(`${method} ${path}`, () => {
  describe(`success`, () => {
    before(() => {
      return request()
    .post(path)
    .send({title: 'foo', status: 'open', startDate: '2017-11-28'})
    .expect(201)
    .then((res) => {
      todoId = res.body.id
    })
    })
    it('returns a 200 success and a todo object', () => {
      return request()
      .get(path + `/${todoId}`)
      .expect(200)
      .then((res) => {
        expect(res.body.title).to.equal('foo')
        expect(res.body.status).to.equal('open')
      })
    })
  })
  describe(`errors`, () => {
    it('returns a 404 Not Found when ToDo is not found', () => {
      return request()
        .get(path + `/foo`)
        .expect(404)
        .then((res) => {
          expect(res.body.message).to.equal('Todo foo Not Found')
        })
    })
  })
})

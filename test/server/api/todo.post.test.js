const superagent = require('supertest')
const { app } = require('../../../server')
const request = () => superagent(app())
const expect = require('chai').expect
const testHelper = require('../../test-helper')
testHelper.setUpAPITests()

const path = '/api/todo'
const method = 'POST'

describe(`${method} ${path}`, () => {
  describe(`success`, () => {
    it('returns a 201 created with a todo object id', () => {
      return request()
                .post(path)
                .send({ title: 'foo', status: 'inprogress', startDate: '2017-11-28' })
                .expect(201)
                .then((res) => {
                  expect(res.body.id).to.be.a('string')
                  var todoId = res.body.id
                  return request()
                  .get(path + `/${todoId}`)
                  .expect(200)
                  .then((res) => {
                    expect(res.body.title).to.equal('foo')
                    expect(res.body.status).to.equal('inprogress')
                  })
                })
    })
    it('returns a 201 created with a todo object id and a status of `open` when none is provided', () => {
      return request()
                  .post(path)
                  .send({ title: 'bar', startDate: '2017-11-28' })
                  .expect(201)
                  .then((res) => {
                    expect(res.body.id).to.be.a('string')
                    var todoId = res.body.id
                    return request()
                    .get(path + `/${todoId}`)
                    .expect(200)
                    .then((res) => {
                      expect(res.body.title).to.equal('bar')
                      expect(res.body.status).to.equal('open')
                    })
                  })
    })
  })
  describe(`errors`, () => {
    it('returns a 400 bad request went title is not provided', () => {
      return request()
                .post(path)
                .send({ status: 'open', startDate: '2017-11-28' })
                .expect(400)
                .then((res) => {
                  expect(res.body).to.deep.equal({ message: { code: 400, error: 'should have required property \'title\'' } })
                })
    })
    it('returns a 400 bad request went start date is not provided', () => {
      return request()
                .post(path)
                .send({ title: 'foo', status: 'open' })
                .expect(400)
                .then((res) => {
                  expect(res.body).to.deep.equal({ message: { code: 400, error: 'should have required property \'startDate\'' } })
                })
    })
    it('returns a 400 bad request went an invalid status is  provided', () => {
      return request()
                .post(path)
                .send({ title: 'foo', status: 'foo', startDate: '2017-11-28' })
                .expect(400)
                .then((res) => {
                  expect(res.body).to.deep.equal({ message: { code: 400, error: 'should be equal to one of the allowed values' } })
                })
    })
  })
})

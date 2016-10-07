/* globals describe, it */
require('should')
const superagent = require('supertest')
const sinon = require('sinon')
const appFactory = require('../app/app')
const app = appFactory({
  express: {}
})
const request = () => superagent(app.listen())


const sandbox = sinon.sandbox.create()

describe('node test app - ping end point', () => {
  describe('PING', () => {
    it('should 200: OK', (done) => request()
      .get('/api/ping')
      .expect(200)
      .expect((res) => {
        res.body.operationStatus.statusCode.should.equal(0)
        res.body.data.should.equal('pong')
      })
      .end(done))
  })
})

describe('AddTodo', () => {
  it('should 404: Not Found', (done) => request()
    .get('/api/todo')
    .expect(404)
    .expect((res) => {
      res.body.operationStatus.statusCode.should.equal(0)
      res.body.data.should.deepEqual({})
    })
    .end(done))

  it('should 404: Not Found', (done) => request()
    .put('/api/todo')
    .expect(404)
    .expect((res) => {
      res.body.operationStatus.statusCode.should.equal(0)
      res.body.data.should.deepEqual({})
    })
    .end(done))
  it('should 202: Accepted', (done) => {
    request()
      .post('/api/todo')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .send({})
      .expect(202)
      .expect((res) => {
        res.body.operationStatus.statusCode.should.equal(0)
        res.body.operationStatus.errors.length.should.equal(0)
        res.body.data.should.deepEqual(['To Do Added'])
      })
      .end((err, res) => {
        if (err) return done(err)
        sandbox.restore()
        done()
      })
  })
})





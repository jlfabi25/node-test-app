const setUpAPITests = () => {
  process.env.NODE_ENV = 'test'
  process.env.PORT = 3000
}

module.exports = {setUpAPITests}

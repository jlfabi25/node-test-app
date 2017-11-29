
const uuidv1 = require('uuid/v1')
const create = (values) => {
  return {
    id: uuidv1(),
    title: values.title,
    status: values.status ? values.status : 'open',
    startDate: values.startDate,
    endDate: values.endDate

  }
}
module.exports = {create}

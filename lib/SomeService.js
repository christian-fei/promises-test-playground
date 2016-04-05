var Promise = require('bluebird')

module.exports = {
  doSomething: Promise.promisify(doSomething)
}

function doSomething(id, callback) {
  callback(null, {id:id})
}

var Promise = require('bluebird')

module.exports = {
  getSomething: Promise.promisify(getSomething)
}

function getSomething(id, callback) {
  callback(null, {id:id})
}

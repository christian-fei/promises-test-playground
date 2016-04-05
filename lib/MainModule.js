var SomeRepository = require('./SomeRepository')
var SomeService = require('./SomeService')

module.exports = {
  execute:execute
}

function execute(id) {
  return SomeRepository.getSomething(id)
  .then(SomeService.doSomething)
}

var SomeService = require('../lib/SomeService')
var SomeRepository = require('../lib/SomeRepository')
var MainModule = require('../lib/MainModule')

var expect = require('chai').expect
var sinon = require('sinon')

describe('MainModule', function () {
  it('gets something from repository', function () {
    var mockSomeRepository = sinon.mock(SomeRepository)
    mockSomeRepository.expects('getSomething').returns(Promise.resolve({id:1})).once()

    MainModule.execute()

    mockSomeRepository.verify()
    mockSomeRepository.restore()
  })

  it('calls service after getting something', function (done) {
    var stubGetSomething = sinon.stub(SomeRepository, 'getSomething', function(){
      return Promise.resolve({id:1})
    })
    var mockSomeService = sinon.mock(SomeService)
    mockSomeService.expects('doSomething').returns(Promise.resolve({id:1})).once()

    MainModule.execute().then(function(){
      done()
    })

    mockSomeService.verify()
    mockSomeService.restore()
  })
})

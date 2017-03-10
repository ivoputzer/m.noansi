/* global test */

const {ok} = require('assert')

test('module.exports', function () {
  const exports = require('../..')
  test('is of type stream.Transform', function () {
    ok(exports instanceof require('stream').Transform)
  })
  test('exports `regex` property', function () {
    ok(exports.hasOwnProperty('regex'))
  })
  test('exports `noansi` function', function () {
    ok(exports.hasOwnProperty('noansi'))
  })
})

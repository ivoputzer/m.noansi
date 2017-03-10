/* global test */

const {equal} = require('assert')
const {noansi} = require('..')

test('removes ansi color codes from a given string', function () {
  const escaped = '\u001b[0m\u001b[4m\u001b[42m\u001b[31mfoo\u001b[39m\u001b[49m\u001b[24mbar\u001b[0m'
  equal(noansi(escaped), 'foobar')
})

test('removes ansi colors from `ls` command', function () {
  const escaped = '\u001b[00;38;5;244m\u001b[m\u001b[00;38;5;33mfoo\u001b[0m'
  equal(noansi(escaped), 'foo')
})
test('removes reset;setfg;setbg;italics;strike;underline ansi sequences from a given string', function () {
  const escaped = '\x1b[0;33;49;3;9;4mbar\x1b[0m'
  equal(noansi(escaped), 'bar')
})

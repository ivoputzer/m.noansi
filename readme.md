m.noansi
===
**[m(icro)](https://github.com/ivoputzer/m.cro#readme)[noansi](https://github.com/ivoputzer/m.noansi)** is a lightweight es6+ library that removes [ansi escape codes](https://en.wikipedia.org/wiki/ANSI_escape_code).

[![travis](https://img.shields.io/travis/ivoputzer/m.noansi.svg?style=for-the-badge)](https://travis-ci.org/ivoputzer/m.noansi)
[![dependencies](https://img.shields.io/badge/dependencies-none-blue.svg?style=for-the-badge&colorB=44CC11)](package.json)
[![linter](https://img.shields.io/badge/coding%20style-standard-brightgreen.svg?style=for-the-badge)](http://standardjs.com/)
[![coverage](https://img.shields.io/coveralls/ivoputzer/m.noansi.svg?style=for-the-badge)](https://coveralls.io/github/ivoputzer/m.noansi?branch=master)

[![node](https://img.shields.io/badge/node-6%2B-blue.svg?style=for-the-badge)](https://nodejs.org/docs/v6.0.0/api)
[![version](https://img.shields.io/npm/v/m.noansi.svg?style=for-the-badge&colorB=007EC6)](https://www.npmjs.com/package/m.noansi)
[![minzip](https://img.shields.io/bundlephobia/minzip/m.noansi.svg?style=for-the-badge)](https://www.npmjs.com/package/m.noansi)
[![license](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge&colorB=007EC6)](https://spdx.org/licenses/MIT)

### stream replacement
the module itself exports a [transform](https://nodejs.org/api/stream.html#stream_class_stream_transform) [stream](https://nodejs.org/api/stream.html) that can be used according to its api.
```javascript
const noansi = require('m.noansi')

process.stdin.pipe(noansi).pipe(process.stdout)
```

### string replacement
the `noansi` method is used internally within the transform stream but can be used safely to replace string and buffers.
```javascript
const {noansi} = require('m.noansi')

noansi('\u001b[4mfoobar\u001b[0m') // => 'foobar'
```

### cli usage
when installed globally both `m.noansi` and `noansi` binaries are linked and can therefore be used:
```sh
npm --global install m.noansi

which noansi
echo "\u001b[4mfoobar\u001b[0m" | noansi # echo "foobar"

which m.noansi
echo "\u001b[4mfoobar\u001b[0m" | m.noansi # echo "foobar"
```

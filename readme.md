# m.noansi
[![travis](https://img.shields.io/travis/ivoputzer/m.noansi.svg?style=flat-square)](https://travis-ci.org/ivoputzer/m.noansi) [![npm-dependencies](https://img.shields.io/badge/dependencies-none-blue.svg?style=flat-square&colorB=44CC11)](package.json) [![standard-js](https://img.shields.io/badge/coding%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/) [![npm-package-quality](http://npm.packagequality.com/shield/m.noansi.svg?style=flat-square&colorB=44CC11)](http://packagequality.com/#?package=m.noansi) [![npm-node-version](https://img.shields.io/badge/node-6%2B-blue.svg?style=flat-square)](https://nodejs.org/docs/v6.0.0/api) [![npm-version](https://img.shields.io/npm/v/m.noansi.svg?style=flat-square&colorB=007EC6)](https://www.npmjs.com/package/m.noansi) [![npm-license](https://img.shields.io/npm/l/m.noansi.svg?style=flat-square&colorB=007EC6)](https://spdx.org/licenses/MIT)

**[m(icro)](https://github.com/ivoputzer/m.cro#readme)[noansi](https://github.com/ivoputzer/m.noansi)** is a lightweight es6+ library that removes ansi escape codes.

### usage
once installed the module can be used as a regular transform stream.

```javascript
const noansi = require('m.noansi')

process.stdin.pipe(noansi).pipe(process.stdout)
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

module.exports = require('stream').Transform({
  transform (data, _, next) {
    next(null, module.exports.noansi(data))
  }
})
module.exports.regex = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g
module.exports.noansi = function (data) {
  return data.toString().replace(module.exports.regex, '')
}

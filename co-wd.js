var thunkify = require('thunkify')
  , wd = require('wd')

  , commands = Object.keys(require('wd/lib/commands'))

  , wrap = function (browser) {
      return commands.reduce(function (obj, fn) {
        obj[fn] = thunkify(browser[fn].bind(browser))

        return obj
      }, {})

    }

module.exports = {
  remote: function () {
    return wrap(wd.remote.apply(wd, arguments))
  }
}

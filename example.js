var co = require('co')
  , wd = require('./co-wd')

co(function* () {
  var browser = wd.remote('http://localhost:9515')

  yield browser.init()
  yield browser.get('http://google.com')

  console.log(yield browser.title())

  yield browser.quit()
})()

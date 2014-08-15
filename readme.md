# co-wd

co-compatible interface to the wd.js library (webdriver)

[![NPM](https://nodei.co/npm/co-wd.png?downloads&stars)](https://nodei.co/npm/co-wd/)

[![NPM](https://nodei.co/npm-dl/co-wd.png)](https://nodei.co/npm/co-wd/)

## Example

```js

var co = require('co')
  , wd = require('co-wd')

co(function* () {
  var browser = wd.remote('http://localhost:9515')

  yield browser.init()
  yield browser.get('http://google.com')

  console.log(yield browser.title())

  yield browser.quit()
})()

```

## Installation

```
npm install co-wd
```

## Licence

Copyright (c) 2014 Mic Network, Inc

This software is released under the MIT license:

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

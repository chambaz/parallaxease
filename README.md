# 😎 Parallaxease 😎

An easing parallax library, [check out the demo](https://parallaxease-ldumrwjimx.now.sh/).

**Installation**

Install library with npm

```
$ npm install --save parallaxease
```

Import and instantiate library, requires jQuery.

```
var Parallaxease = require('./parallaxease')

$(function() {
  // trigger effect using min-width media query
  new Parallaxease({
    breakpoint: '768px'
  })
})
```

**Contribute**

Clone respository and run locally, [check out the demo](https://parallaxease-ldumrwjimx.now.sh/).

```
# install dependencies
$ npm install

# compile example code
$ npm run build

# run example
$ npm start
```

🌎 server running on http://localhost:9000/

// require http, routing modules
const http = require('http')
const routes = require('patterns')()
const st = require('st')

// serve static files in current working directory
const staticDir = st({
  path: `${__dirname}/public`,
  url: '/',
  index: 'index.html'
})

// test route
routes.add('GET /test', (req, res) => {
  res.setHeader('Content-Type', 'text/html')
  res.end('<h1>HackPlate - Test Route</h1>')
})

// create server
const server = http.createServer((req, res) => {
  // match routes
  const match = routes.match(`${req.method} ${req.url}`)

  // route handler found so run
  if (match) {
    const fn = match.value
    req.params = match.params
    fn(req, res)

  // otherwise static file
  } else {
    staticDir(req, res)
  }
})

// listen for http request on port 9000
server.listen(9000, () => {
  console.log('🤘 Server is running on http://localhost:9000 🤘')
})

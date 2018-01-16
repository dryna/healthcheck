const http = require('http')
const port = 9200 || process.env.PORT

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Healthy')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('ERROR running the server', err)
  }

  console.log(`server is listening on ${port}`)
})

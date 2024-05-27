const http = require('http')

const server = http.createServer ((request, response) =>
{
      if (request.url == '/user')
        {
            if (request.method == 'GET')
                console.log('Select')
            else if (request.method == 'POST')
                console.log('Insert')
            else if (request.method == 'PUT')
                console.log('Update')
            else if (request.method == 'DELETE')
                console.log('Delete')
        }
        response.end('Success!')
})

server.listen(4000,'0.0.0.0', () => {
    console.log('server started on port 4000')
})
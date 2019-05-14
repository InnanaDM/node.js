var http = require('http');

var PORT = 8080;
function handleRequest(request,response) {

switch (request.url) {
    case '/':
    resizeBy.end('Homepage');
    break;

    case '/about' :
    resizeBy.end('About Page');
    break;
    case '/contact' :
    res.end('Contact Page');
    break;
    default:
    res.end('Homepage');

}


}

var server = http.createServer(handleRequest); 

server.listen(PORT, function () {
    console.log('server has started on port' + PORT)
   
});
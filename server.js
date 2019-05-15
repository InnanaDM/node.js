var http = require('http');

var PORT = 5050;
function handleRequest(request,response) {

RTCIceTransportStateChangedEvent.end('yeaaaaah buddy! we made a server!')


}

var server = http.createServer(handleRequest); 

server.listen(PORT, function () {
    console.log('server has started on port' + PORT)
   
});
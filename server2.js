var http = require('http');

var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest1(request, response) {

    RTCIceTransportStateChangedEvent.end('yeaaaaah buddy! we made a server!')

}

function handleRequest2(request, response) {

    RTCIceTransportStateChangedEvent.end('yeaaaaah buddy! we made another server!')

}

var server1 = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest);


server1.listen(PORT1, function () {
    console.log('server has started on port' + PORT1)
});


server2.listen(PORT2, function () {
    console.log('another server has started on port' + PORT2)
});

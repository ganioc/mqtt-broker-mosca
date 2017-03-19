'use strict';

var Mosca = require('mosca');

var TOPIC_GATEWAY_MESSAGE = 'smartgarden/message';
var TOPIC_GATEWAY_STATUS  = 'smartgarden/status';


//console.log('Hello');

var settings = {
    port:1883
};

var server = new Mosca.Server(settings);

server.on('clientConnected', function(client){
    console.log('client connected ', client.id);
});

server.on('ready',function(){
    console.log('Mosca server is running');
});

server.on('published', function(packet, client){
    console.log('Published:'+ packet.topic + ' ' + packet.payload );
});

server.on('subscribed', function(packet, client){
    console.log('Subscribed:'+ packet.topic + ' ' + client.id);
});

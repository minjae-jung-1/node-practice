// this is node syntax?


var express = require('express');
// importing express

var app= express();
var server =app.listen(3000);

app.use(express.static('public'));

var socket= require('socket.io');
//importing sockets

var io= socket(server);

io.sockets.on("connection", newConnection);

function newConnection(socket){
    console.log("newConnection:" + socket.id);

    socket.on('mouse', mouseMsg);

    function mouseMsg(data){
        socket.broadcast.emit('mouse' , data);
        console.log(data);
    }
}

console.log("Its running")
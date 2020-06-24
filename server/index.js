var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3030;

app.get('/', function (req, res) {
  res.sendFile('/public/index.html');
});

io.on('connection', function (socket) {
  io.emit('dataSocket', {
    totalClient: socket.client.conn.server.clientsCount,
    socketId: socket.id
  });

});

http.listen(port, function () {
  console.log('listening on *:' + port);
});

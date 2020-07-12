var app = require("express")();
var http = require("http").Server(app);
var p2p = require('socket.io-p2p-server').Server;
var io = require("socket.io")(http);
var port = process.env.PORT || 3030;
var user = require("./ChatRoom");

io.use(p2p);
io.on("connection", function (socket) {
  let totalConnection = socket.client.conn.server.clientsCount;
  let arrayUser = user.arrayUser;
  socket.emit("dataSocket", {
    totalClient: socket.client.conn.server.clientsCount,
    dataCurrentConnection: arrayUser[totalConnection - 1],
  });
  socket.on("allClient", function (data) {
    io.emit("Message", data); // gửi cho tất cả client
  });
  socket.on('peer-msg', function (data) {
    console.log('Message from peer: %s', data)
    io.emit('peer-msg', data)
  })

  socket.on('disconnect', function () {
    console.log('disconnected to server');
  });
});


http.listen(port, function () {
  console.log("listening on *:" + port);
});
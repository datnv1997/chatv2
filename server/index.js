var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var port = process.env.PORT || 3030;
var user = require("./ChatRoom");

// app.get("/", function (req, res) {
//   res.sendFile("/public/index.html");
// });
io.on("connection", function (socket) {
  let totalConnection = socket.client.conn.server.clientsCount;
  console.log(totalConnection);
  console.log(socket.id);
  let arrayUser = user.arrayUser;
  socket.emit("dataSocket", {
    totalClient: socket.client.conn.server.clientsCount,
    dataCurrentConnection: arrayUser[totalConnection - 1],
  });
  socket.on("allClient", function (data) {
    io.emit("Message", data); // gửi cho tất cả client
  });
  socket.on('disconnect', function () {
    console.log('disconnected to server');
  });
});


http.listen(port, function () {
  console.log("listening on *:" + port);
});

var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var port = process.env.PORT || 3030;

// app.get("/", function (req, res) {
//   res.sendFile("/public/index.html");
// });

io.on("connection", function (socket) {
  io.emit("dataSocket", {
    totalClient: socket.client.conn.server.clientsCount,
    socketId: socket.id,
  });
  socket.on("all client", function (data) {
    console.log(data);
    io.emit("Message", data); // gửi cho tất cả client
    // console.log(data);
  });
});

http.listen(port, function () {
  console.log("listening on *:" + port);
});

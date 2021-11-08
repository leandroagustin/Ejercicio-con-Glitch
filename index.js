const express = require("express");
const app = express();
const router = require("./routes/index");

let msn = [];

//Archivos estaticos
app.use(express.static(__dirname + "/public"));
//Server http
const http = require("http");
const server = http.createServer(app);
const port = process.env.PORT || 3003;
//Configuracion de Socket
const { Server } = require("socket.io");
const io = new Server(server);
//Conexion Socket
io.on("connection", (socket) => {
  console.log("Cliente conectado!");
  socket.on("message_client", (data) => {
    console.log(data);
  });
  //Escuchar chat cliente
  socket.on("dataMsn", (data) => {
    msn.push(data);
    // socket.emit("message_back", msn);//abrimos 1 socket.
    io.sockets.emit("message_back", msn); //abrimos 2 sockets
  });
});
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
//Router
app.use("/api", router);

server.listen(port, () => {
  console.log("Server running!");
});

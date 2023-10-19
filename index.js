// Creacion de la app express
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.static("./uploads"));

// Instanciar Core
const _Core = require("./core/core");
const _core = new _Core();

// Creacion del enrutador
const Router_ = require("./router/router");
const router_ = new Router_(app, _core);

// Creacion del servidor web
const server = require("http").Server(app);
const PORT = 3001;

// Creacion del web socket
const options = {
  cors: {
    origin: "http://192.168.0.15:9595",
  },
};
const _SocketIO = require("./core/socketIO");
const _socketIO = new _SocketIO(require("socket.io")(server, options), _core);

// Invocacion del enrutador
router_.matchRoute();

// Invocacion del WebSocket
_socketIO.listenSocket();

// Invocacion del servidor web
server.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});

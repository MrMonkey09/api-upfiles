// Creacion de la app express
const express = require("express");
const app = express();

// Instanciar Core
const _Core = require("./core/core");
const _core = new _Core();

// Instanciar Core
const _DB = require("./core/db");
const _db = new _DB();
const _Models = require("./core/models");
const _models = new _Models(_db);

// Middlewares
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.use(express.static("./uploads"));

const mw_Server = require("./core/Middleware/server.mw");
const mw_server = new mw_Server(_core);
app.use((req, res, next) => mw_server.Request(req, res, next));

// Creacion del enrutador
const Router_ = require("./router/router");
const router_ = new Router_(app, _core, _db);

// Creacion del servidor web
const server = require("http").Server(app);
const PORT = 3001;
const HOSTNAME = "192.168.0.15";

// Creacion del web socket
const options = {
  cors: {
    origin: "*",
  },
};
const _SocketIO = require("./core/socketIO");
const _socketIO = new _SocketIO(require("socket.io")(server, options), _core);

// Invocacion del enrutador
router_.matchRoute();

// Invocacion del WebSocket
_socketIO.listenSocket();

// Invocacion del servidor web
server.listen(PORT, HOSTNAME, () => {
  console.log(
    `Servidor en funcionamiento en ip ${HOSTNAME} y en el puerto ${PORT}`
  );
});

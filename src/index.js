// Generar tablas y datos necesarios
import Models from "./core/models.js";
await Models();

// Creacion de la app express
import express from "express";
const app = express();

import cors from "cors";
app.use(express.json());
app.use(cors());
app.use(express.static("src/uploads"));

// Middlewares
import mw_Server from "./core/Middleware/server.mw.js";
const mw_server = new mw_Server();
app.use((req, res, next) => mw_server.Request(req, res, next));

// Creacion del servidor web
import server from "http";
const http = server.Server(app);
const PORT = 3001;
const HOSTNAME = "192.168.0.24";

// Creacion del web socket
const options = {
  cors: {
    origin: "*",
  },
};
import _SocketIO from "./core/socketIO.js";
import { Server } from "socket.io";
const _socketIO = new _SocketIO(new Server(http, options));

// Invocacion del WebSocket
_socketIO.listenSocket();

// Rutas
import GeneralRoutes from "./routes/general.routes.js";
app.use(GeneralRoutes);
import DepartmentRoutes from "./routes/department.routes.js";
app.use(DepartmentRoutes);
import GroupScreenRoutes from "./routes/group-screen.routes.js";
app.use(GroupScreenRoutes);
import LocationRoutes from "./routes/location.routes.js";
app.use(LocationRoutes);
import ScreenRoutes from "./routes/screen.routes.js";
app.use(ScreenRoutes);
import UserRoutes from "./routes/user.routes.js";
app.use(UserRoutes);
import VideosRoutes from "./routes/video.routes.js";
app.use(VideosRoutes);

// Invocacion del servidor web
http.listen(PORT, HOSTNAME, () => {
  console.log(
    `Servidor en funcionamiento en ip ${HOSTNAME} y en el puerto ${PORT}`
  );
});

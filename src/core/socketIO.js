import { connectedMessageSOCKET } from "./core.js";

class _SocketIO {
  socketIO;

  constructor(io) {
    this.socketIO = io;
  }

  videoTopic(socket) {
    socket.on("video", (res) => {
      const data = res;
      console.log(res);
      socket.to("general").emit("video", res);
    });
  }

  screenTopic(socket) {
    socket.on("screen", (res) => {
      const data = res;
      console.log({res});
      socket.to("general").emit("screen", res);
    });
  }

  groupTopic(socket) {
    socket.on("group", (res) => {
      const data = res;
      console.log(res);
      socket.to("general").emit("group", res);
    });
  }

  contTopic(socket) {
    socket.on("cont", (res) => {
      const data = res;
      console.log(res);
      socket.to("general").emit("group", res);
    });
  }

  socketRoutes = {
    videoTopic: this.videoTopic,
    contTopic: this.contTopic,
    screenTopic: this.screenTopic,
    groupTopic: this.groupTopic,
  };

  socketRouter(socket, routes) {
    routes.videoTopic(socket);
    routes.contTopic(socket);
    routes.screenTopic(socket);
    routes.groupTopic(socket);
  }

  socketInfo(socket) {
    console.log({
      //_events: socket._events,
      //_eventsCount: socket._eventsCount,
      //_maxListeners: socket._maxListeners,
      nsp: socket.nsp,
      client: socket.client,
      //recovered: socket.recovered,
      data: socket.data,
      //socketConnected: socket.connected,
      //acks: socket.acks,
      //fns: socket.fns,
      //flags: socket.flags,
      server: socket.server,
      adapter: socket.adapter,
      id: socket.id,
      handshake: socket.handshake,
    });
  }

  socketConnection(socketIO, socketInfo, socketRouter, socketRoutes) {
    socketIO.on("connection", function (socket) {
      const namespace = socket.nsp;
      const client = socket.client;
      const handshake = socket.handshake;
      const server = socket.server;
      const session = socket.id;
      const query = socket.query;
      //socketInfo(socket);
      connectedMessageSOCKET(client, session);
      const room = "general";
      socket.join(room);
      socketRouter(socket, socketRoutes);
    });
  }

  listenSocket() {
    console.log("Iniciando protocolo WebSocket...");
    const socketInfo = this.socketInfo;
    const socketRouter = this.socketRouter;
    const socketRoutes = this.socketRoutes;
    const socketConnection = this.socketConnection;
    socketConnection(this.socketIO, socketInfo, socketRouter, socketRoutes);
  }
}

export default _SocketIO;

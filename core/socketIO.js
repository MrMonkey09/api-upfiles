class _SocketIO {
  socketIO;
  _core;

  constructor(io, core) {
    this.socketIO = io;
    this._core = core;
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
      console.log(res);
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
      _events: socket._events,
      _eventsCount: socket._eventsCount,
      _maxListeners: socket._maxListeners,
      nsp: socket.nsp,
      client: socket.client,
      recovered: socket.recovered,
      data: socket.data,
      connected: socket.connected,
      acks: socket.acks,
      fns: socket.fns,
      flags: socket.flags,
      server: socket.server,
      adapter: socket.adapter,
      id: socket.id,
      handshake: socket.handshake,
    });
  }

  socketConnection(_core, socketIO, socketInfo, socketRouter, socketRoutes) {
    socketIO.on("connection", function (socket) {
      const handshake = socket.id;
      /* socketInfo(socket); */
      let { user } = socket.handshake.query;
      socket.join("general");
      _core.connectedMessageSOCKET(handshake, user);
      socketRouter(socket, socketRoutes);
    });
  }

  listenSocket() {
    console.log("Iniciando protocolo WebSocket...");
    const socketInfo = this.socketInfo;
    const socketRouter = this.socketRouter;
    const socketRoutes = this.socketRoutes;
    const socketConnection = this.socketConnection;
    socketConnection(
      this._core,
      this.socketIO,
      socketInfo,
      socketRouter,
      socketRoutes
    );
  }
}

module.exports = _SocketIO;

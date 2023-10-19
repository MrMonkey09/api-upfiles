class _SocketIO {
  socketIO;
  
  constructor(io) {
    this.socketIO = io;
  }

  listenSocket() {
    console.log("Iniciando protocolo WebSocket...")
    this.socketIO.on("connection", function (socket) {
      const handshake = socket.id;
      console.log(socket.handshake.query);
      let { user } = socket.handshake.query;
      socket.join("general");
      console.log(
        `Nuevo dispositivo: ${handshake} conectado con el usuario id --> ${user}`
      );
      socket.on("video", (res) => {
        const data = res;
        console.log(res);
        socket.to("general").emit("video", res);
      });
      socket.on("screen", (res) => {
        const data = res;
        console.log(res);
        socket.to("general").emit("screen", res);
      });
      socket.on("group", (res) => {
        const data = res;
        console.log(res);
        socket.to("general").emit("group", res);
      });
      socket.on("cont", (res) => {
        const data = res;
        console.log(res);
        socket.to("general").emit("group", res);
      });
    });
  }
}

module.exports = _SocketIO;

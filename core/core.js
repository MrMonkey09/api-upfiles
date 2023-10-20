class _Core {
  cnCounterHTTP = 0;
  cnCounterSocket = 0;
  newIp = "";

  constructor() {
    console.log("Iniciando Core...");
  }

  ipFormat(ip) {
    this.newIp = "";
    if (ip === "::1") {
      this.newIp = "localhost";
      return this.newIp;
    } else {
      this.newIp = ip.replace("::ffff:", "");
      return this.newIp;
    }
  }

  connectedMessageHTTP(req, res) {
    const ip = this.ipFormat(req.ip);
    this.cnCounterHTTP++;
    let message = {
      Tipo: "HTTP",
      Numero: this.cnCounterHTTP,
      IP: ip,
      "Codigo de Estado": res.statusCode,
      "Ruta solicitada": req.url,
    };
    console.info("Peticion: ", message);
    return message;
  }

  connectedMessageSOCKET(client, session) {
    this.cnCounterSocket++;
    let message = {
      Tipo: "WebSocket",
      Numero: this.cnCounterSocket,
      IP: client.conn.remoteAddress,
      ConexionID: session,
      Dispositivo: client.id,
    };
    console.info("Peticion: ", message);
    return message;
  }
}

module.exports = _Core;

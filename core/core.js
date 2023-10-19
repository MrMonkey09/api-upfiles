class _Core {
  cnCounter = 0;
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
    this.cnCounter++;
    let message = {
      "Peticion N°": this.cnCounter,
      IP: ip,
      "Codigo de Estado": res.statusCode,
    };
    console.info(message);
    return message;
  }

  connectedMessageSOCKET(handshake, user) {
    const message = `Nuevo dispositivo: ${handshake} conectado con el usuario id --> ${user}`;
    console.log(message);
    return message;
  }
}

module.exports = _Core;

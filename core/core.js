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

  connectedMessage(req, res) {
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
}

module.exports = _Core;

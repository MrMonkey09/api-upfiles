class Nucleo {
  cnCounter = 0;
  newIp = "";

  constructor() {}

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

  connectedMessage(ip) {
    this.cnCounter++;
    return console.log(
      "Peticion N°" + this.cnCounter + " IP: " + this.ipFormat(ip)
    );
  }
}

module.exports = Nucleo;

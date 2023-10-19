class Screen_ {
  app;
  _core;

  constructor(app, core) {
    this.app = app;
    this._core = core;
  }

  // Enrutador
  routes() {
    this.root();
  }

  // Rutas raiz
  root() {
    this.app.get("/screen", (req, res) => {
      const ip = this._core.connectedMessageHTTP(req, res).IP;
      console.info(`Pantalla detectada: ${ip}`);
      res.send({ ipScreen: ip });
    });
  }
}

module.exports = Screen_;

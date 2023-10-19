class General_ {
  app;

  constructor(app, core) {
    this.app = app;
    this._core = core;
  }

  // Enrutador
  routes() {
    this.root();
  }

  // Ruta raiz
  root() {
    this.app.get("", (req, res) => {
      res.send(this._core.connectedMessageHTTP(req, res));
    });
  }
}

module.exports = General_;

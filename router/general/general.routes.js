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
    this.app.get("", (req, res, next) => {
      res.send({ "Ruta solicitada": req.url });
    });
  }
}

module.exports = General_;

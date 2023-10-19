class Department_ {
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
    this.app.get("/department", (req, res) => {
      res.send(this._core.connectedMessageHTTP(req, res));
    });
  }
}

module.exports = Department_;

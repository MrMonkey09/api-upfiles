class mw_Server {
  _core;

  constructor(core) {
    this._core = core;
    console.log("Iniciando Server Middleware...");
  }

  Request(req, res, next) {
    this._core.connectedMessageHTTP(req, res);
    next();
  };
}

module.exports = mw_Server;

const screens = require("../../data/screens.data");

class Screen_ {
  app;
  _core;
  screenList;

  constructor(app, core) {
    this.app = app;
    this._core = core;
  }

  // Enrutador
  routes() {
    this.root();
    this.allScreen();
  }

  // Rutas raiz
  root() {
    this.app.get("/screen", (req, res) => {
      const ip = this._core.ipFormat(req.ip);
      console.info(`Pantalla detectada: ${ip}`);
      res.send({ "Ruta solicitada": req.url, ipScreen: ip });
    });
  }

  createScreen() {}

  getScreen() {}

  allScreen() {
    this.app.get("/screen/all", (req, res) => {
      if (this.screenList) {
        res.send({ screens: this.screenList });
      } else {
        this.screenList = screens;
        res.send({ screens: this.screenList });
      }
    });
  }

  updateScreen() {}

  deleteScreen() {}
}

module.exports = Screen_;

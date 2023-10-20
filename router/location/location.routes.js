const locations = require("../../data/locations.data");

class Location_ {
  app;
  _core;
  locationList;

  constructor(app, core) {
    this.app = app;
    this._core = core;
  }

  // Enrutador
  routes() {
    this.root();
    this.allLocation();
  }

  // Rutas raiz
  root() {
    this.app.get("/location", (req, res) => {
      res.send({ "Ruta solicitada": req.url });
    });
  }

  createLocation() {}

  getLocation() {}

  allLocation() {
    this.app.get("/location/all", (req, res) => {
      if (this.locationList) {
        res.send({ locations: this.locationList });
      } else {
        this.locationList = locations;
        res.send({ locations: this.locationList });
      }
    });
  }

  updateLocation() {}

  deleteLocation() {}
}

module.exports = Location_;

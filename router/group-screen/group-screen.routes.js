const groupsScreen = require("../../data/groups-screen.data");

class GroupScreen_ {
  app;
  _core;
  groupScreenList;

  constructor(app, core) {
    this.app = app;
    this._core = core;
  }

  // Enrutador
  routes() {
    this.root();
    this.allGroupScreen();
  }

  // Rutas raiz
  root() {
    this.app.get("/group-screen", (req, res) => {
      res.send({ "Ruta solicitada": req.url });
    });
  }

  createGroupScreen() {}

  getGroupScreen() {}

  allGroupScreen() {
    this.app.get("/group-screen/all", (req, res) => {
      if (this.groupScreenList) {
        res.send({ groupScreenList: this.groupScreenList });
      } else {
        this.groupScreenList = groupsScreen;
        res.send({ groupScreenList: this.groupScreenList });
      }
    });
  }

  updateDepartment() {}

  deleteDepartment() {}
}

module.exports = GroupScreen_;

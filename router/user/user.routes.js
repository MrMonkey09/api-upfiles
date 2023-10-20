const users = require("../../data/users.data");

class User_ {
  app;
  _core;
  userList;

  constructor(app, core) {
    this.app = app;
    this._core = core;
  }

  // Enrutador
  routes() {
    this.root();
    this.allUser();
  }

  // Rutas raiz
  root() {
    this.app.get("/user", (req, res) => {
      res.send({ "Ruta solicitada": req.url });
    });
  }

  createUser() {}

  getUser() {}

  allUser() {
    this.app.get("/user/all", (req, res) => {
      if (this.userList) {
        res.send({ users: this.userList });
      } else {
        this.userList = users;
        res.send({ users: this.userList });
      }
    });
  }

  updateUser() {}

  deleteUser() {}
}

module.exports = User_;

const departments = require("../../data/departments.data");

class Department_ {
  app;
  _core;
  _db;
  departmentList;

  constructor(app, core, db) {
    this.app = app;
    this._core = core;
    this._db = db;
  }

  // Enrutador
  routes() {
    this.root();
    this.allDepartment();
    this.createDepartment();
  }

  // Rutas raiz
  root() {
    this.app.get("/department", (req, res) => {
      res.send({ "Ruta solicitada": req.url });
    });
  }

  // "/department/all"
  allDepartment() {
    this.app.get("/department/all", (req, res) => {
      const table = "departments";
      const columns = "*";
      const criterion = "";
      this._db.getData(res, table, columns, criterion);
    });
  }

  // "/department/create"
  createDepartment() {
    this.app.put("/department/create", (req, res) => {
      const table = req.body.table;
      const data = req.body.data;
      this._db.insertDB(table, data, res);
    });
  }

  // "/department/{id}"
  getDepartment() {}

  // "/department/{id}/update"
  updateDepartment() {}

  // "/department/{id}/delete"
  deleteDepartment() {}
}

module.exports = Department_;

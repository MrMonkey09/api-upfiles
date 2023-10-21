class _Models {
  _db;

  constructor(db) {
    this._db = db;
    console.log("Generando Modelo de datos...");
    this.createDB();
    this.createTables();
    this.insertNecesaryData();
  }

  createDB() {
    console.log("asd");
    const dbList = ["screen_management"];
    for (let db in dbList) {
      console.log(db);
      /* this._db.createDB("", db); */
    }
  }

  createTables() {
    console.log("asd");
    /* this._db.createTable(null, table, columns); */
  }

  insertNecesaryData() {
    console.log("asd");
    /* this._db.insertData(null, table, columns, data); */
  }
}

module.exports = _Models;

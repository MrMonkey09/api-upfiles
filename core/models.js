class _Models {
  _db;

  constructor(db) {
    this._db = db;
    console.log("Generando Modelo de datos...");
    this.createDB();
  }

  async createDB() {
    console.log("asd");
    const dbList = await this._db.getDBList();
    console.log({dbList})
    /* if (dbList && dbList.length !== 0) {
      for (let db of dbList) {
        console.log(db);
      }
    } */
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

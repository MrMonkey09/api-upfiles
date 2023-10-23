const mysql = require("mysql");

class _DB {
  connection;

  constructor() {
    this.connection = mysql.createConnection({
      host: "192.168.0.15",
      user: "root",
      password: "",
      database: "wenardio",
    });
    console.log("Iniciando conexión DB...");
  }

  // Utilidades
  async responseMessage(result) {
    console.log({ result });
    return result;
  }

  // Manejo de Bases de Datos
  async createDB(db) {
    console.log({ db });
    let dbList = [];
    dbList = await this.getDBList();
    console.log({ dbList });
    /* if (dbList && dbList.length !== 0) {
      dbList.push(result);
    } else {
      dbList = [result];
    }
    return dbList; */
  }

  async getDBList() {
    console.log("databases");
    let resultConnection;
    this.connection.query(`SHOW DATABASES;`, (error, results) => {
      if (error) {
        const err = this.responseMessage(error);
        resultConnection = err;
      } else {
        const result = this.responseMessage(results);
        resultConnection = result;
      }
    });
  }

  async dropDB(response, db) {
    this.connection.query(`DROP DATABASE ${db};`, (error, results) => {
      this.responseMessage(response, error, results);
    });
  }

  async useDB(response, db) {
    this.connection.query(`USE ${db}`, (error, results) => {
      this.responseMessage(response, error, results);
    });
  }

  // Manejo de Tablas
  async createTable(response, table, columns) {
    this.connection.query(
      `CREATE TABLE ${table}(${columns});`,
      (error, results) => {
        this.responseMessage(response, error, results);
      }
    );
  }

  async getTableList(response) {
    this.connection.query(`SHOW TABLES;`, (error, results) => {
      this.responseMessage(response, error, results);
    });
  }

  async dropTable(response, table) {
    this.connection.query(`DROP TABLE ${table};`, (error, results) => {
      this.responseMessage(response, error, results);
    });
  }

  // Manejo de Datos
  async insertData(response, table, columns, data) {
    console.log({ table, columns, data });
    this.connection.query(
      `INSERT INTO ${table} (${columns}) VALUES (${data});`,
      (error, results) => {
        this.responseMessage(response, error, results);
      }
    );
  }

  async getData(response, table, columns, criterion) {
    console.log({ table, columns, criterion });
    this.connection.query(
      `SELECT ${columns} FROM ${table} ${criterion};`,
      (error, results) => {
        this.responseMessage(response, error, results);
      }
    );
  }

  async updateData(response, table, columnsData, criterion) {
    console.log({ table, columnsData, criterion });
    this.connection.query(
      `UPDATE ${table} SET ${columnsData} ${criterion};`,
      (error, results) => {
        this.responseMessage(response, error, results);
      }
    );
  }

  async dropData(response, table, criterion) {
    console.log({ table, criterion });
    this.connection.query(
      `DELETE FROM ${table} ${criterion};`,
      (error, results) => {
        this.responseMessage(response, error, results);
      }
    );
  }
}

module.exports = _DB;

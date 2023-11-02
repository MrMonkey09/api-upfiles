const mysql = require("mysql");

class _DB {
  connection;
  dbList = [];
  tableList = [];
  dataTemp;
  indexCurrent;
  indexNext;
  currentProcess = false;

  constructor() {
    this.connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "screen_management",
    });
    console.log("Iniciando conexión DB...");
  }

  // Utilidades
  responseMessage(result) {
    console.log({ result });
    return result;
  }

  // Manejo de Bases de Datos
  createDB(db) {
    this.currentProcess = true;
    console.log({ db });
    setTimeout(() => {
      if (this.dbList && this.dbList.length !== 0) {
        const dbTemp = this.dbList.find((db) => db.Database === db);
        if (dbTemp) {
          console.log({ "bases de datos listas": dbTemp });
        } else {
          this.connection.query(`CREATE DATABASE ${db};`, (error, results) => {
            if (error) {
              console.error({ error: error.sqlMessage });
              this.currentProcess = false;
            } else if (results) {
              console.log({ results, db });
              this.currentProcess = false;
            }
          });
        }
      }
      this.getDBList();
    }, 400);
  }

  getDBList() {
    this.currentProcess = true;
    console.log("Cargando databases");
    this.connection.query(`SHOW DATABASES;`, (error, results) => {
      if (error) {
        console.error(error);
        this.currentProcess = false;
      } else {
        this.dbList = results;
        this.currentProcess = false;
      }
    });
  }

  dropDB(response, db) {
    this.connection.query(`DROP DATABASE ${db};`, (error, results) => {
      this.responseMessage(response, error, results);
    });
  }

  useDB(response, db) {
    this.connection.query(`USE ${db}`, (error, results) => {
      this.responseMessage(response, error, results);
    });
  }

  // Manejo de Tablas
  createTable(table, columns) {
    console.log({ table, columns });
    this.connection.query(
      `CREATE TABLE ${table}(${columns});`,
      (error, results) => {
        if (error) {
          console.log({ error: error.sqlMessage });
        } else if (results) {
          console.log({ results });
        }
      }
    );
  }

  getTableList() {
    this.connection.query(`SHOW TABLES;`, (error, results) => {
      if (error) {
        console.log({ error: error.sqlMessage });
      } else if (results) {
        console.log({ results });
        this.tableList = results;
      }
    });
  }

  dropTable(response, table) {
    this.connection.query(`DROP TABLE ${table};`, (error, results) => {
      this.responseMessage(response, error, results);
    });
  }

  // Manejo de Datos
  insertData(table, columns, data) {
    console.log({ table, columns, data });
    this.connection.query(
      `INSERT INTO ${table}(${columns}) VALUES (${data});`,
      (error, results) => {
        if (error) {
          console.error({ error });
        } else if (results) {
          console.log({ results });
        }
      }
    );
  }

  getData(table, columns, criterion) {
    console.log({ table, columns, criterion });
    this.connection.query(
      `SELECT ${columns} FROM ${table} ${criterion};`,
      (error, results) => {
        if (error) {
          console.warn({ error });
        } else if (results) {
          console.log({ results });
          this.dataTemp = results;
        }
      }
    );
  }

  updateData(response, table, columnsData, criterion) {
    console.log({ table, columnsData, criterion });
    this.connection.query(
      `UPDATE ${table} SET ${columnsData} ${criterion};`,
      (error, results) => {
        this.responseMessage(response, error, results);
      }
    );
  }

  dropData(response, table, criterion) {
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

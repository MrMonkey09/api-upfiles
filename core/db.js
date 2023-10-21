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
  responseMessage(response, error, results) {
    if (error) {
      console.error({ error });
      response !== null ? response.send({ error }) : null;
    } else if (results) {
      console.log({ results });
      response !== null ? response.send({ results }) : null;
    }
  }

  // Manejo de Bases de Datos
  createDB(response, db) {
    console.log(db);
    this.connection.query(`CREATE DATABASE ${db};`, (error, results) => {
      this.responseMessage(response, error, results);
    });
  }

  getDBList(response) {
    console.log("databases");
    this.connection.query(`SHOW DATABASES;`, (error, results) => {
      this.responseMessage(response, error, results);
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
  createTable(response, table, columns) {
    this.connection.query(
      `CREATE TABLE ${table}(${columns});`,
      (error, results) => {
        this.responseMessage(response, error, results);
      }
    );
  }

  getTableList(response) {
    this.connection.query(`SHOW TABLES;`, (error, results) => {
      this.responseMessage(response, error, results);
    });
  }

  dropTable(response, table) {
    this.connection.query(`DROP TABLE ${table};`, (error, results) => {
      this.responseMessage(response, error, results);
    });
  }

  // Manejo de Datos
  insertData(response, table, columns, data) {
    console.log({ table, columns, data });
    this.connection.query(
      `INSERT INTO ${table} (${columns}) VALUES (${data});`,
      (error, results) => {
        this.responseMessage(response, error, results);
      }
    );
  }

  getData(response, table, columns, criterion) {
    console.log({ table, columns, criterion });
    this.connection.query(
      `SELECT ${columns} FROM ${table} ${criterion};`,
      (error, results) => {
        this.responseMessage(response, error, results);
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

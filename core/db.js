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

  createDB(name) {
    this.connection.query(`CREATE DATABASE ${name}`, (error, results) => {
      if (error) {
        console.error({ error });
      } else if (results) {
        console.log({ results });
      }
    });
  }

  insertDB(table, data, response) {
    console.log({ table, data });
    this.connection.query(
      `INSERT INTO ${table} VALUES (${data.wena})`,
      (err, res) => {
        if (err) {
          response.send({ error: err.sqlMessage, query: err.sql });
        } else {
          response.send({ res });
        }
      }
    );
  }
}

module.exports = _DB;

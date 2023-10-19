const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "192.168.0.15",
  user: "root",
  password: "",
});

class _DB {

  constructor() {
    console.log("Iniciando conexión DB...")
  }

  createDB(name) {
    connection.query(`CREATE DATABASE ${name}`, (error, results) => {
      if (error) {
        console.error({ error });
      } else if (results) {
        console.log({ results });
      }
    });
  }
}

module.exports = _DB;

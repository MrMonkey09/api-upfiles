class _Models {
  _db;
  tableList = [
    {
      name: "departments",
      columns:
        "ID int NOT NULL AUTO_INCREMENT,Name varchar(255) NOT NULL UNIQUE,PRIMARY KEY (ID)",
    },
    {
      name: "locations",
      columns:
        "ID int NOT NULL AUTO_INCREMENT,Name varchar(255) NOT NULL,PRIMARY KEY (ID)",
    },
    {
      name: "groups_screen",
      columns:
        "ID int NOT NULL AUTO_INCREMENT, Name varchar(255) NOT NULL, DepartmentID int NOT NULL, PRIMARY KEY (ID), CONSTRAINT FK_GroupScreenDepartment FOREIGN KEY (DepartmentID) REFERENCES Departments(ID)",
    },
    {
      name: "users",
      columns:
        "ID int NOT NULL AUTO_INCREMENT, Name varchar(255) NOT NULL, User varchar(255) NOT NULL UNIQUE, Password varchar(255) NOT NULL, Email varchar(255) NOT NULL, Rut varchar(255) NOT NULL, DepartmentID int NOT NULL, PRIMARY KEY (ID), CONSTRAINT FK_UserDepartment FOREIGN KEY (DepartmentID) REFERENCES departments(ID)",
    },
    {
      name: "screens",
      columns:
        "ID int NOT NULL AUTO_INCREMENT, Name varchar(255) NOT NULL, LocationID int NOT NULL, DepartmentID int NOT NULL, GroupScreenID int, PRIMARY KEY (ID), CONSTRAINT FK_ScreenLocation FOREIGN KEY (DepartmentID) REFERENCES departments(ID), CONSTRAINT FK_ScreenDepartment FOREIGN KEY (DepartmentID) REFERENCES departments(ID), CONSTRAINT FK_ScreenGroupScreen FOREIGN KEY (GroupScreenID) REFERENCES groups_screen(ID)",
    },
  ];
  dataList = [
    {
      table: "departments",
      columns: "Name",
      value: "'Soporte Tecnico Tecnológico'",
      foundFilter: "WHERE Name = 'Soporte Tecnico Tecnológico'",
    },
    {
      table: "users",
      columns: "Name, User, Password, Email, Rut, DepartmentID",
      value:
        "'Administrador', 'root', 'sopanto735', 'root@enjoy.cl', '00.000.000-K', 1",
      foundFilter: "WHERE User = 'root'",
    },
  ];

  constructor(db) {
    this._db = db;
    console.log("Generando Modelo de datos...");
    this.createDB();
  }

  createDB() {
    this._db.getDBList();
    const dbList = ["screen_management"];
    setTimeout(() => {
      console.log("Generando bases de datos...");
      dbList.map((dbOrg) => {
        if (this._db.dbList && this._db.dbList.length !== 0) {
          if (this._db.dbList.find((dbTemp) => dbTemp.Database === dbOrg)) {
            console.log("base de datos correcta: " + dbOrg);
            this.createTables();
          } else {
            console.log("no encontrado: " + dbOrg);
            setTimeout(() => {
              this._db.createDB(dbOrg);
            }, 400);
          }
        }
      });
    }, 400);
  }

  createTables() {
    console.log("Generando tablas...");
    this._db.getTableList();
    setTimeout(() => {
      console.log(this._db.tableList.length === this.tableList.length);
      console.log(this.tableList.length);
      if (
        this._db.tableList &&
        this._db.tableList.length !== this.tableList.length
      ) {
        for (let table of this.tableList) {
          if (
            this._db.tableList.find(
              (tableTemp) =>
                tableTemp.Tables_in_screen_management === table.name
            )
          ) {
            console.log("Tabla encontrada: " + table.name);
          } else {
            console.log("Tabla faltante: " + table.name);
            this._db.createTable(table.name, table.columns);
          }
        }
      }
      setTimeout(() => {
        console.log("Tablas Completadas...");
        this.insertNecesaryData();
      }, 400);
    }, 400);
  }

  insertNecesaryData() {
    console.log("Cargando datos necesarios...");
    this.dataList.map((data) => {
      console.log({ data });
      const indexCurrent = this.dataList.findIndex((dt) => dt == data);
      let indexNext = 0;
      if (indexCurrent <= indexNext) {
        console.log({ indexCurrent, indexNext });
        this._db.getData(data.table, data.columns, data.foundFilter);
        setTimeout(() => {
          console.log({
            dataTemp: this._db.dataTemp,
            data: data.value.replace("'", ""),
          });
          console.log({
            dataFound: this._db.dataTemp.find(
              (dataT) =>
                dataT.Name == data.value.replace("'", "").replace("'", "")
            ),
          });
          if (
            this._db.dataTemp &&
            this._db.dataTemp.length !== this.dataList.length &&
            !this._db.dataTemp.find(
              (dataT) =>
                dataT.Name == data.value.replace("'", "").replace("'", "")
            )
          ) {
            console.log(
              "Dato faltante: " + data.table,
              " | ",
              data.columns,
              " | ",
              data.value
            );
            this._db.insertData(data.table, data.columns, data.value);
          } else {
            console.log("Datos existentes");
          }
        }, 100);
      } else {
        console.log("siguiente");
      }
    });
  }
}

module.exports = _Models;

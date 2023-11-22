import { createTable, getData, getTableList, insertData } from "./db.js";

const tableList = [
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
      "ID int NOT NULL AUTO_INCREMENT, Name varchar(255) NOT NULL UNIQUE, DepartmentID int NOT NULL, CurrentVideo varchar(255) NULL,PRIMARY KEY (ID), CONSTRAINT FK_GroupScreenDepartment FOREIGN KEY (DepartmentID) REFERENCES Departments(ID)",
  },
  {
    name: "users",
    columns:
      "ID int NOT NULL AUTO_INCREMENT, Name varchar(255) NOT NULL, Password varchar(255) NOT NULL, Email varchar(255) NOT NULL UNIQUE, Rut varchar(255) NOT NULL, DepartmentID int NOT NULL, PRIMARY KEY (ID), CONSTRAINT FK_UserDepartment FOREIGN KEY (DepartmentID) REFERENCES departments(ID)",
  },
  {
    name: "screens",
    columns:
      "ID int NOT NULL AUTO_INCREMENT, IP varchar(255) NULL UNIQUE, Brand varchar(255) NOT NULL,CurrentGroupID int NULL, LocationID int NOT NULL, DepartmentID int NOT NULL, PRIMARY KEY (ID), CONSTRAINT FK_ScreenLocation FOREIGN KEY (LocationID) REFERENCES locations(ID), CONSTRAINT FK_ScreenGroupScreen FOREIGN KEY (CurrentGroupID) REFERENCES groups_screen(ID), CONSTRAINT FK_ScreenDepartment FOREIGN KEY (DepartmentID) REFERENCES departments(ID)",
  },
  {
    name: "screens_groups_list",
    columns:
      "ID int NOT NULL AUTO_INCREMENT, ScreenID int NOT NULL UNIQUE, GroupScreenID int NOT NULL, PRIMARY KEY (ID), CONSTRAINT FK_ScreenGroupList FOREIGN KEY (ScreenID) REFERENCES screens(ID), CONSTRAINT FK_GroupScreenList FOREIGN KEY (GroupScreenID) REFERENCES groups_screen(ID)",
  },
];

const dataList = [
  {
    table: "departments",
    columns: "Name",
    value: "'Técnico Soporte Tecnológico'",
    foundFilter: "WHERE Name = 'Técnico Soporte Tecnológico'",
  },
  {
    table: "users",
    columns: "Name, Password, Email, Rut, DepartmentID",
    value: "'Administrador', 'sopanto735', 'root@enjoy.cl', '00.000.000-K', 1",
    foundFilter: "WHERE Email = 'root@enjoy.cl'",
  },
];

const createTables = async () => {
  console.log("Generando tablas...");
  const tableListTemp = await getTableList();
  for (let table of tableList) {
    if (
      tableListTemp.find(
        (tableTemp) => tableTemp.Tables_in_screen_management === table.name
      )
    ) {
      console.log(`Tabla ${table.name} encontrada`);
    } else {
      console.error(`Tabla ${table.name} faltante`);
      await createTable(table.name, table.columns);
      console.log("tabla creada");
    }
  }
  console.log("Tablas listas!");
};

const insertNecesaryData = async () => {
  console.log("Cargando datos necesarios...");
  for (let data of dataList) {
    const dataTemp = await getData(data.table, data.columns, data.foundFilter);
    if (dataTemp.length > 0) {
      console.log(`Dato ${data.value} encontrado`);
    } else {
      console.error(`Dato ${data.value} faltante`);
      await insertData(data.table, data.columns, data.value);
      console.log("Dato creado");
    }
  }
  console.log("Datos listos!");
};

const Models = async () => {
  console.log("Generando modelo de datos...");
  await createTables();
  await insertNecesaryData();
  console.log("Base de datos completa!");
};

export default Models;

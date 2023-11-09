import { createPool } from "mysql2/promise";

// Utilidades
export const connectionDB = createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "screen_management",
});

export const responseMessage = (result) => {
  console.log({ result });
  return result;
}

// Manejo de Bases de Datos
export const createDB = async (db) => {
  console.log({ db });
  const result = await connectionDB.query(`CREATE DATABASE ${db};`);
  return result
}

export const getDBList = async () => {
  console.log("Cargando databases");
  const results = await connectionDB.query(`SHOW DATABASES;`)
  return results
}

export const dropDB = async (db) => {
  const results = await connectionDB.query(`DROP DATABASE ${db};`)
  return results
}

export const useDB = async (db) => {
  const results = connectionDB.query(`USE ${db}`);
  return results
}

// Manejo de Tablas
export const createTable = async (table, columns) => {
  console.log({ table, columns });
  const result = await connectionDB.query(`CREATE TABLE ${table}(${columns});`);
  return result
}

export const getTableList = async () => {
  const [result] = await connectionDB.query(`SHOW TABLES;`);
  return result
}

export const dropTable = async (table) => {
  const results = await connectionDB.query(`DROP TABLE ${table};`);
  return results
}

// Manejo de Datos
export const insertData = async (table, columns, data) => {
  console.log({ table, columns, data });
  const result = await connectionDB.query(`INSERT INTO ${table}(${columns}) VALUES (${data});`);
  console.log({result})
  return result
}

export const getData = async (table, columns, criterion) => {
  console.log({ table, columns, criterion });
  const [result] = await connectionDB.query(`SELECT ${columns} FROM ${table} ${criterion};`)
  return result;
}

export const updateData = async (table, columnsData, criterion) => {
  console.log({ table, columnsData, criterion });
  const results = await connectionDB.query(`UPDATE ${table} SET ${columnsData} ${criterion};`);
  return results
}

export const dropData = async (table, criterion) => {
  console.log({ table, criterion });
  const results = await connectionDB.query(`DELETE FROM ${table} ${criterion};`);
  return results
}

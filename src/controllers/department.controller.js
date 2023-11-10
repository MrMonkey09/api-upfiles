import { getData, insertData, updateData } from "../core/db.js";

export const getAll = async (req, res) => {
  const table = "departments";
  const columns = "*";
  const criterion = "";
  const resultDepartment = await getData(table, columns, criterion);
  console.log({ resultDepartment });
  res.json(resultDepartment);
};

export const createDepartment = async (req, res) => {
  const table = req.body.table;
  const columns = req.body.columns;
  const data = req.body.data;
  const resultDepartment = await insertData(table, columns, data);
  console.log({ resultDepartment });
  res.json(resultDepartment);
};

export const findDepartment = async (req, res) => {
  const table = req.body.table ? req.body.table : "departments";
  const columns = req.body.columns ? req.body.columns : "*";
  const criterion = req.body.criterion
    ? req.body.criterion
    : `WHERE ID = ${req.params.id}`;
  const resultDepartment = await getData(table, columns, criterion);
  console.log({ resultDepartment });
  res.json(resultDepartment);
};

export const updateDepartment = async (req, res) => {
  const table = req.body.table;
  const columnsData = req.body.columnsData;
  const criterion = req.body.criterion
    ? req.body.criterion
    : `WHERE ID = ${req.params.id}`;
  const resultDepartment = await updateData(table, columnsData, criterion);
  console.log({ resultDepartment });
  res.json(resultDepartment);
};

export const deleteDepartment = async (req, res) => {
  const table = "departments";
  const criterion = req.body.criterion
    ? req.body.criterion
    : `WHERE ID = ${req.params.id}`;
  const resultDepartment = await insertData(table, criterion);
  console.log({ resultDepartment });
  res.json(resultDepartment);
};

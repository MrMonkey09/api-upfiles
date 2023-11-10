import { getData, insertData, updateData, dropData } from "../core/db.js";

export const getAll = async (req, res) => {
  const table = "users";
  const columns = "*";
  const criterion = "";
  const result = await getData(table, columns, criterion);
  res.json(result);
};

export const createUser = async (req, res) => {
  const table = req.body.table;
  const columns = req.body.columns;
  const data = req.body.data;
  const result = await insertData(table, columns, data);
  res.json(result);
};

export const findUser = async (req, res) => {
  const table = "users";
  const columns = req.body.columns ? req.body.columns : "*";
  const criterion = req.body.criterion
    ? req.body.criterion
    : `WHERE ID = ${req.params.id}`;
  const result = await getData(table, columns, criterion);
  res.json(result);
};

export const updateUser = async (req, res) => {
  const table = "users";
  const columnsData = req.body.columnsData;
  const criterion = req.body.criterion
    ? req.body.criterion
    : `WHERE ID = ${req.params.id}`;
  const result = await updateData(table, columnsData, criterion);
  res.json(result);
};

export const deleteUser = async (req, res) => {
  const table = "users";
  const criterion = req.body.criterion
    ? req.body.criterion
    : `WHERE ID = ${req.params.id}`;
  const result = await dropData(table, criterion);
  res.json(result);
};

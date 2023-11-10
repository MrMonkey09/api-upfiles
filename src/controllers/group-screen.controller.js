import { dropData, getData, insertData, updateData } from "../core/db.js";

export const getAll = async (req, res) => {
  const table = "groups_screen";
  const columns = "*";
  const criterion = "";
  const result = await getData(table, columns, criterion);
  res.json(result);
};

export const createGroupScreen = async (req, res) => {
  const table = req.body.table;
  const columns = req.body.columns;
  const data = req.body.data;
  const result = await insertData(table, columns, data);
  res.json(result, table, columns, data);
};

export const findGroupScreen = async (req, res) => {
  const table = "groups_screen";
  const columns = req.body.columns ? req.body.columns : "ID";
  const criterion = req.body.criterion
    ? req.body.criterion
    : `WHERE ID = ${req.params.id}`;
  const result = await getData(table, columns, criterion);
  res.json(result);
};

export const updateGroupScreen = async (req, res) => {
  const table = "groups_screen";
  const columnsData = req.body.columnsData;
  const criterion = req.body.criterion;
  const result = await updateData(table, columnsData, criterion);
  res.json(result);
};

export const deleteGroupScreen = async (req, res) => {
  const table = "groups_screen";
  const criterion = req.body.criterion
    ? req.body.criterion
    : `WHERE ID = ${req.params.id}`;
  const result = await dropData(table, criterion);
  res.json(result);
};

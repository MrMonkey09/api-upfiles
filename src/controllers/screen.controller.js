import { connectedMessageHTTP } from "../core/core.js";
import { dropData, getData, insertData, updateData } from "../core/db.js";

export const getAll = async (req, res) => {
  const table = "screens";
  const columns = "*";
  const criterion = "";
  const result = await getData(table, columns, criterion);
  res.json(result);
};

export const screenIP = async (req, res) => {
  const result = connectedMessageHTTP(req, res);
  res.json(result.IP);
};

export const createScreen = async (req, res) => {
  const table = req.body.table;
  const columns = req.body.columns;
  const data = req.body.data;
  const result = await insertData(table, columns, data);
  res.json(result, table, columns, data);
};

export const findScreen = async (req, res) => {
  const table = "screens";
  const columns = req.body.columns ? req.body.columns : "*";
  const criterion = req.body.criterion
    ? req.body.criterion
    : `WHERE ID = ${req.params.id}`;
  const result = await getData(table, columns, criterion);
  res.json(result);
};

export const updateScreen = async (req, res) => {
  const table = "screens";
  const columnsData = req.body.columnsData;
  const criterion = req.body.data;
  const result = await updateData(table, columnsData, criterion);
  res.json(result);
};

export const deleteScreen = async (req, res) => {
  const table = "screens";
  const criterion = req.body.criterion
    ? req.body.criterion
    : `WHERE ID = ${req.params.id}`;
  const result = await dropData(table, criterion);
  res.json(result);
};

export const screenToList = async (req, res) => {
  const table = "screens_groups_list";
  const columns = req.body.columns;
  const data = req.body.data;
  const result = await insertData(table, columns, data);
  res.json(result, table, columns, data);
};

export const screenOutList = async (req, res) => {
  const table = "screens_groups_list";
  const criterion = req.body.criterion
    ? req.body.criterion
    : `WHERE ScreenID = ${req.params.id}`;
  const result = await dropData(table, criterion);
  res.json(result);
};

export const dropScreenList = async (req, res) => {
  const table = "screens_groups_list";
  const criterion = req.body.criterion
    ? req.body.criterion
    : `WHERE GroupScreenID = ${req.params.id}`;
  const result = await dropData(table, criterion);
  res.json(result);
};
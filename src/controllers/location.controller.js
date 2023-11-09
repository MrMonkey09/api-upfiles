import { getData, insertData, updateData } from "../core/db.js";

export const getAll = async (req, res) => {
  const table = "locations";
  const columns = "*";
  const criterion = "";
  const result = await getData(table, columns, criterion);
  res.json(result)
}

export const createLocation = async (req, res) => {
  const table = req.body.table;
  const columns = req.body.columns;
  const data = req.body.data;
  const result = await insertData(table, columns, data);
  res.json(result)
}

export const findLocation = async (req, res) => {
  const table = req.body.table;
  const columns = req.body.columns;
  const criterion = req.body.criterion;
  const result = await getData(table, columns, criterion);
  res.json(result)
}

export const updateLocation = async (req, res) => {
  const table = req.body.table;
  const columnsData = req.body.columnsData;
  const criterion = req.body.data;
  const result = await updateData(table, columnsData, criterion);
  res.json(result)
}

export const deleteLocation = async (req, res) => {
  const table = req.body.table;
  const criterion = req.body.criterion;
  const result = await insertData(table, criterion);
  res.json(result)
}
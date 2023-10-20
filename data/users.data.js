/* export interface User_ {
  id: number;
  name: string;
  password: string;
  email: string;
  department: Department;
  rut: string;
}
 */

const departments = require("./departments.data");

const users = [
  {
    id: 0,
    name: "System",
    password: "sopanto735",
    email: "root",
    department: departments[0],
    rut: "00.000.000-0",
  },
];

module.exports = users;

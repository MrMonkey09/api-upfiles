import { Router } from "express"
const router = Router()
import { getAll, createDepartment, findDepartment, updateDepartment, deleteDepartment } from "../controllers/department.controller.js"

// Mostrar todos "/department/all"
router.get("/department/all", getAll);

// Encontrar "/department/{id}"
router.get("/department/{id}", findDepartment);

// Crear "/department/create"
router.put("/department", createDepartment);

// Modificar "/department/{id}"
router.patch("/department/{id}", updateDepartment);

// Eliminar "/department/{id}"
router.delete("/department/{id}", deleteDepartment);

export default router;

import { Router } from "express"
const router = Router()
import { getAll, createGroupScreen, findGroupScreen, updateGroupScreen, deleteGroupScreen } from "../controllers/group-screen.controller.js"

// Mostrar todos "/group-screen/all"
router.get("/group-screen/all", getAll);

// Crear "/group-screen/create"
router.put("/group-screen", createGroupScreen);

// Encontrar "/group-screen/{id}"
router.get("/group-screen/{id}", findGroupScreen);

// Modificar "/group-screen/{id}"
router.patch("/group-screen/{id}", updateGroupScreen);

// Eliminar "/group-screen/{id}"
router.delete("/group-screen/{id}", deleteGroupScreen);

export default router;

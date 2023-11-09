import { Router } from "express"
const router = Router()
import { getAll, createScreen, screenIP, findScreen, updateScreen, deleteScreen } from "../controllers/screen.controller.js"

// Mostrar todos "/screen/all"
router.get("/screen/all", getAll);

// IP "/screen"
router.get("/screen", screenIP);

// Crear "/screen"
router.put("/screen", createScreen);

// Encontrar "/screen/{id}"
router.get("/screen/{id}", findScreen);

// Modificar "/screen/{id}"
router.patch("/screen/{id}", updateScreen);

// Eliminar "/screen/{id}"
router.delete("/screen/{id}", deleteScreen);

export default router;

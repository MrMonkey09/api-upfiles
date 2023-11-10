import { Router } from "express";
const router = Router();
import {
  getAll,
  createScreen,
  screenIP,
  findScreen,
  updateScreen,
  deleteScreen,
  screenToList,
  screenOutList,
  dropScreenList,
} from "../controllers/screen.controller.js";

// Mostrar todos "/screen/all"
router.get("/screen/all", getAll);

// IP "/screen"
router.get("/screen", screenIP);

// Crear "/screen"
router.post("/screen", createScreen);

// Encontrar "/screen/:id"
router.get("/screen/:id", findScreen);

// Modificar "/screen/:id"
router.patch("/screen/:id", updateScreen);

// Eliminar "/screen/:id"
router.delete("/screen/:id", deleteScreen);

// Añadir pantalla a lista de grupo "/screen/:id/to-list"
router.post("/screen/:id/to-list", screenToList);

// Quitar pantalla de una lista de grupo "/screen/:id/to-list"
router.delete("/screen/:id/out-list", screenOutList);

// Quitar lista de grupo "/screen/:id/to-list"
router.delete("/screen/:id/delete-list", dropScreenList);

export default router;

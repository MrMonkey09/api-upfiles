import { Router } from "express"
const router = Router()
import { getAll, createLocation, findLocation, updateLocation, deleteLocation } from "../controllers/location.controller.js"

// Mostrar todos "/location/all"
router.get("/location/all", getAll);

// Crear "/location/create"
router.post("/location", createLocation);

// Encontrar "/location/:id"
router.get("/location/:id", findLocation);

// Modificar "/location/:id"
router.patch("/location/:id", updateLocation);

// Eliminar "/location/:id"
router.delete("/location/:id", deleteLocation);

export default router;

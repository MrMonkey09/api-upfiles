import { Router } from "express"
const router = Router()
import { getAll, createUser, findUser, updateUser, deleteUser } from "../controllers/user.controller.js"

// Mostrar todos "/user/all"
router.get("/user/all", getAll);

// Crear "/user/create"
router.post("/user", createUser);

// Encontrar "/user/:id"
router.get("/user/:id", findUser);

// Modificar "/user/:id"
router.patch("/user/:id", updateUser);

// Eliminar "/user/:id"
router.delete("/user/:id", deleteUser);

export default router;

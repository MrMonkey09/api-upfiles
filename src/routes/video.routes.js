import _Multer from "../core/multer.js";
const _multer = new _Multer();
import { Router } from "express";
const router = Router();

// Rutas raíz
router.get("/video", (req, res) => {
  res.send({ "Ruta solicitada": req.url });
});

// Ruta para cargar archivos
router.post("/subir-archivo", _multer.upload.single("myFile"), (req, res) => {
  // Manejar el archivo cargado aquí
  console.log({ archivo: req.file });
  const video = req.file;
  res.send({ data: video });
});

export default router;

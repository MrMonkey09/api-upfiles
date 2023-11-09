import { Router } from "express"
const router = Router()

// Ruta raiz
router.get("", (req, res, next) => {
  res.send({ "Ruta solicitada": req.url });
});

export default router;

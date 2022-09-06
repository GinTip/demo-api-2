const { Router } = require("express");

const {
  getPeliculas,
  createPelicula,
  updatePelicula,
  deletePelicula,
} = require("../controllers/peliculas.controllers");

const router = Router();

router.get("/", getPeliculas);
router.post("/", createPelicula);
router.put("/:idPelicula", updatePelicula);
router.delete("/:idPelicula", deletePelicula);

module.exports = router;
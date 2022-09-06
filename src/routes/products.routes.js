const { Router } = require("express");

const {
  getProduct,
  postProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products.ctrl");

const { validarJWT } = require("../middlewares/jwt.middleware")

const router = Router();

router.get("/", validarJWT, getProduct);
router.post("/", postProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
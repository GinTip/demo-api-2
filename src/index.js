// 1. IMPORTACIONES
require("dotenv").config();
const cors = require("cors");
const express = require("express");
const { dbConnection } = require("./database/config");
const app = express();
const PORT = process.env.PORT || 4002;

dbConnection();

// 2.MIDDLEWARES
app.use(cors());
app.use(express.json());

// 3.ROUTES
app.get("/", (req, res) => {
  res.json({
    msg: "Bienvenido al API",
    autor: process.env.AUTOR,
  })
})
app.use("/api/users", require("./routes/users.routes"));
app.use("/api/peliculas", require("./routes/peliculas.routes"));
app.use("/api/products", require("./routes/products.routes"));
app.use("/api/auth", require("./routes/auth.routes"));

// 4. SERVIDOR
app.listen(PORT, () => {
  console.log(`Servidor ejecutando en el puerto ${PORT}`);
});
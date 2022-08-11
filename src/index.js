// 1. IMPORTACIONES
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PUERTO || 4002;

// 2.MIDDLEWARES
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

// 4. SERVIDOR
app.listen(PORT, () => {
  console.log(`Servidor ejecutando en el puerto ${PORT}`);
});
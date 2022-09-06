const { peliculas } = require("../database/db");
const { v4: uuid } = require("uuid");

const getPeliculas = (req, res) => {
  return res.json({
    ok: true,
    msg: "Peliculas obtenidas",
    data: peliculas,
  });
};

const createPelicula = (req, res) => {
  const { title, year, price } = req.body

  const pelicula = {
    id: uuid(),
    title: title,
    year: year,
    price: price,
  }

  peliculas.push(pelicula);

  return res.json({
    ok: true,
    msg: "Pelicula creada",
    data: peliculas,
  })
};

const updatePelicula = (req, res) => {

  const { idPelicula } = req.params;
  const { title, year, price } = req.body;

  const peliculaEncontrada = peliculas.find((pelicula) => {
    return (pelicula.id === idPelicula);
  });

  peliculaEncontrada.title = title;
  peliculaEncontrada.year = year;
  peliculaEncontrada.price = price;

  return res.json({
    ok: true,
    msg: "Pelicula actualizada",
    data: peliculaEncontrada,
  }) 
};

const deletePelicula = (req, res) => {

  const { idPelicula } = req.params;

  const peliculaEncontrada = peliculas.find((pelicula) => {
    return (pelicula.id === idPelicula);
  });

  peliculas.splice(peliculas.indexOf(peliculaEncontrada), 1);

  return res.json({
    ok: true,
    msg: "Pelicula eliminada",
    data: peliculaEncontrada
  })
};

module.exports = {
  getPeliculas,
  createPelicula,
  updatePelicula,
  deletePelicula,
};
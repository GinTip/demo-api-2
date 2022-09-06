const { users } = require("../database/db");
const User = require("../models/user");

const getUsers =  async (req, res) => {

  const usuarios = await User.find()

  return res.json({
    ok: true,
    msg: "Usuarios obtenidos",
    data: usuarios,
  });
};

const createUser = async (req, res) => {
  const { email, username, password } = req.body

  const user = {
    email: email,
    username: username,
    password: password,
  }

  const nuevoUsuario = await User.create(user);

  return res.status(201).json({
    ok: true,
    msg: "Usuario creado",
    data: nuevoUsuario,
  })
};

const updateUser = (req, res) => {

  const { idUser } = req.params;
  const { username, password } = req.body;

  const usuarioEncontrado = users.find((user) => {
    return user.id === idUser;
  });

  usuarioEncontrado.username = username;
  usuarioEncontrado.password = password;

  return res.json({
    ok: true,
    msg: "Usuario actualizado",
    data: usuarioEncontrado,
  }) 
};

const deleteUser = (req, res) => {

  const { idUser } = req.params;

  const usuarioEncontrado = users.find((user) => {
    return (user.id === idUser);
  });

  users.splice(users.indexOf(usuarioEncontrado), 1);

  return res.json({
    ok: true,
    msg: "Usuario eliminado",
    data: usuarioEncontrado
  })
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
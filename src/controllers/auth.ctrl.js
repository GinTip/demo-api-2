const User = require("../models/user");
const bcrypt = require("bcrypt");
const { generarJWT } = require("../helpers/jwt.helper");

const registerUser = async (req, res) => {
  const { email, username, password } = req.body;

  const emailEncontrado = await User.findOne({ email: email })

  if(emailEncontrado) {
    return res.status(400).json({
      ok: false,
      msg: `Error, el correo ${emailEncontrado.email} ya está registrado`,
    });
  }

  const usernameEncontrado = await User.findOne({ username: username });

  if(usernameEncontrado) {
    return res.status(400).json({
      ok: false,
      msg: `Error, el username ${usernameEncontrado.username} ya está registrado`,
    });
  }

  const salt = bcrypt.genSaltSync(10);

  const user = {
    email: email,
    username: username,
    password: bcrypt.hashSync(password, salt),
  }

  const nuevoUsuario = await User.create(user);

  const token = await jwt.generarJWT(nuevoUsuario.id);

  return res.status(201).json({
    ok: true,
    msg: "Registro exitoso",
    data: nuevoUsuario,
    token,
  });
};

const login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({username});

  if(!user) {
    return res.status(400).json({
      ok: false,
      msg: "Error al iniciar sesión",
    });
  }

  const validarPassword = bcrypt.compareSync(password, user.password)

  if(!validarPassword) {
    return res.status(400).json({
      ok: false,
      msg: "Error al iniciar sesión",
    });
  }

  const token = await generarJWT(user.id);

  return res.json({
    ok: true,
    msg: "Acceso otorgado",
    data: user,
    token
  })
};

const verificarUsuario = async (req, res) => {
  const { usuario } = req;

  const token = await generarJWT(usuario.id)

  return res.json({
    ok: true,
    msg: "Usuario validado",
    data: usuario,
    token,
  });
}

module.exports = {
  registerUser,
  login,
  verificarUsuario,
}
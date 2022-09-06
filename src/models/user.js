const { Schema, model  } = require('mongoose');

const UserSchema =  Schema({
  email: {
    type: String,
    require: [true, "El email es requerido"],
  },

  username: {
    type: String,
    require: [true, "El nombre es requerido"],
    unique: true,
  },

  password: {
    type: String,
  }
});

UserSchema.methods.toJSON = function() {
  const { __v, _id, ...resto } = this.toObject(); // Ocultará __v y _id, mostrará el resto
  resto.id = _id;
  return resto;
};

module.exports = model('user', UserSchema);
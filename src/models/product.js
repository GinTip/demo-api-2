const { Schema, model  } = require('mongoose');

const ProductSchema =  Schema({
  name: {
    type: String,
    required: [true, "El nombre es obligatorio"],
    unique: true,
  },
  description: {
    type: String,
    default: "Descripción del producto",
  },
  price: Number,
});

module.exports = model('product', ProductSchema);
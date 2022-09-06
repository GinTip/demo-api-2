const mongoose = require("mongoose");

const dbConnection = () => {
  try {
    mongoose.connect(
      process.env.MONGODB_CONNECTION
    );
  
    console.log("Base de datos conectada");
  } catch (error) {
    console.log("Error en la base de datos");
  }
};



module.exports = {
  dbConnection,
};
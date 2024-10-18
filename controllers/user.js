const mongoose = require('mongoose');

// Define el esquema del usuario
const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

// Crea y exporta el modelo del usuario
module.exports = mongoose.model('User', userSchema);


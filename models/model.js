
const mongoose = require('mongoose');

// Definición del esquema del usuario
const usuarioSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Creación del modelo Usuario basado en el esquema
const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
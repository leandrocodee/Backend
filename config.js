const mongoose = require('mongoose');
require('dotenv').config();  // Cargar las variables de entorno desde el archivo .env

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);  // No necesitas pasar opciones aquí
        console.log('Conectado a MongoDB en la nube');
    } catch (err) {
        console.error('Error al conectar a MongoDB', err);
        process.exit(1);
    }
};

module.exports = connectDB;



const express = require("express");
const cors = require("cors");
const dbconnect = require("./config"); 
require('dotenv').config();  // Cargar variables de entorno en app.js

const app = express();

// Conectar a MongoDB antes de iniciar el servidor
dbconnect();

// Middlewares
app.use(express.json());
app.use(cors({ origin: '*' }));  

// Rutas
app.use('/api/usuarios', require('./routes/user.routes'));  // Ruta para usuarios
app.use('/api/empleados', require('./routes/employee.routes'));  // Ruta para empleados

// Iniciar el servidor
app.listen(3006, () => {
    console.log("El servidor está en el puerto 3006");
});



const express = require('express'); 
const router = express.Router();
const usuarioctrl = require('../controllers/user.controll'); // Controlador de usuarios

// Rutas de usuarios
router.get('/', usuarioctrl.getUser); // Obtener todos los usuarios
router.post('/', usuarioctrl.createUser); // Crear un nuevo usuario
router.get('/:id', usuarioctrl.getUniqueuser); // Obtener un usuario por ID
router.put('/:id', usuarioctrl.editUser); // Actualizar un usuario por ID
router.delete('/:id', usuarioctrl.deleteUser); // Eliminar un usuario por ID

module.exports = router;


const Employee = require('../models/employee'); // Asegúrate de que apunta al modelo correcto

const usuarioctrl = {
    // Obtener todos los usuarios
    getUser: async (req, res) => {
        try {
            const users = await Employee.find(); // Cambiado a `Employee`
            res.json(users);
        } catch (error) {
            res.status(500).send('Error al obtener los usuarios');
        }
    },

    // Crear un nuevo usuario
    createUser: async (req, res) => {
        const { name, position, office, salary } = req.body;
        const newUser = new Employee({ name, position, office, salary }); // Cambiado a `Employee`
        try {
            await newUser.save();
            res.json(newUser);
        } catch (error) {
            res.status(500).send('Error al crear el usuario');
        }
    },

    // Obtener un usuario por ID
    getUniqueuser: async (req, res) => {
        try {
            const user = await Employee.findById(req.params.id); // Cambiado a `Employee`
            if (!user) {
                return res.status(404).send('Usuario no encontrado');
            }
            res.json(user);
        } catch (error) {
            res.status(500).send('Error al obtener el usuario');
        }
    },

    // Actualizar un usuario por ID
    editUser: async (req, res) => {
        try {
            const updatedUser = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Cambiado a `Employee`
            if (!updatedUser) {
                return res.status(404).send('Usuario no encontrado');
            }
            res.json(updatedUser);
        } catch (error) {
            res.status(500).send('Error al actualizar el usuario');
        }
    },

    // Eliminar un usuario por ID
    deleteUser: async (req, res) => {
        try {
            const deletedUser = await Employee.findByIdAndDelete(req.params.id); // Cambiado a `Employee`
            if (!deletedUser) {
                return res.status(404).send('Usuario no encontrado');
            }
            res.send('Usuario eliminado');
        } catch (error) {
            res.status(500).send('Error al eliminar el usuario');
        }
    }
};

module.exports = usuarioctrl;
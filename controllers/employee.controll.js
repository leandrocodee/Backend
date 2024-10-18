
const ModelEmployee = require('../models/employee'); // Aquí importa el modelo Employee

const employeectrl = {};

// Crear empleado
employeectrl.createEmployee = async (req, res) => {
    try {
        const body = req.body;
        const respuesta = await ModelEmployee.create(body);
        res.status(201).json({ message: 'Empleado creado', empleado: respuesta });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el empleado', error: error.message });
    }
};

// Consultar todos los empleados
employeectrl.getEmployee = async (req, res) => {
    try {
        const respuesta = await ModelEmployee.find({});
        res.status(200).json(respuesta);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los empleados', error: error.message });
    }
};

// Consultar empleado por ID
employeectrl.getUniqueEmployee = async (req, res) => {
    try {
        const id = req.params.id;
        const respuesta = await ModelEmployee.findById(id);
        if (respuesta) {
            res.status(200).json(respuesta);
        } else {
            res.status(404).json({ message: 'Empleado no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el empleado', error: error.message });
    }
};

// Actualizar empleado
employeectrl.editEmployee = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const respuesta = await ModelEmployee.findByIdAndUpdate(id, body, { new: true });
        if (respuesta) {
            res.status(200).json({ message: 'Empleado actualizado', empleado: respuesta });
        } else {
            res.status(404).json({ message: 'Empleado no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el empleado', error: error.message });
    }
};

// Eliminar empleado
employeectrl.deleteEmployee = async (req, res) => {
    try {
        const id = req.params.id;
        const resultado = await ModelEmployee.deleteOne({ _id: id });
        if (resultado.deletedCount === 1) {
            res.status(200).json({ message: 'Empleado borrado' });
        } else {
            res.status(404).json({ message: 'Empleado no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al borrar el empleado', error: error.message });
    }
};

module.exports = employeectrl;
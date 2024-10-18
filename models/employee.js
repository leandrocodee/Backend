
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    name: { type: String, required: true },
    position: { type: String, required: true },
    office: { type: String },
    salary: { type: Number }
}, 
{
    timestamps: true,  
    versionKey: false  
});

const Employee = mongoose.model('Employee', employeeSchema); // Cambiado de 'User' a 'Employee'
module.exports = Employee;
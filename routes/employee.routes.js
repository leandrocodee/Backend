const express = require('express');
const router = express.Router();
const employeectrl = require('../controllers/employee.controll');

router.post('/', employeectrl.createEmployee);
router.get('/', employeectrl.getEmployee);
router.get('/:id', employeectrl.getUniqueEmployee);
router.put('/:id', employeectrl.editEmployee);
router.delete('/:id', employeectrl.deleteEmployee);

module.exports = router;
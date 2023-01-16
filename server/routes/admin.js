const express = require('express');
const addVaga = require('../controllers/admin/addVaga');
const consultaVagas = require('../controllers/usuario/consultaVagas');
const router = express.Router();

router.post('/api/dashboard', addVaga);
router.get('/api/dashboard', consultaVagas)

module.exports = router;
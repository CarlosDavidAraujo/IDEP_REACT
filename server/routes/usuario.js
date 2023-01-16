const express = require('express');
const cadastra = require('../controllers/usuario/cadastra');
const consultaVagas = require('../controllers/usuario/consultaVagas');
const login = require('../controllers/usuario/login');
const router = express.Router();

router.get('/api', consultaVagas);
router.post('/api/cadastro', cadastra);
router.post('/api/login', login);
router.get('/api/vagas', consultaVagas);



module.exports = router;
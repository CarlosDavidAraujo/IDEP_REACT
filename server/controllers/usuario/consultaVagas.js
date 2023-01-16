const Vaga = require('../../models/Vaga');

const consultaVagas = async (req, res)=> {
    const vagas = await Vaga.findAll();
    res.json(vagas);
}

module.exports = consultaVagas;
const Vaga= require('../../models/Vaga');

const addVaga = async (req, res)=>{
    await Vaga.create(req.body);
}

module.exports = addVaga;
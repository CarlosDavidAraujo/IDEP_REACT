const Usuario = require('../../models/Usuario');
const Formacao = require('../../models/Formacao');
const bcrypt = require('bcryptjs');

const cadastra = async (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.pessoa.password)
    const user = await Usuario.create({ ...req.body.pessoa, password: hashedPassword });

    //checa se alguma formacao foi preenchida antes de insetir no DB
    Object.keys(req.body.formacao).length && await Formacao.create({ ...req.body.formacao, usuarioId: user.id });
}

module.exports = cadastra;
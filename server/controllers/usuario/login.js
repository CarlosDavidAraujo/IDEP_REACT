const Usuario = require('../../models/Usuario');
const bcrypt = require('bcryptjs')

const login = async (req, res) => {
    let mensagem;
    const user = await Usuario.findOne({ where: { email: req.body.email, } });

    if (!user) mensagem = 'Não existem usuários cadastrados com o email informado';

    else {
        const validPassword = bcrypt.compareSync(req.body.password, user.password);
        validPassword ? mensagem = `Bem vindo ${user.nome}!` : mensagem = 'Senha inválida';
    }
    
    res.json(mensagem)
}

module.exports = login;

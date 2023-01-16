const db = require('../db');
const {DataTypes} = require('sequelize');
const Usuario = require('./Usuario');

const Formacao = db.define('formacoes', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    grau: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    curso: {
        type: DataTypes.STRING,
        allowNull: false
    },
    instituicao: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    inicio: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    termino: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
});

Usuario.hasMany(Formacao);
Formacao.belongsTo(Usuario);

Formacao.sync();

module.exports = Formacao;
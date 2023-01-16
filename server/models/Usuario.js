const db = require('../db');
const {DataTypes} = require('sequelize');

const Usuario = db.define('usuario', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING, 
        allowNull: false
    },   
    social: {
        type: DataTypes.STRING,
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nascimento: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    CPF: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    municipio: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bairro: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

const createTable = async () => {
    await Usuario.sync();
}

createTable();

module.exports = Usuario;
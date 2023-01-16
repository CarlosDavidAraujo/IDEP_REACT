const db = require('../db');
const {DataTypes}= require('sequelize');


const Vaga = db.define('vaga', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cargo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    empresa: {
        type: DataTypes.STRING,
        allowNull: false
    },
    etapa: {
        type: DataTypes.STRING,
        allowNull: false
    },
    localidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    modalidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
    },
    atribuicao: DataTypes.TEXT,
    requisito: DataTypes.TEXT,
    vantagem: DataTypes.TEXT,
    remuneracao: DataTypes.TEXT,
    sobreEmpresa: DataTypes.TEXT
});

const createTable = async () => {
    await Vaga.sync();
}

createTable();

module.exports = Vaga;
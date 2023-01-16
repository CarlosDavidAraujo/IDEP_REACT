const { Sequelize } = require('sequelize');
const {database, username, password, host, dialect, db_port} = require('./config');

const sequelize = new Sequelize(database, username, password, {
    host: host,
    dialect: dialect,
    port: db_port
});

async function checkConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

checkConnection();

module.exports = sequelize
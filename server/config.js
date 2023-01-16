const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    port: process.env.PORT,
    database: process.env.DATABASE,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    db_port: process.env.DB_PORT
};
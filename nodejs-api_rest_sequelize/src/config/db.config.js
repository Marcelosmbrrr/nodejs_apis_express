const { Sequelize } = require('sequelize');
require('dotenv').config();

// Connection configurations object
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.HOST,
    dialect: process.env.DIALECT
});

// Export connection
module.exports = sequelize;
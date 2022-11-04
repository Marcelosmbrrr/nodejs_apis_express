const { Model, DataTypes } = require("sequelize");
// Actual sequelize instance connection
const db = require("../config/db.config");
// Models
const User = require("./UserModel");

// Role model attributes are defined here
const Role = db.define("role", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    read: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    write: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

module.exports = Role;

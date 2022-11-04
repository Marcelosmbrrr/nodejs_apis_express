const { Model, DataTypes } = require("sequelize");
// Actual sequelize instance connection
const db = require("../config/db.config");
// Models
const Role = require("./RoleModel");

// User model attributes are defined here
const User = db.define("user", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sex: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});

// Relationships and foreign keys
User.belongsTo(Role, {
    constraint: true,
    foreignKey: "role_id"
});

module.exports = User;


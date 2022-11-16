import { DataTypes } from 'sequelize';
// Sequelize instance connection
import { conn } from "../config/db.config";

// Definition of user model
const User = conn.define("User", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: true,
    paranoid: true // soft delete
});

export { User };

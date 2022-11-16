import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";
dotenv.config();

// Connection configurations object
const conn = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.HOST,
    dialect: process.env.DIALECT
});

// Export connection
export { conn };
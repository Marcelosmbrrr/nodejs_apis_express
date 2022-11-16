/*
* Source: https://auth0.com/blog/node-js-and-typescript-tutorial-build-a-crud-api/
*/

/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { conn } from "./config/db.config";

dotenv.config();

/**
 * App Variables
*/

if (!process.env.APP_PORT) {
    process.exit(1);
}

const APP_PORT: number = parseInt(process.env.APP_PORT as string, 10);
const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

// Run all db routines
// Param: drop table before create
conn.sync({ force: true })
    .then(() => console.log("Database connected!"));

/*
* App routes
*/

import { router } from "../src/routes/router";
app.use(router);

/**
 * Server Activation
 */

app.listen(APP_PORT, () => {
    console.log(`Listening on port ${APP_PORT}`);
});


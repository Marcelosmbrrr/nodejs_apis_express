/*
* Source: https://auth0.com/blog/node-js-and-typescript-tutorial-build-a-crud-api/
*/

/**
 * 
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { conn } from "./config/db.config";

dotenv.config();

if (!process.env.APP_PORT) {
    process.exit(1);
}

/**
 *  App Configuration
 */

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

// Connect to database
// Drop table before create
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

app.listen(process.env.APP_PORT, () => {
    console.log(`Listening on port ${process.env.APP_PORT}`);
});


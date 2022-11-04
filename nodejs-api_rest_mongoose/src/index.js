require('dotenv').config();
// Libs
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
// Custom
const ApiRoutes = require("./routes/index");

// Enable CORS for origin
app.use(cors({
    origin: "localhost:8081"
}));

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Connection to database
require("./config/db.config");

// Models generation
require("./models/index");

// Seeders execution
require("./database/seeders");

// Routes
app.use("/api", ApiRoutes);

// Init app
app.listen(process.env.APP_PORT);
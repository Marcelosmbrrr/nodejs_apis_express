// Express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
// Custom
const routes = require("./src/routes/api");

// Enable CORS for origin
app.use(cors({
    origin: "localhost:3000"
}));

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use("/api", routes);

// Init app
app.listen(3000);
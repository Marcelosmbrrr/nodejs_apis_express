const mongoose = require('mongoose');
require('dotenv').config();

const config = {
    host: "localhost",
    db_port: "27017",
    db_name: "nodejs_api_rest"
}

module.exports = mongoose.connect("mongodb://" + config.host + ":" + config.db_port + "/" + config.db_name)
.then(() => {
    console.log("MongoDB connection successful!");
})
.catch((error) => {
    console.log(error);
})


const mongoose = require('mongoose');

// Define model
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    age: {
        type: Number,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    country: {
        type: String
    },
    contact: {
        country_code: String,
        area_code: String,
        number: String
    }
});

module.exports = UserSchema;


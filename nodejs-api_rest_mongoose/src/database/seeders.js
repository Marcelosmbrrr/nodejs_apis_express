const mongoose = require('mongoose');
const UserSchema = require("../models/UserModel");

// ==== USER INSERT ==== //
const NewUser = mongoose.model("User", UserSchema);

new NewUser({
    name: "Fulano",
    email: "fulano@gmail.com",
    age: 24,
    gender: "male",
    country: "Brazil",
    contact: {
        country_code: "55",
        area_code: "53",
        number: "32234216"
    }
})
.save()
.then(() => {
    console.log("User successful created!");
})
.catch((error) => {
    console.log("User creation error: " + error);
});
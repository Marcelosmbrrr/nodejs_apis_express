// Express
const express = require("express");
var router = express.Router();
// Controller
const UserController = require("../controllers/UserController");

router.get('/', function (req, res) {
    res.send('NodeJS + Express!!');
});
router.route("/user").get(UserController.findAll).post(UserController.createUser);
router.route("/user/:id").get(UserController.findOne).patch(UserController.updateOne).delete(UserController.deleteOne);

module.exports = router;

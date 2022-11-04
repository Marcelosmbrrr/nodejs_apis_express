// Libs
const express = require("express");
const router = express.Router();
// Controllers
const UserController = require("../controllers/UserController");

router.route("/", (req, res) => res.send("NodeJS + MongoDB + Mongoose!"));
// Api
router.route("/user").get(UserController.index).post(UserController.store);
router.route("/user/:id").get(UserController.show).patch(UserController.update).delete(UserController.destroy)

module.exports = router;
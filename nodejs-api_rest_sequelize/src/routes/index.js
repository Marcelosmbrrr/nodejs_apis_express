// Libs
const express = require("express");
const router = express.Router();
// Controllers
const UserController = require("../controllers/UserController");
const RoleController = require("../controllers/RoleController");

router.route("/", (req, res) => res.send("NodeJS + MySQL + Sequelize!"));
// User api
router.route("/user").get(UserController.index).post(UserController.store);
router.route("/user/:id").get(UserController.show).patch(UserController.update).delete(UserController.destroy)
// Role api
router.route("/role").get(RoleController.index).post(RoleController.store);
router.route("/role/:id").get(RoleController.show).patch(RoleController.update).delete(RoleController.destroy)

module.exports = router;
const { connect } = require("http2");
const db = require("../config/db.config");

const UserController = {

    findAll(req, res) {

        db.query("SELECT * FROM users", (error, result) => {

            if (error) {
                res.status(500).send({
                    error: error,
                    response: null
                });
            }

            res.status(200).send({
                message: "All users were found.",
                response: result
            });

        });

    },
    findOne(req, res) {

        db.query("SELECT * FROM users WHERE id = ?", [req.body.id], (error, result) => {

            if (error) {
                res.status(500).send({
                    error: error,
                    response: null
                });
            }

            res.status(200).send({
                message: "User was found.",
                response: result
            });

        });

    },
    createUser(req, res) {

        db.query("INSERT INTO users VALUES (?,?,?)", [req.body.name, req.body.sex, req.body.email], (error, result) => {

            if (error) {
                res.status(500).send({
                    error: error,
                    response: null
                });
            }

            res.status(200).send({
                message: "User was successful created.",
                response: result.insertId
            });

        });


    },
    updateOne(req, res) {

        db.query("UPDATE SET name = ?, sex = ?, email = ? WHERE id = ?", [req.body.name, req.body.sex, req.body.email, req.body.id], (error, result) => {

            if (error) {
                res.status(500).send({
                    error: error,
                    response: null
                });
            }

            res.status(200).send({
                message: "User successful updated!",
                response: result
            });

        });

    },
    deleteOne(req, res) {

        db.query("DELETE FROM users WHERE id = ?", [req.body.id], (error, result) => {

            if (error) {
                res.status(500).send({
                    error: error,
                    response: null
                });
            }

            res.status(200).send({
                message: "User successful deleted!",
                response: result
            });

        });
    }
}

module.exports = UserController;
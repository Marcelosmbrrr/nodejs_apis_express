const User = require('../models/UserModel');

module.exports = {
    async index(req, res) {
        try {
            const users = await User.findAll();
            res.status(200).json(users);
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    },
    async show(req, res) {
        try {
            const id = req.params.id;
            const User = await User.findOne({ where: { id } });

            if (!User) {
                return res.status(400).json("User not found!");
            }

            res.status(200).json(User);
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    },
    async store(req, res) {
        try {
            await User.create(req.body);
            res.status(200).json("User creation successful!");
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    },
    async update(req, res) {
        try {
            const { name, sex, age, role_id } = req.body;
            const id = request.params.id;
            const User = await User.findOne({ where: { id } });

            if (!User) {
                return res.status(400).json("User not found!");
            }

            User.name = name;
            User.sex = sex;
            User.age = age;
            User.role_id = role_id;

            await User.save();
            res.status(200).json("User successful updated!");
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    },
    async destroy(req, res) {
        try {
            const id = req.params.id;
            const User = await User.destroy({ where: { id } });

            if (!User) {
                return res.status(400).json("User not found!");
            }

            res.status(200).json("User was successful deleted!");
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    }
}
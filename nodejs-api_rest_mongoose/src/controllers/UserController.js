const User = require('../models/UserModel');

module.exports = {
    async index(req, res) {
        try {
            const users = await User.find();

            res.status(200).json(users);
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    },
    async show(req, res) {
        try {
            const id = req.params.id;
            const user = await User.findOne({ _id: id });

            if (!user) {
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
            const { name, email, age, gender, country, contact } = req.body;

            await User.create({
                name: name,
                email: email,
                age: age,
                gender: gender,
                country: country,
                contact: contact
            });

            res.status(200).json("User creation successful!");
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    },
    async update(req, res) {
        try {
            const id = req.params.id;
            const user = await User.findOne({ _id: id });

            if (!user) {
                return res.status(400).json("User not found!");
            }

            const { name, email, age, gender, country, contact } = req.body;
            const data = {
                name: name,
                email: email,
                age: age,
                gender: gender,
                country: country,
                contact: contact
            };

            await User.updateOne({ _id: id }, data);

            res.status(200).json("User update successful!");
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    },
    async destroy(req, res) {
        try {
            const id = req.params.id;
            const user = await User.findOne({ _id: id });

            if (!user) {
                return res.status(400).json("User not found!");
            }

            await User.deleteOne({ _id: id });

            res.status(200).json("User delete successful!");
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    }
}
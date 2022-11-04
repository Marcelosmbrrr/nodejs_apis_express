const Role = require('../models/RoleModel');

module.exports = {
    async index(req, res) {
        try {
            const roles = await Role.findAll();
            res.status(200).json(roles);
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    },
    async show(req, res) {
        try {
            const id = req.params.id;
            const role = await Role.findOne({ where: { id } });

            if (!role) {
                return res.status(400).json("Role not found!");
            }

            res.status(200).json(role);
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    },
    async store(req, res) {
        try {
            await Role.create(req.body);
            res.status(200).json("Role creation was a success!");
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    },
    async update(req, res) {
        try {
            const { name, read, write } = req.body;
            const id = request.params.id;
            const role = await Role.findOne({ where: { id } });

            if (!role) {
                return res.status(400).json("Role not found!");
            }

            role.name = name;
            role.read = read;
            role.write = write;

            await role.save();
            res.status(200).json("Role successful updated!");
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    },
    async destroy(req, res) {
        try {
            const id = req.params.id;
            const role = await Role.destroy({ where: { id } });

            if (!role) {
                return res.status(400).json("Role not found!");
            }

            res.status(200).json("Role was successful deleted!");
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    }
}
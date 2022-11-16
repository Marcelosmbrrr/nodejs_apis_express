import { Request, Response } from "express";
import { validationResult } from 'express-validator';
import { IController } from "../controllers/IController";
// Model
import { User } from "../models/User";

class UserController implements IController {

    async index(req: Request, res: Response) {

        try {
            const users = await User.findAll();
            return res.status(200).json(users);
        } catch (error) {
            return res.status(400).send(error);
        }

    }

    async find(req: Request, res: Response) {

        try {
            const identifier = req.params.id;
            const user = await User.findOne({ where: { identifier } });

            if (!User) {
                return res.status(404).json("User not found!");
            }

            return res.status(200).json(User);
        } catch (error) {
            return res.status(400).send(error);
        }

    }

    async store(req: Request, res: Response) {

        // Req validation
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            await User.create(req.body);
            return res.status(201).json("User creation successful!");
        } catch (error) {
            return res.status(400).send(error);
        }
    }

    async update(req: Request, res: Response) {

        // Req validation
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const identifier = req.params.id;
            const user = await User.findOne({ where: { identifier } });

            if (!user) {
                return res.status(404).json("User not found!");
            }

            await User.update({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }, {
                where: {
                    id: identifier
                }
            });

            return res.status(200).json("User successful updated!");
        } catch (error) {
            return res.status(400).send(error);
        }
    }

    async remove(req: Request, res: Response) {

        try {
            const id = req.params.id;
            const user = await User.destroy({ where: { id } });

            if (!user) {
                return res.status(404).json("User not found!");
            }

            return res.status(200).json("User was successful deleted!");
        } catch (error) {
            res.status(400).send(error);
        }
    }

}

export default new UserController();
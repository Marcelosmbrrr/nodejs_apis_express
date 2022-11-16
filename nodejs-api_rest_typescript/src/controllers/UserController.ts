import { randomUUID } from "crypto";
import { Request, Response } from "express";
import { IController } from "../controllers/IController";
// Model
import { User } from "../models/User";

class UserController implements IController {

    async index(req: Request, res: Response) {
        try {
            res.send("INDEX");
        } catch (error) {
            res.status(400).send(error);
        }
    }

    async find(req: Request, res: Response) {
        try {
            res.send("FIND");
        } catch (error) {
            res.status(400).send(error);
        }
    }

    async store(req: Request, res: Response) {
        try {
            res.send("STORE");
        } catch (error) {
            res.status(400).send(error);
        }
    }

    async update(req: Request, res: Response) {
        try {
            res.send("UPDATE");
        } catch (error) {
            res.status(400).send(error);
        }
    }

    async remove(req: Request, res: Response) {
        try {
            res.send("REMOVE");
        } catch (error) {
            res.status(400).send(error);
        }
    }

}

export default new UserController();
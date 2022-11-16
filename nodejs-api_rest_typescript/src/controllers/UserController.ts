import { randomUUID } from "crypto";
import { Request, Response } from "express";

interface IUser {
    id: string,
    name: string,
    email: string,
    password: string
}

const entity: IUser[] = []

class UserController {

    async index(req: Request, res: Response) {
        return res.send("INDEX")
    }

    async find(req: Request, res: Response) {
        return res.send("FIND")
    }

    async store(req: Request, res: Response) {
        return res.send("STORE")
    }

    async update(req: Request, res: Response) {
        return res.send("UPDATE")
    }

    async remove(req: Request, res: Response) {
        return res.send("REMOVE")
    }

}

export default new UserController();
import { Request, Response } from "express";

export interface IController {

    index(req: Request, res: Response): any;
    find(req: Request, res: Response): any;
    store(req: Request, res: Response): any;
    update(req: Request, res: Response): any;
    remove(req: Request, res: Response): any;

}
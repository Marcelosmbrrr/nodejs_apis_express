import { Router } from "express";
import UserController from "../controllers/UserController";

const router = Router();

router.get('/users', UserController.index);

router.get('/users/:identifier', UserController.find);

router.post('/users', UserController.store);

router.patch('/users/:identifier', UserController.update);

router.delete('/users/:identifier', UserController.remove);

export { router }
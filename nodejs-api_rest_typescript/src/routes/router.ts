import { Router } from "express";
import { body, validationResult } from 'express-validator';
import UserController from "../controllers/UserController";

const request_validation = [
    body('name').notEmpty().withMessage("Name is required").isLength({ min: 3 }),
    body('email').notEmpty().withMessage("Email is required").isEmail(),
    body('password').notEmpty().withMessage("Password is required").isLength({ min: 3 })
]

const router = Router();

router.get('/users', UserController.index);

router.get('/users/:identifier', UserController.find);

router.post('/users', request_validation, UserController.store);

router.patch('/users/:identifier', request_validation, UserController.update);

router.delete('/users/:identifier', UserController.remove);

export { router }
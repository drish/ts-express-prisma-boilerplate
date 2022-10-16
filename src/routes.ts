import express, { Router } from "express";
import "./controllers/user.controller";
import * as userController from './controllers/user.controller'

const router: Router = express.Router();

router.get('/', userController.get)

export default router;
import { Router } from "express";
import { checkLogin } from "../controllers/login/check_login.js";
export const loginRouter = Router();

loginRouter.post("/", checkLogin);
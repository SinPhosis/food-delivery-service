import { Router } from "express";
import { checkLogin } from "../controllers/login/check-login.js";
export const loginRouter = Router();

loginRouter.post("/", checkLogin);
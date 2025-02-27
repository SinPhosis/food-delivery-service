import { Router } from "express";
import { deleteUser } from "../user_data/delete-user.js";
import { updatedUsers } from "../user_data/edit-user.js";
import { GetUsers } from "../user_data/get-user.js";
import { createUser } from "../controllers/users/CreateUser.controller.js";

export const userRouter = Router();

userRouter.get("/", GetUsers);
userRouter.delete("/", deleteUser);
userRouter.put("/", updatedUsers);
userRouter.post("/", createUser);
import { Router } from "express";
import { deleteUser } from "../controllers/user-data/delete-user.js";
import { createUser } from "../controllers/user-data/create-user.js";
import { updatedUsers } from "../controllers/user-data/edit-user.js";
import { getUsers } from "../controllers/user-data/get-user.js";
export const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.delete("/", deleteUser);
userRouter.put("/", updatedUsers);
userRouter.post("/", createUser);
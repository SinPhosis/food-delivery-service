import express from "express";
import { deleteUser } from "../user data/delete-user.js";
import { updateUser } from "../user data/edit-user.js";
import { getUsers } from "../user data/get-user.js";

export const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.delete("/", deleteUser);
userRouter.put("/", updateUser);
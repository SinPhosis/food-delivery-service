import { Router } from "express";
import { deleteUser } from "../controllers/user-data/delete-user.js";
import { createUser } from "../controllers/user-data/create-user.js";
import { updatedUsers } from "../controllers/user-data/edit-user.js";
import { getUsers } from "../controllers/user-data/get-user.js";
import { getAllUser } from "../controllers/user-data/get-all-user.js";
export const userRouter = Router();

userRouter.get("/:id", getUsers);
userRouter.get("/", getAllUser)
userRouter.delete("/", deleteUser);
userRouter.put("/:id", updatedUsers);
userRouter.post("/", createUser);
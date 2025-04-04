import { Router } from "express";

import { deleteUser } from "../controllers/user_data/delete-user.js";
import { createUser } from "../controllers/user_data/create-user.js";
import { updatedUsers } from "../controllers/user_data/update-user.js";
import { getUsers } from "../controllers/user_data/get-user.js";
import { getAllUser } from "../controllers/user_data/get-all-user.js";

export const userRouter = Router();

userRouter.get("/:id", getUsers);
userRouter.get("/", getAllUser)
userRouter.delete("/:id", deleteUser);
userRouter.put("/:id", updatedUsers);
userRouter.post("/", createUser);


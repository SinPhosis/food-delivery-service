import { Router } from "express";

import { deleteUser } from "../controllers/user_data/delete_user.js";
import { createUser } from "../controllers/user_data/create_user.js";
import { updatedUsers } from "../controllers/user_data/update_user.js";
import { getUsers } from "../controllers/user_data/get_user.js";
import { getAllUser } from "../controllers/user_data/get_all_user.js";


export const userRouter = Router();

userRouter.get("/:id", getUsers);
userRouter.get("/", getAllUser)
userRouter.delete("/:id", deleteUser);
userRouter.put("/:id", updatedUsers);
userRouter.post("/", createUser);


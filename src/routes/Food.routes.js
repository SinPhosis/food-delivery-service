import { Router } from "express";
import { createFood } from "../controllers/foods/create-food.js";
import { deleteFood } from "../controllers/foods/delete-food.js";
import { getFood } from "../controllers/foods/get-food.js";
import { getAllFood } from "../controllers/foods/get-all-food.js";
import { updatedFood } from "../controllers/foods/update-food.js";
export const foodRouter = Router();

foodRouter.get("/:id", getFood);
foodRouter.get("/", getAllFood);
foodRouter.delete("/:id", deleteFood);
foodRouter.post("/", createFood);
foodRouter.put("/:id", updatedFood);
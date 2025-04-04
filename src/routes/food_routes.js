import { Router } from "express";
import { createFood } from "../controllers/foods/create_food.js";
import { deleteFood } from "../controllers/foods/delete_food.js";
import { getFood } from "../controllers/foods/get_food.js";
import { getAllFood } from "../controllers/foods/get_all_food.js";
import { updatedFood } from "../controllers/foods/update_food.js";
export const foodRouter = Router();

foodRouter.get("/:id", getFood);
foodRouter.get("/", getAllFood);
foodRouter.delete("/:id", deleteFood);
foodRouter.post("/", createFood);
foodRouter.put("/:id", updatedFood);

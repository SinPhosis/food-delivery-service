import { Router } from "express";
import { updatedCategory } from "../controllers/categories/update_food_category.js";
import { deleteCategory } from "../controllers/categories/delete_food_category.js";
import { getFoodCategory } from "../controllers/categories/get_food_category.js";
import { createCategory } from "../controllers/categories/create_food_category.js";
import { getAllFoodCategory } from "../controllers/categories/get_all_food_category.js";
export const categoryRouter = Router();

categoryRouter.get("/:id", getFoodCategory);
categoryRouter.get("/", getAllFoodCategory);
categoryRouter.post("/", createCategory);
categoryRouter.put("/:id", updatedCategory);
categoryRouter.delete("/:id", deleteCategory);
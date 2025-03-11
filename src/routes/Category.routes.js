import { Router } from "express";
import { updatedCategory } from "../controllers/categories/update-food-category.js";
import { deleteCategory } from "../controllers/categories/delete-food-category.js";
import { getFoodCategory } from "../controllers/categories/get-food-category.js";
import { createCategory } from "../controllers/categories/create-food-category.js";
export const categoryRouter = Router();

categoryRouter.get("/", getFoodCategory);
categoryRouter.post("/", createCategory);
categoryRouter.put("/:id", updatedCategory);
categoryRouter.delete("/:id", deleteCategory);
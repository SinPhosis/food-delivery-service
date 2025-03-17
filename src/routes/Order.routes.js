import { Router } from "express";
import { getOrder } from "../controllers/orders/get-order.js";
import { getAllOrder } from "../controllers/orders/get-all-order.js";
import { deleteOrder } from "../controllers/orders/delete-order.js";
import { updatedOrder } from "../controllers/orders/update-order.js";
import { createOrder } from "../controllers/orders/create-order.js";
export const orderRouter = Router();

orderRouter.get("/:id", getOrder);
orderRouter.get("/", getAllOrder);
orderRouter.delete("/:id", deleteOrder);
orderRouter.put("/:id", updatedOrder);
orderRouter.post("/", createOrder);
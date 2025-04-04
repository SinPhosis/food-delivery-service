import { Router } from "express";
import { getOrder } from "../controllers/orders/get_order.js";
import { getAllOrder } from "../controllers/orders/get_all_order.js";
import { deleteOrder } from "../controllers/orders/delete_order.js";
import { updatedOrder } from "../controllers/orders/update_order.js";
import { createOrder } from "../controllers/orders/create_order.js";
export const orderRouter = Router();

orderRouter.get("/:id", getOrder);
orderRouter.get("/", getAllOrder);
orderRouter.delete("/:id", deleteOrder);
orderRouter.put("/:id", updatedOrder);
orderRouter.post("/", createOrder);
import { FoodOrder } from "../../models/food_order_model.js";

export const createOrder = async (req, res) => {
  const { user, totalPrice, status } = req.body;
  try {
    const orders = new FoodOrder({
      user: user,
      totalPrice: totalPrice,
      status: status,
    });
    orders.save();
    res.status(201).json({ success: true, data: orders });
  } catch (error) {
    console.error("Error creating order: ", error);
    res.status(500).json({ success: false, message: "Error creating order" });
  }
};

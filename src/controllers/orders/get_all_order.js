import { FoodOrder } from "../../models/food_order_model.js";

export const getAllOrder = async (req, res) => {
  try {
    const getAllOrder = await FoodOrder.find();

    if (!getAllOrder || getAllOrder.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No orders found",
      });
    }
    res.status(200).json({ success: true, data: getAllOrder });
  } catch (error) {
    console.error("Error while getting orders: ", error);
    res
      .status(500)
      .json({ success: false, message: "Error while getting orders" });
  }
};

import { FoodOrder } from "../../models/food_order_model.js";

export const updatedOrder = async (req, res) => {
  const orderData = req.body;
  const { id } = req.params;

  try {
    const updatedOrder = await FoodOrder.findByIdAndUpdate(id, orderData, {
      new: true,
    });

    if (!updatedOrder) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }
    res.status(202).json({ success: true, data: updatedOrder });
  } catch (error) {
    console.error("Error while updating order: ", error);
    res
      .status(500)
      .json({ success: false, message: "Error while updating order" });
  }
};

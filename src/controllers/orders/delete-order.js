import { FoodOrder } from "../../models/food-order-model.js";

export const deleteOrder = async (req, res) => {
  const orderData = req.body;
  const { id } = req.params;

  try {
    const deletedOrder = await FoodOrder.findByIdAndDelete(id, orderData, {
      deleted: true,
    });

    if (!deleteOrder) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }
    res
      .status(200)
      .json({ success: true, message: "Successfully deleted order" });
  } catch (error) {
    console.error("Error deleting order: ", error);
    res.status(500).json({ success: false, message: "Error deleting order" });
  }
};

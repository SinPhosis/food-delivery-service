import { FoodOrder } from "../../models/food-order-model.js";

export const getOrder = async (req, res) => {
  const orderData = req.body;
  const { id } = req.params;

  try {
    const getOrderById = await FoodOrder.findById(id, orderData);

    if (!getOrderById) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }
    res.status(200).json({ success: true, data: getOrder });
  } catch (error) {
    console.error("Error while getting order: ", error);
    res
      .status(500)
      .json({ success: false, message: "Error while getting order" });
  }
};

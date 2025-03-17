import { Food } from "../../models/food.model.js";

export const getFood = async (req, res) => {
  const foodData = req.body;
  const { id } = req.params;

  try {
    const getFoodById = await Food.findById(id, foodData);

    if (!getFoodById) {
      return res.status(404).json({
        success: false,
        message: "Food not found",
      });
    }
    res.status(200).json({ success: true, data: getFoodById });
  } catch (error) {
    console.error("Error while getting food: ", error);
    res
      .status(500)
      .json({ success: false, message: "Error while getting food" });
  }
};

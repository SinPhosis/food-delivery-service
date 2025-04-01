import { Food } from "../../models/food-model.js";

export const getAllFood = async (req, res) => {
  try {
    const getAllFood = await Food.find();

    if (!getAllFood || getAllFood.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No foods found",
      });
    }
    res.status(200).json({ success: true, data: getAllFood });
  } catch (error) {
    console.error("Error while getting foods: ", error);
    res
      .status(500)
      .json({ success: false, message: "Error while getting food" });
  }
};

import { Food } from "../../models/food.model.js";

export const getFood = async (req, res) => {
  try {
    const getFood = await Food.find();

    if (!getFood || getFood.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No food found",
      });
    }

    res.status(200).json({ success: true, data: getFood });
  } catch (error) {
    console.error("Error while getting food: ", error);
    res.status(500).json({ success: false, message: "Error while food" });
  }
};

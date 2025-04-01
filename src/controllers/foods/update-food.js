import { Food } from "../../models/food-model.js";

export const updatedFood = async (req, res) => {
  const foodData = req.body;
  const { id } = req.params;

  try {
    const updatedFood = await Food.findByIdAndUpdate(id, foodData, {
      new: true,
    });

    if (!updatedFood) {
      return res.status(404).json({
        success: false,
        message: "Food not found",
      });
    }
    res.status(202).json({ success: true, data: updatedFood });
  } catch (error) {
    console.error("Error while updating food: ", error);
    res
      .status(500)
      .json({ success: false, message: "Error while updating category" });
  }
};

import { Food } from "../../models/food_model.js";

export const deleteFood = async (req, res) => {
  const foodData = req.body;
  const { id } = req.params;

  try {
    const deletedFood = await Food.findByIdAndDelete(id, foodData, {
      deleted: true,
    });

    if (!deletedFood) {
      return res.status(404).json({
        success: false,
        message: "Food not found",
      });
    }
    res
      .status(200)
      .json({ success: true, message: "Successfully deleted food" });
  } catch (error) {
    console.error("Error deleting food:", error);
    res.status(500).json({ success: false, message: "Error deleting food" });
  }
};

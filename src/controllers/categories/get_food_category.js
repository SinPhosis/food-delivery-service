import { Categories } from "../../models/categories_model.js";
import { Food } from "../../models/food_model.js";

export const getFoodCategory = async (req, res) => {
  const { id } = req.params; 

  try {

    const category = await Categories.findById(id);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "No food category found",
      });
    }

    const foods = await Food.find({ category: id });

    if (foods.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No foods found for this category",
      });
    }

    res.status(200).json({
      success: true,
      data: {
        category: category.name, 
        foods: foods,
      },
    });
  } catch (error) {
    console.error("Error while getting food category: ", error);
    res.status(500).json({
      success: false,
      message: "Error while fetching food category",
    });
  }
};
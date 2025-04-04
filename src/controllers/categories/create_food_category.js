import { Categories } from "../../models/categories_model.js";

export const createCategory = async (req, res) => {
  const { categoryName } = req.body;
  try {
    const categories = new Categories({
      categoryName: categoryName,
    });
    categories.save();
    res.status(201).json({ success: true, data: categories });
  } catch (error) {
    console.error("Error creating categories:", error);
    res
      .status(500)
      .json({ success: false, message: "Error creating categories" });
  }
};

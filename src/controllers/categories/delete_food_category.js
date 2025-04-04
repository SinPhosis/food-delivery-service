import { Categories } from "../../models/categories_model.js";

export const deleteCategory = async (req, res) => {
  const categoryData = req.body;
  const { id } = req.params;

  try {
    const deletedCategory = await Categories.findByIdAndDelete(
      id,
      categoryData,
      {
        deleted: true,
      }
    );

    if (!deletedCategory) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }
    res
      .status(200)
      .json({ success: true, message: "Successfully deleted category" });
  } catch (error) {
    console.error("Error deleting category", error);
    res
      .status(500)
      .json({ success: false, message: "Error deleting category" });
  }
};

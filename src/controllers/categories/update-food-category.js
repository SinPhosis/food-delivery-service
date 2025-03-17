import { Categories } from "../../models/categories.model.js";

export const updatedCategory = async (req, res) => {
  const categoryData = req.body;
  const { id } = req.params;

  try {
    const updatedCategory = await Categories.findByIdAndUpdate(
      id,
      categoryData,
      {
        new: true,
      }
    );

    if (!updatedCategory) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }
    res.status(202).json({ success: true, data: updatedCategory });
  } catch (error) {
    console.error("Error while updating category: ", error);
    res
      .status(500)
      .json({ success: false, message: "Error while updating category" });
  }
};

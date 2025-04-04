import { UsersModel } from "../../models/users-model.js";

export const updatedUsers = async (req, res) => {
  const userData = req.body;
  const { id } = req.params;

  try {
    const updatedUser = await UsersModel.findByIdAndUpdate(id, userData, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(202).json({ success: true, data: updatedUser });
  } catch (error) {
    console.error("Error while updating user:", error);
    res
      .status(500)
      .json({ success: false, message: "Error while updating user" });
  }
};

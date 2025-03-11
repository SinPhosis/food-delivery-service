import { UsersModel } from "../../models/users-model.js";

export const deleteUser = async (req, res) => {
  const userData = req.body;
  const { id } = req.params;
  console.log(id);

  try {
    const deletedUser = await UsersModel.findByIdAndDelete(id, userData, {
      deleted: true,
    });

    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res
      .status(200)
      .json({ success: true, message: "Successfully deleted user" });
  } catch (error) {
    console.error("Error deleting user", error);
    res.status(500).json({ success: false, message: "Error deleting user" });
  }
};

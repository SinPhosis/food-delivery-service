import { UsersModel } from "../../models/users-model.js";

export const deleteUser = async (req, res) => {
  const { id, email, password, phoneNumber, username } = req.body;
  if (!id || !email || !password || !phoneNumber || !username ) {
    return res.status(400).json({
      success: false,
      message: "id, email, password and phone number are required",
    });
  }
  try {
    const deletedUser = await UsersModel.findByIdAndDelete(
      id,
      { email, password, phoneNumber, username },
      { deleted: true }
    );

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

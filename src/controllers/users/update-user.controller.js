import { UsersModel } from "../../models/users-model.js";

export const updatedUsers = async (req, res) => {
  const { id, email, password, phoneNumber } = req.body;
  if (!id || !email || !password || !phoneNumber) {
    return res.status(400).json({
      success: false,
      message: "id, email, password and phone number are required",
    });
  }

  try {
    const updatedUser = await UsersModel.findByIdAndUpdate(
      id,
      { email, password, phoneNumber },
      { new: true }
    );
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

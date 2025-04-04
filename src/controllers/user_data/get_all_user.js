import { UsersModel } from "../../models/users_model.js";

export const getAllUser = async (req, res) => {
  try {
    const getAllUser = await UsersModel.find();

    if (!getAllUser || getAllUser.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No users found",
      });
    }
    res.status(200).json({ success: true, data: getAllUser });
  } catch (error) {
    console.error("Error while getting users: ", error);
    res
      .status(500)
      .json({ success: false, message: "Error while getting users" });
  }
};

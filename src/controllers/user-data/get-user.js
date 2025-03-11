import { UsersModel } from "../../models/users-model.js";

export const getUsers = async (req, res) => {
  const userData = req.body;
  const { id } = req.params;

  try {
    const getUserById = await UsersModel.findById(id, userData);

    if (!getUserById) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    console.error("Error while getting user: ", error);
    res
      .status(500)
      .json({ success: false, message: "Error while getting users" });
  }
};

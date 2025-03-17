import { UsersModel } from "../../models/users-model.js";

export const createUser = async (req, res) => {
  const { password, email } = req.body;
  try {
    const users = new UsersModel({
      password: password,
      email: email,
    });
    users.save();
    res.status(201).json({ success: true, data: users });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ success: false, message: "Error creating user" });
  }
};

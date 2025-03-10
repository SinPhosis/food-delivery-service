import { GetUsers } from "../user-data/get-user.js";

export const createUser = (req, res) => {
  try {
    const user = req.body;

    if (!user.name || !user.email) {
      return res.status(400).json({
        success: false,
        message: "Name and email are required.",
      });
    }

    const users = GetUsers();
    users.push(user);

    res.status(201).json({
      success: true,  
      data: user,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({
      success: false,
      message: "Error creating user",
    });
  }
};

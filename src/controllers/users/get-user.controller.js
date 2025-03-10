import { GetUsers } from "../../user_data/get-user.js";

export const createUser = (req, res) => {
  try {
    const user = req.body;

    GetUsers.push(user);

    res.status(201).send({
      status: "success",
      data: user,
    });
  } catch (error) {
    console.error("Error getting user:", error);
    res.send(500).json({ success: false, message: "Error getting user" });
  }
};

import { UsersModel } from "../models/users-model.js";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
  const { password, email } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Email and password are required" });
  }

  try {
    const user = await UsersModel.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Email not found." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid password." });
    }

    // Generate a token (JWT or session) if using token-based authentication
    // Example: const token = jwt.sign({ userId: user._id }, "your_jwt_secret", { expiresIn: "1h" });

    res
      .status(200)
      .json({
        success: true,
        message: "Successfully logged in." /* , token */,
      });
  } catch (error) {
    console.error("Error while logging in users: ", error);
    res
      .status(500)
      .json({ success: false, message: "Error while logging in users" });
  }
};

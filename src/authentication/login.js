import { UsersModel } from "../models/users-model";
import bcrypt from bcrypt;
export const login = async (req, res) => {
  const { password, email } = req.body;
  try {
    if (!email) {
      return res
        .status(400)
        .json({ success: false, message: "Please enter your email!" });
    } else if (email !== email) {
      return res.status(400).json({ success: false, message: "This email does not match."})
    } 
    const hashedPassword = await bcrypt.hash(password, 10);
    bcrypt.compareSync(password, hashedPassword);

    res.status(201).json({ success: true, message: "Successfully logged in."});
  } catch (error) {
    res.status(500).json({ success: false, message: "Error while logging in users"})
  }
};

import { UsersModel } from "../models/users-model";
import bcrypt from bcrypt;
export const signUp = async (req, res) => {
  const {  password, email } = req.body;
  try {
    const existingEmail = await UsersModel.findOne({ email });
    if (existingEmail) {
      return res
        .status(500)
        .json({ success: false, message: "This email is already used" });
    };
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UsersModel({
        email,
        password : hashedPassword
    });

    await newUser.save();

    res.status(201).json({ success: true, message: "Successfully created a user." });
  } catch (error) {
    console.error("Error while signing up users: ", error);
    res.status(500).json({ success: false, message: "Error while signing up users" });
  }
};

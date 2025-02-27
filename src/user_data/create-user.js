import { UsersModel } from "../models/users-model.js";

export const createUser = async (req, res) => {
    const { username, password, email, phoneNumber } = req.body;
    try {
        const users = new UsersModel({
            username : username,
            password : password,
            email : email,
            phoneNumber : phoneNumber
        });
        users.save();
        res.send(users);
    } catch (error) {
        console.error("Error creating user:", error);
        res.send(500).json({ success: false, message: "Error creating user" });
    }
};
import { UsersModel } from "../../models/users-model.js";


export const getUsers = async (req, res) => {
    try {
        const users = await UsersModel.find();
        res.status(200).json({ success: true, data: users });
    } catch (error) {
        console.error("Error while getting users: ", error);
        res.status(500).json({ success: false, message: "Error while getting users" });
    }
};

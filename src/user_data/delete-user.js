import { UsersModel } from "../models/users-model.js";

export const deleteUser = async (req, res) => {
    const { id } = req.body;

    try {
        await UsersModel.findByIdAndDelete(id);

        res.status(200).json({ success : true, message : "Successfully deleted user" });
    } catch (err) {
        res.status(500).json({ success : false, message : "Error deleting user" });
    }
};
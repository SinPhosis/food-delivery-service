import { UsersModel } from "../models/users-model.js";

export const GetUsers = async (req, res) => {
    try {
        const rawUserData = await UsersModel.find();
        const users = rawUserData;
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send("Error while getting user:", error);
    }
};
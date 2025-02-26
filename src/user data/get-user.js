import { UsersModel } from "../models/users-model";

export const GetUsers = async (req, res) => {
    try {
        const rawUserData = await UsersModel.find();
        const users = rawUserData;
        res.statusCode(200).send(users);
    } catch (error) {
        res.statusCode(500).send("Error while getting user:", error);
    }
};
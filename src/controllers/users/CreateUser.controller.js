import { GetUsers } from "../../user_data/get-user.js";

export const createUser = (req, res) => {
    const user = req.body; 

    GetUsers.push(user);

    res.status(201).send({
        status: "success",
        data: user
    });
};

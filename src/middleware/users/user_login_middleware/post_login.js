import bcrypt from "bcrypt";
import { UsersModel } from "../../../models/users_model.js";
import jsonwebtoken from "jsonwebtoken";
import "dotenv/config";
export const checkPassword = async (req, res) => {
    try {
        const { email, password} = req.body;
        const user = await UsersModel.findOne({ email });

        if(!user) {
            return res.status(400).json({ success: false, message: "User not found" });
        }
        console.log(user);

        const passwordCorrect = await bcrypt.compare(password, user.hashedPassword);

        if(!passwordCorrect) {
            return res.status(400).json({ success: false, message: "Wrong password or email" });
        }
        const token = jsonwebtoken.sign({
            userId : user._id,
            email: user.email,
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
        },
        process.env.JWT_TOKEN_SECRET_KEY,
        { expiresIn: "6h" }
    );
    res.status(200).send(token);
    } catch (error) {
        console.error("Internal Server Error", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
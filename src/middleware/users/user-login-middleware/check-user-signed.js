import { UsersModel } from "../../../models/users-model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const checkUserSigned = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const isSigned = UsersModel.findOne({ email });
    if (!isSigned) {
      res.json({
        success: false,
        message: "Account not found",
      });
    } else {
      const isCorrect = await bcrypt.compare(password, isSigned.password);
      const dateAsMiloSecond = Date.now();
      console.log(dateAsMiloSecond);
      const currentDate = new Date(dateAsMiloSecond).toLocaleDateString();

      const dateAsSecond = Math.floor(dateAsMiloSecond / 1000);
      console.log(dateAsSecond);
      const currentDateInSeconds = new Date(
        dateAsSecond * 1000
      ).toLocaleString();

      console.log("currentDateInSeconds", currentDateInSeconds);

      const expTime = dateAsSecond + 60 * 60;
      console.log(expTime);
      const expDate = new Date(expTime * 1000).toLocaleString();
      console.log("expirationDate", expDate);
      const decodePassword = "SinPhosis";
      if (!isCorrect) {
        const token = jwt.sign(
          { exp: Math.floor(Date.now() / 1000) + 60 * 60, data: isSigned },
          decodePassword
        );
        console.log("this is the token", token);

        const decoded = jwt.verify(token, "1111");

        console.log("this is decoded", decoded);
        res.json({ success: true, message: "logged in", token: token });
      } else {
        res.json({ success: false, message: "Wrong password" });
      }
    }
  } catch (error) {
    console.error("User sign in error: ", error);
    res.status(500).json({ message: "User sign in error" });
  }
};

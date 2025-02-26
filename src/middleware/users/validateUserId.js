import { ObjectId } from "mongodb";
import { UsersModel } from "../models/users-model";
import mongoose from "mongoose";

export const validateUser = async (req, res, next) => {
  const { id } = req.body;
  try {
    if (!id) {
      res.status(303).json({ success: false, message: "Invalid ID" });
    } else {
      const user = await UsersModel.findById(mongoose.Types.ObjectId(id));
      if (!user) {
        res.status(404).json({ success: false, message: "Users not found " });
      } else {
        next();
      }
    }
  } catch (error) {
    res.status(500).json({ success: false, message: `error, ${err}` });
  }
};

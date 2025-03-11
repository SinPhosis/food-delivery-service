import { ObjectId } from "mongodb";
import { UsersModel } from "../models/users-model.js";
import mongoose from "mongoose";

export const validateUser = async (req, res, next) => {
  const { id } = req.params
  
  try {
    if (!id || !ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: "Invalid ID" });
    }

    const user = await UsersModel.findById(mongoose.Types.ObjectId(id));
    
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    
    res.status(200).json({ success: true, message: "User found" });
    //next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: `Error: ${error.message}` });
  }
};

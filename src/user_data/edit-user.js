import fs from "fs";
import { UsersModel } from "../models/users-model.js";

export const updatedUsers = async (req, res) => {
  const { id } = req.body;
  try {
    const updatedUsers = await UsersModel.findByIdAndUpdate(
    { _id: id}
    );
    res.status(202).send(updatedUsers);
  } catch (error) {
    res.status(500).send("Error while updating user:", error);
  }
};
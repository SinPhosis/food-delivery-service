import mongoose from "mongoose";

//Schema => model
// collection => table

const usersSchema = new mongoose.Schema({
    name: { type: String, require: true},
});

export const Users = mongoose.model("users", usersSchema)
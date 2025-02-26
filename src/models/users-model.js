import mongoose from "mongoose";

//Schema => model
// collection => table

const usersSchema = new mongoose.Schema({
  email: { type: String, require: true },
  password: { type: String, require: true },
  phoneNumber: { type: String, require: true },
  address: { type: String, require: true },
  orderedFoods: [
    {
      name: String,
      type: {
        type: { type: String },
      },
      require: false,
    },
  ],
  isVerified: { type: Boolean, require: false, default: false},
  createdAt : { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const UsersModel = mongoose.model("users", usersSchema);

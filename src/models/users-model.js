import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: String },
  address: { type: String },
  orderedFoods: [
    {
      name: String,
      type: {
        type: { type: String },
      },
    },
  ],
  isVerified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const UsersModel = mongoose.model("users", usersSchema);

import mongoose from "mongoose";

//Schema => model
// collection => table

const usersSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  orderedFoods: [
    {
      name: String,
      type: {
        type: { type: String },
      },
      
    },
  ],
  isVerified: { type: Boolean,  default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const UsersModel = mongoose.model("users", usersSchema);

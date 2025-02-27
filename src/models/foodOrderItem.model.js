import mongoose from "mongoose";

const foodOrderItemSchema = new mongoose.Schema({
  food: { type: mongoose.Types.ObjectId, ref: "foods" },
  quantity: { type: Number, required: true },
});

export const Users = mongoose.model("FoodOrderItem", foodOrderItemSchema);

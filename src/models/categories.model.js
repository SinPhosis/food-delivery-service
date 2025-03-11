import mongoose from "mongoose";

const categoriesSchema = new mongoose.Schema({
  categoryName: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const Categories = mongoose.model("categories", categoriesSchema);

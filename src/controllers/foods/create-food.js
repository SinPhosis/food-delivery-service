import { Food } from "../../models/food-model.js";

export const createFood = async (req, res) => {
  const { foodName, price, image, ingredients, category } = req.body;
  try {
    
    const foods = new Food({
      foodName: foodName,
      price: price,
      image: image,
      ingredients: ingredients,
      category : category,
    });
    foods.save();
    res.status(201).json({ success: true, data: foods });
  } catch (error) {
    console.error("Error creating food: ", error);
    res.status(500).json({ success: false, message: "Error creating food" });
  }
};

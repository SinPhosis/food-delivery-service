import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    foodName : { type : String, require : true },
    price : { type : Number, require : true },
    image : { type : String, require: true },
    ingredients : { type : String, require :  true },
    category : { type : mongoose.Types.ObjectId, ref : "categories" },
});

export const Users = mongoose.model("foods", foodSchema);
import mongoose from "mongoose";

const foodOrderSchema = new mongoose.Schema({
    user: { type : mongoose.Types.ObjectId, require : true, ref : "users" },
    totalPrice : { type : Number, require : true },
    image : { type : String, require : true },
    foodOrderItems : [{ type : mongoose.Types.ObjectId, ref : "foodOrderItem" }],
    status : {
        type : String,
        enum : ["PENDING", "CANCELLED", "DELIVERED"],
        require : true,
    },
});

export const Users = mongoose.model("foodOrder", foodOrderSchema);
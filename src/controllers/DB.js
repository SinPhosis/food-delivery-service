import mongoose from "mongoose";
const DB = async () => {
  const uri =
    "mongodb+srv://SinPhosis:UnknownDarkness666@delivery-food.suutt.mongodb.net/test?retryWrites=true&w=majority&appName=Delivery-Food";
  try {
    await mongoose.connect(uri);
    console.log("Successfully connected");
  } catch (error) {
    console.log("Error!", error);
  }
};
export default DB;
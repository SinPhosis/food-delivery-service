import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
export const connectDb = async () => {
  try {
    console.log(process.env.DATABASE_CONNECTION_URL);

    await mongoose.connect(process.env.DATABASE_CONNECTION_URL);
    console.log("Successfully connected");
  } catch (error) {
    console.log("Error!", error);
  }
};

connectDb();

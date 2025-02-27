import express from "express";
import cors from "cors";
import { orderRouter } from "./routes/Order.routes.js";
import { categoryRouter } from "./routes/Category.routes.js";
import { userRouter } from "./routes/User-routes.js";
import { foodRouter } from "./routes/Food.routes.js";
import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();
const connectDb = async () => {
try {
    await mongoose.connect(process.env.DATABASE_CONNECTION_URL);
    console.log("Successfully connected");
  } catch (error) {
    console.log("Error!", error);
  }
};

connectDb();

const app = express();
const port = 666;

app.use(express.json());

app.use(cors());

app.use("/food", foodRouter),
  app.use("/order", orderRouter),
  app.use("/user", userRouter),
  app.use("/category", categoryRouter),
  app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
  });

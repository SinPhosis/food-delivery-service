import express from "express";
import cors from "cors";
import { loginRouter } from "./src/routes/login_routes.js";
import { connectDb } from "./src/mongo_connection.js";
import { foodRouter } from "./src/routes/food_routes.js";
import { orderRouter } from "./src/routes/order_routes.js";
import { categoryRouter } from "./src/routes/category_routes.js";
import { userRouter } from "./src/routes/user_routes.js";


connectDb();

const app = express();
const port = 500;

app.use(express.json());

app.use(cors());

app.use("/user", userRouter);
app.use("/food", foodRouter);
app.use("/order", orderRouter);
app.use("/category", categoryRouter);
app.use("/login", loginRouter);
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

import express from "express";
import cors from "cors";
import { userRouter } from "./src/routes/user-routes.js";
import { loginRouter } from "./src/routes/login-routes.js";
import { connectDb } from "./src/mongo-connection.js";
import { foodRouter } from "./src/routes/food-routes.js";
import { orderRouter } from "./src/routes/order-routes.js";
import { categoryRouter } from "./src/routes/category-routes.js";

connectDb();

const app = express();
const port = 500;

app.use(express.json());

app.use(cors());

app.use("/food", foodRouter);
app.use("/order", orderRouter);
app.use("/user", userRouter);
app.use("/category", categoryRouter);
app.use("/login", loginRouter);
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

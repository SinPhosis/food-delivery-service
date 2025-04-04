import express from "express";
import cors from "cors";
import { userRouter } from "./routes/user-routes.js";
import { loginRouter } from "./routes/login-routes.js";
import { connectDb } from "./mongo-connection.js";
import { foodRouter } from "./routes/food-routes.js";
import { orderRouter } from "./routes/order-routes.js";
import { categoryRouter } from "./routes/category-routes.js";

connectDb();

const app = express();
const port = 2000;

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

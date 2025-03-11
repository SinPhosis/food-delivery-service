import express from "express";
import cors from "cors";
import { orderRouter } from "./routes/Order.routes.js";
import { categoryRouter } from "./routes/Category.routes.js";
import { foodRouter } from "./routes/Food.routes.js";
import { userRouter } from "./routes/user-routes.js";
import { connectDb } from "./mongo-connection.js";

connectDb();

const app = express();
const port = 600;

app.use(express.json());

app.use(cors());

app.use("/food", foodRouter);
app.use("/order", orderRouter);
app.use("/user", userRouter);
app.use("/category", categoryRouter);
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

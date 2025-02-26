import express from "express";
import cors from "cors";
import DB from "./controllers/DB.js";

const app = express();
const port = 666;

const connectDb = (DB)

connectDb();

app.use(express.json());

app.use(cors());

app.use("/", ( req, res ) => {
    res.send("Test");
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
  });
import express from "express";
import cors from "cors";
import { connectdb } from "./config/db.js";
import { controlluser } from "./routes/use.js";
import "dotenv/config";
import foodRouter from "./routes/addfood.js";
const App = express();
App.use(express.json());
App.use(cors());
const port = 4000;
// connect db
connectdb();
// simple check
App.get("/", (req, res) => {
    res.send("hello from my server omar rehan")
});
App.use("/api/food", foodRouter);
App.use("/api/user", controlluser);

App.use("/uploads", express.static("uploads"));
App.listen(port, () => {
    console.log("sucsses connect server")
})
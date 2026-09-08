import express from "express";
import cors from "cors";
import { controlluser } from "./routes/use.js";
import foodRouter from "./routes/addfood.js";
import "dotenv/config";
const App = express();
App.use(express.json());
App.use(cors());
App.get("/", (req, res) => {
    res.send("hello from my server omar rehan");
});
App.use("/api/food", foodRouter);
App.use("/api/user", controlluser);
App.use((err, req, res, next) => {
    console.error("UNHANDLED ERROR:", err);
    res.status(500).json({
        success: false,
        message: err.message
    });
});

export default App;
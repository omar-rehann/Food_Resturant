import express from "express"
import { login, register } from "../controller/use.js"

const controlluser = express.Router();
controlluser.post("/login", login);
controlluser.post("/register", register);
export {
    controlluser
}
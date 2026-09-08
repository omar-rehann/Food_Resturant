import App from "../server.js";
import { connectdb } from "../config/db.js";

export default async function handler(req, res) {
    await connectdb();
    return App(req, res);
}
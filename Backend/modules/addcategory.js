import mongoose from "mongoose";
const categorycreate = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});
const category = mongoose.model("categoryfood", categorycreate);
export default category;
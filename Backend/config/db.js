import mongoose from "mongoose";

export const connectdb = async() => {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
};
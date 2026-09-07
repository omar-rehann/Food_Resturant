import mongoose from "mongoose";

export const connectdb = async() => {
    await mongoose.connect(
        "mongodb+srv://Omarehann:RM5vfyWRaHR3vNSn@cluster0.2dz1fgq.mongodb.net/?appName=Cluster0"
    );

    console.log("MongoDB connected successfully");
};
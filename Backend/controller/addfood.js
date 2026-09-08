import foodModel from "../modules/addfood.js";
import supabase from "../config/supabase.js";

// add food from admin panel
const add = async(req, res) => {
    try {


        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Image is required",
            });
        }

        // Create unique file name
        const fileName = `${Date.now()}-${req.file.originalname}`;

        // Upload image to Supabase
        const { error: uploadError } = await supabase.storage
            .from("food-images")
            .upload(fileName, req.file.buffer, {
                contentType: req.file.mimetype,
                upsert: false,
            });

        if (uploadError) {
            console.error("SUPABASE UPLOAD ERROR:", uploadError);

            return res.status(500).json({
                success: false,
                message: "Failed to upload image",
                error: uploadError.message,
            });
        }

        // Get public URL
        const { data: publicUrlData } = supabase.storage
            .from("food-images")
            .getPublicUrl(fileName);

        const imageUrl = publicUrlData.publicUrl;

        // Save food in MongoDB
        const newDataFromSchema = new foodModel({
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
            description: req.body.description,
            image: imageUrl,
        });

        await newDataFromSchema.save();

        return res.status(201).json({
            success: true,
            message: "Food added successfully",
            food: newDataFromSchema,
        });

    } catch (error) {
        console.error("ADD FOOD ERROR:", error);

        return res.status(500).json({
            success: false,
            message: "Error adding food",
            error: error.message,
        });
    }
};

// show data
const showdata = async(req, res) => {
    try {
        const listfood = await foodModel.find({});

        return res.json({
            success: true,
            data: listfood,
        });
    } catch (error) {
        console.error(error);

        return res.json({
            success: false,
            message: "Not Found Data",
        });
    }
};

// remove food
const removeFood = async(req, res) => {
    try {
        const id = req.params.id;

        const food = await foodModel.findById(id);

        if (!food) {
            return res.status(404).json({
                success: false,
                message: "Food not found",
            });
        }

        await foodModel.findByIdAndDelete(id);

        return res.json({
            success: true,
            message: "Food Removed",
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Error",
        });
    }
};

export default {
    add,
    showdata,
    removeFood,
};
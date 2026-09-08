import category from "../modules/addcategory.js";
import supabase from "../config/supabase.js";

// add category from admin panel
const addcategory = async(req, res) => {
    try {

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Image is required",
            });
        }

        // Create unique file name
        const fileName = `${Date.now()}-${req.file.originalname}`;

        // Upload image to Supabase Storage
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

        // Save category in MongoDB
        const categorylst = new category({
            name: req.body.name,
            image: imageUrl,
        });

        await categorylst.save();

        return res.status(201).json({
            success: true,
            message: "Success Add Category",
            categoryfood: categorylst,
        });
    } catch (error) {
        console.error("ADD CATEGORY ERROR:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to Add Category",
            error: error.message,
        });
    }
};

// function show category
const showcategory = async(req, res) => {
    try {
        const alldata = await category.find({});

        res.status(200).json({
            success: true,
            data: alldata,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Not Found Category",
        });
    }
};

// function remove category
const removecategory = async(req, res) => {
    try {
        const id = req.params.id;

        const categoryfood = await category.findById(id);

        if (!categoryfood) {
            return res.status(404).json({
                success: false,
                message: "Category not found",
            });
        }

        await category.findByIdAndDelete(id);

        res.json({
            success: true,
            message: "Category Removed",
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export default {
    addcategory,
    showcategory,
    removecategory,
};
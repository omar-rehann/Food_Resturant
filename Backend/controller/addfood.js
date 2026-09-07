import foodModel from "../modules/addfood.js";
// add data from admin panel
const add = async(req, res) => {
    try {
        const newDataFromSchema = new foodModel({
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
            description: req.body.description,
            image: req.file.filename,
        });
        await newDataFromSchema.save();
        res.status(201).json({
            success: true,
            message: "Food added successfully",
            food: newDataFromSchema,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Error adding food",
        });
    }
};
// function show data
const showdata = async(req, res) => {
    try {
        const listfood = await foodModel.find({});
        res.json({ success: true, data: listfood })
    } catch (error) {
        res.json({ success: false, message: "Not Found Data " })

    }
};
// function remove item from list
const removeFood = async(req, res) => {
    try {
        const id = req.params.id;
        const food = await foodModel.findById(id);
        if (!food) {
            return res.status(404).json({
                success: false,
                message: "Food not found"
            });
        }
        await foodModel.findByIdAndDelete(id);
        res.json({
            success: true,
            message: "Food Removed"
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Error"
        });
    }
};
export default { add, showdata, removeFood };
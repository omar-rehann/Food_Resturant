import FoodModel from "../modules/takedata.js";

// add data
const adddata = async(req, res) => {
    try {
        const newproduct = new FoodModel({
            name: req.body.name,
            image: req.body.image,
            price: req.body.price,
            category: req.body.category,
            quantity: req.body.quantity
        });

        const datafromuser = await newproduct.save();

        res.status(201).json({
            success: true,
            Foodfromuser: datafromuser,
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// show data
const showdata = async(req, res) => {
    try {
        const realydata = await FoodModel.find({});
        res.status(201).json({
            success: true,
            data: realydata,
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Failed to send data to database",
        });
    }

}

// remove data
const removedata = async(req, res) => {

    try {
        const id = req.params.id;
        const idproduct = await FoodModel.findById(id);
        if (!idproduct) {
            return res.status(404).json({
                success: false,
                message: "Food not found"
            });
        }
        await FoodModel.findByIdAndDelete(id);
        res.json({
            success: true,
            message: "Food Removed"
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Failed to send data to database",
        });
    }
}
export default { adddata, showdata, removedata }
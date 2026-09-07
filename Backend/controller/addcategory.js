import category from "../modules/addcategory.js";
// add category from admin panel
const addcategory = async(req, res) => {
        try {
            const categorylst = new category({
                name: req.body.name,
                image: req.file.filename
            })
            await categorylst.save()
            res.status(201).json({
                success: true,
                message: "Sucsses Add Category",
                categoryfood: categorylst
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({
                success: false,
                message: "Not Found Category"
            })
        }
    }
    // function show category
const showcategory = async(req, res) => {
        try {
            const alldata = await category.find({});
            res.status(200).json({
                success: true,
                data: alldata
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({
                success: false,
                message: 'Not Found Category'
            })
        }

    }
    // function remove item from list
const removecategory = async(req, res) => {
    try {
        const id = req.params.id;
        const categoryfood = await category.findById(id);
        if (!categoryfood) {
            return res.status(404).json({
                success: false,
                message: "Category not found"
            });
        }
        await category.findByIdAndDelete(id);
        res.json({
            success: true,
            message: "Category Removed"
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
export default {
    addcategory,
    showcategory,
    removecategory

}
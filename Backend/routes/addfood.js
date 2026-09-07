import express from "express";
import multer from "multer";
import foodcontoller from "../controller/addfood.js";
import foodcategory from "../controller/addcategory.js"
import foodfromuser from "../controller/takedata.js";
const foodRouter = express.Router();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    },
});
const upload = multer({ storage: storage });
// add food 
foodRouter.post("/addfood", upload.single("image"), foodcontoller.add);
foodRouter.get("/showfood", foodcontoller.showdata);
foodRouter.delete("/removeFood/:id", foodcontoller.removeFood);
// start category
foodRouter.post("/addcategory", upload.single("image"), foodcategory.addcategory);
foodRouter.get("/showcategory", foodcategory.showcategory);
foodRouter.delete("/removecategory/:id", foodcategory.removecategory);
// food from user
foodRouter.post("/addpopular", foodfromuser.adddata);
foodRouter.get("/showpopular", foodfromuser.showdata);
foodRouter.delete("/removepopular/:id", foodfromuser.removedata);
export default foodRouter;
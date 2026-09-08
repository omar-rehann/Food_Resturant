import express from "express";
import multer from "multer";

import foodcontroller from "../controller/addfood.js";
import foodcategory from "../controller/addcategory.js";
import foodfromuser from "../controller/takedata.js";

const foodRouter = express.Router();

const upload = multer({
    storage: multer.memoryStorage(),
});

// FOOD
foodRouter.post(
    "/addfood",
    upload.single("image"),
    foodcontroller.add
);

foodRouter.get(
    "/showfood",
    foodcontroller.showdata
);

foodRouter.delete(
    "/removeFood/:id",
    foodcontroller.removeFood
);

// CATEGORY
foodRouter.post(
    "/addcategory",
    upload.single("image"),
    foodcategory.addcategory
);

foodRouter.get(
    "/showcategory",
    foodcategory.showcategory
);

foodRouter.delete(
    "/removecategory/:id",
    foodcategory.removecategory
);

// FOOD FROM USER
foodRouter.post(
    "/addpopular",
    foodfromuser.adddata
);

foodRouter.get(
    "/showpopular",
    foodfromuser.showdata
);

foodRouter.delete(
    "/removepopular/:id",
    foodfromuser.removedata
);

export default foodRouter;
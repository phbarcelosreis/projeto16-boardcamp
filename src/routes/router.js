import { Router } from "express";
import { categoriesGet, categoriesPost } from "../controller/categories.controller";
import { customersGet, customersGetID } from "../controller/customers.controller";
import { checkCategoriesPost } from "../middlewares/categoriesCheck.middleware";
import { customersCheckID } from "../middlewares/customersCheck.middleware";

const router = Router();

router.get("/categories", categoriesGet);
router.post("/categories", checkCategoriesPost, categoriesPost);

router.get("/customers", customersGet);
router.get("/customers:id", customersCheckID , customersGetID);
router.post("/customers")


export default router;
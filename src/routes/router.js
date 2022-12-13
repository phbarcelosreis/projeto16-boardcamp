import { Router } from "express";
import { categoriesGet, categoriesPost } from "../controller/categories.controller";
import { customersGet, customersGetID, customersPost, customerUpdate } from "../controller/customers.controller";
import { checkCategoriesPost } from "../middlewares/categoriesCheck.middleware";
import { customerPostValidate, customersCheckID } from "../middlewares/customersCheck.middleware";

const router = Router();

router.get("/categories", categoriesGet);
router.post("/categories", checkCategoriesPost, categoriesPost);

router.get("/customers", customersGet);
router.get("/customers:id", customersCheckID , customersGetID);
router.post("/customers", customerPostValidate, customersPost);
router.put("customers/:id", customerPostValidate ,customerUpdate)


export default router;
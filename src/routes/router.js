import { Router } from "express";
import { categoriesGet, categoriesPost } from "../controller/categories.controller";
import { customersGet } from "../controller/customers.controller";
import { checkCategoriesPost } from "../middlewares/categoriesCheck.middleware";

const router = Router();

router.get("/categories", categoriesGet);
router.post("/categories", checkCategoriesPost, categoriesPost);

router.get("/customers", customersGet);
router.post("/customers")


export default router;
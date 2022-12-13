import { Router } from "express";
import { categoriesGet, categoriesPost } from "../controller/categories.controller";
import { checkCategoriesPost } from "../middlewares/categoriesCheck.middleware";

const router = Router();

router.get("/categories", categoriesGet);
router.post("/categories", checkCategoriesPost, categoriesPost);

export default router;
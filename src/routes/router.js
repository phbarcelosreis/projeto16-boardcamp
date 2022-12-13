import { Router } from "express";
import { categoriesGet, categoriesPost } from "../controller/categories.controller";
import { customersGet, customersGetID, customersPost, customerUpdate } from "../controller/customers.controller";
import { gameGet, gamePost } from "../controller/game.controller";
import { checkCategoriesPost } from "../middlewares/categoriesCheck.middleware";
import { customerPostValidate, customersCheckID } from "../middlewares/customersCheck.middleware";
import { gamePostValidate, getGameCheck } from "../middlewares/gameCheck.middleware";

const router = Router();

router.get("/categories", categoriesGet);
router.post("/categories", checkCategoriesPost, categoriesPost);

router.get("/games", getGameCheck, gameGet);
router.post("/games", gamePostValidate ,gamePost);

router.get("/customers", customersGet);
router.get("/customers:id", customersCheckID , customersGetID);
router.post("/customers", customerPostValidate, customersPost);
router.put("/customers/:id", customerPostValidate ,customerUpdate);

router.get("/rentals");
router.post("/rentals/:id/return");
router.delete("/rentals/:id")

export default router;
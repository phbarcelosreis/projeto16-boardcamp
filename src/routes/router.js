import { Router } from "express";
import { categoriesGet, categoriesPost } from "../controller/categories.controller";
import { customersGet, customersGetID, customersPost, customerUpdate } from "../controller/customers.controller";
import { gameGet, gamePost } from "../controller/game.controller";
import { rentalsGet } from "../controller/rentals.controller";
import { checkCategoriesPost } from "../middlewares/categoriesCheck.middleware";
import { customerPostValidate, customersCheckID } from "../middlewares/customersCheck.middleware";
import { gamePostValidate, getGameCheck } from "../middlewares/gameCheck.middleware";
import { checkRentalDelete, checkRentalGet, checkRentalPost, checkRentalPostID } from "../middlewares/rentalsCheck.middleware";

const router = Router();

router.get("/categories", categoriesGet);
router.post("/categories", checkCategoriesPost, categoriesPost);

router.get("/games", getGameCheck, gameGet);
router.post("/games", gamePostValidate ,gamePost);

router.get("/customers", customersGet);
router.get("/customers:id", customersCheckID , customersGetID);
router.post("/customers", customerPostValidate, customersPost);
router.put("/customers/:id", customerPostValidate ,customerUpdate);

router.get("/rentals", checkRentalGet , rentalsGet);
router.post("/rentals", checkRentalPost);
router.post("/rentals/:id/return", checkRentalPostID);
router.delete("/rentals/:id", checkRentalDelete)

export default router;
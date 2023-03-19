import express from "express";
const dishesController = require("../controller/dishs/dishs.controllers");
const router = express.Router();

router.get("/", dishesController.getDishes);
router.delete("/", dishesController.removeDish);
export default router;

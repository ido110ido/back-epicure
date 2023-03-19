import express from "express";
const chefsController = require("../controller/chefs/chefs.controllers");
const router = express.Router();

router.get("/", chefsController.getChefs);
router.post("/", chefsController.getSingleChefs);
router.post("/add", chefsController.addingChef);
router.delete("/", chefsController.removeChef);
export default router;

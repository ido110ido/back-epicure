import express from "express";
const restaurantsController = require("../controller/restaurants/restaurants.controllers");
const router = express.Router();

router.get("/", restaurantsController.getRestaurants);
router.post("/", restaurantsController.getSingleRestaurants);
router.post("/add", restaurantsController.addingRestaurant);
router.delete("/", restaurantsController.removeRestaurant);
export default router;

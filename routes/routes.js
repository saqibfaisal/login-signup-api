// console.log("hello world");
const express = require("express");
const ApplicationController = require("../Controller/product");
const loginController = require("../Controller/login");
const signupController = require("../Controller/Singup");
const router = express.Router();

router.post("/api/singup", signupController)
router.post("/api/login", loginController)
router.post("/api/plants", ApplicationController.Plant)
router.get("/api/plants", ApplicationController.GetPlants)
module.exports = router;
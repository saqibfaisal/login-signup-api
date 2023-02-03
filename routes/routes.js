// console.log("hello world");
const express = require("express");
const ApplicationController = require("../Controller/Application");
const loginController = require("../Controller/login");
const signupController = require("../Controller/Singup");
const router = express.Router();

router.post("/api/singup", signupController)
router.post("/api/login", loginController)
router.get("/api/aplication", ApplicationController.getApplication)
module.exports = router;
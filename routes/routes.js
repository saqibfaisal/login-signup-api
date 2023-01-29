// console.log("hello world");
const express = require("express");
const loginController = require("../Controller/login");
const signupController = require("../Controller/Singup");
const router = express.Router();

router.post("/api/singup", signupController)
router.post("/api/login", loginController)
module.exports = router;
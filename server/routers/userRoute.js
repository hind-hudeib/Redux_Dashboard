const express = require("express");
const router = express.Router();
const userController = require("../controllers/usersController");
const verifyJWT = require("../middlewares/verifyJWT");

router.post("/login", userController.login);
router.post("/signUp", userController.signup);
router.get("/user", verifyJWT, userController.oneUser);

module.exports = router;
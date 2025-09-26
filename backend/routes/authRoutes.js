const express = require("express");
const { registerStudent, registerMentor, login } = require("../controllers/authController");
const router = express.Router();

router.post("/register/student", registerStudent);
router.post("/register/mentor", registerMentor);
router.post("/login", login);

module.exports = router;

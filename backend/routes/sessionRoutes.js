const express = require("express");
const { createSession, getSessions, updateSessionStatus } = require("../controllers/sessionController");
const router = express.Router();

router.post("/", createSession);
router.get("/", getSessions);
router.put("/:id", updateSessionStatus);

module.exports = router;

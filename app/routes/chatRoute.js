const express = require("express");
const { chatCreateMiddleware } = require("../middleware/chatMiddleware");
const { createChat, showListChat, showChat } = require("../controller/chatController");

const router = express.Router();

router.post("/",  chatCreateMiddleware, createChat);
router.get("/", showListChat);
router.get("/:id", showChat)

module.exports = router;
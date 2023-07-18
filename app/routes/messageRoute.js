const express = require("express");
const { createMessage } = require("../controller/messageController");
const { messageCreateMiddleware } = require("../middleware/messageMiddleware");

const router = express.Router();

router.post("/", messageCreateMiddleware ,createMessage);

module.exports = router;
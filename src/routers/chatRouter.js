const express = require('express');
const { getRoom, getCreateRoom, postCreateRoom, postChatting, getEnterRoom } = require('../controllers/chatController');
const { protectorMiddleware } = require('../middlewares');

const chatRouter = express.Router();

chatRouter
.route("/")
.all(protectorMiddleware)
.get(getRoom)

chatRouter
.route("/create")
.all(protectorMiddleware)
.get(getCreateRoom)
.post(postCreateRoom)

chatRouter
.all(protectorMiddleware)
.get("/:id", getEnterRoom)

chatRouter
.all(protectorMiddleware)
.post("/:id/chat", postChatting)


module.exports = chatRouter;
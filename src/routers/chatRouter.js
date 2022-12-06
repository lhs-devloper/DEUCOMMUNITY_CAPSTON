const express = require('express');
const { getRoom, getMessage, getCreateRoom, postCreateRoom } = require('../controllers/chatController');
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
.route("/*")
.all(protectorMiddleware)
.get(getMessage)

module.exports = chatRouter;
const express = require('express');
const { getRoom, getMessage, getCreateRoom, postCreateRoom } = require('../controllers/chatController');

const chatRouter = express.Router();

chatRouter
.route("/")
.get(getRoom)

chatRouter
.route("/create")
.get(getCreateRoom)
.post(postCreateRoom)

chatRouter
.route("/*")
.get(getMessage)

module.exports = chatRouter;
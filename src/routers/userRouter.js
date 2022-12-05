const express = require('express');
const { getRoom, getMessage, getCreateRoom, postCreateRoom } = require('../controllers/chatController');
const { getJoin, getLogin, logOut, postLogin, postJoin } = require('../controllers/userController');

const userRouter = express.Router();

userRouter
.route("/join")
.get(getJoin)
.post(postJoin)

userRouter
.route("/login")
.get(getLogin)
.post(postLogin)

userRouter
.route("/logout")
.get(logOut)

module.exports = userRouter;
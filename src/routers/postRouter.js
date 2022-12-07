const express = require('express');
const { postComment } = require('../controllers/commentController');
const { getPosting, getPage, postPosting, viewPost } = require('../controllers/postController');
const { protectorMiddleware } = require('../middlewares');

const postRouter = express.Router();

postRouter
.route("/")
.get(getPage)

postRouter
.route("/write")
.all(protectorMiddleware)
.get(getPosting)
.post(postPosting)

postRouter
.route("/view/:id/comment")
.post(postComment)

postRouter
.route("/view/:id")
.get(viewPost)



module.exports = postRouter;
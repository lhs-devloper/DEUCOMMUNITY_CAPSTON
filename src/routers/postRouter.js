const express = require('express');
const { getPosting } = require('../controllers/postController');

const postRouter = express.Router();

postRouter
.route("/write")
.get(getPosting)

module.exports = postRouter;
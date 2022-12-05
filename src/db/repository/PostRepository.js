const mongoose = require('mongoose');
const { PostModel, UserModel } = require('../models');

class PostRepository{
    async CreatePost({title, content}, _id){
        try{
            const newPost = new PostModel({
                title,
                content
            })
            const user = await UserModel.findById(_id);
            user.posts.push(newPost._id)
            user.save();
            const postResult = await newPost.save();
            return postResult
        }catch(err){
            return "DB_KEY_ERROR"
        }
    }
}

module.exports = PostRepository;
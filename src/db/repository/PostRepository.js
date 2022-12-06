const mongoose = require('mongoose');
const { PostModel, UserModel } = require('../models');

class PostRepository{
    async CreatePost({title, content, _id}){
        try{
            const newPost = new PostModel({
                title,
                content,
                owner: _id
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
    async FindPost({id}){
        try{
            const postResult = await PostModel.findById(id);
            return postResult
        }catch(err){
            return "DB_KEY_ERROR"
        }
    }
    async CountPost(){
        try{
            const count = await PostModel.find()
            return count.length
        }catch(err){
            return "DB_KEY_ERROR"
        }
    }
    async FindList({id}){
        try{
            const postResult = await PostModel.find().sort({createdAt: -1}).populate("owner").skip((id-1)*10).limit(10);
            return postResult
        }catch(err){
            return "DB_KEY_ERROR"
        }
    }
    async DeletePost(){

    }
}

module.exports = PostRepository;
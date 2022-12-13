const mongoose = require('mongoose');
const { CommentModel, UserModel, PostModel } = require('../models')

class CommentRepository{
    async CreateComment({comment, id, _id}){
        try{
            const newComment = new CommentModel({
                comment
            })
            const post = await PostModel.findById(id);
            const user = await UserModel.findById(_id);
            post.comments.push(newComment._id);
            user.comments.push(newComment._id);
            post.save();
            user.save();
            const commentResult = await newComment.save();
            return commentResult;
        }catch(err){
            return "DB_KEY_ERROR"
        }
        
    }
}

module.exports = CommentRepository;
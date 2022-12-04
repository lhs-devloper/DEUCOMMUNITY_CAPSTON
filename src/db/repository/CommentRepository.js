const mongoose = require('mongoose');
const { CommentModel, UserModel } = require('../models')

class CommentRepository{
    async CreateComment({comment}, _id){
        try{
            const newComment = new PostModel({
                comment
            })
            const user = await UserModel.findById(_id)
            user.comments.push(newComment._id);
            user.save();
            const commentResult = await newComment.save();
            return commentResult;
        }catch(err){
            return "DB_KEY_ERROR"
        }
        
    }
}

module.exports = CommentRepository;
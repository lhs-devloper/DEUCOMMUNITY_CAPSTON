const { CommentModel, PostModel } = require("../db/models");

// *** Needs Refactoring ***
exports.postComment = async(req, res) => {
    const { id } = req.params
    const { comment } = req.body;
    try{
        const post = await PostModel.findById(id)
        const newComment = await CommentModel.create({
            comment
        })
        post.comments.push(newComment._id)
        post.save()
        return res.redirect(`/post/view/${id}`)
    }catch(err){
        return res.redirect(`/post/view/${id}`)
    }   
}
const { CommentModel, PostModel } = require("../db/models");
const CommentService = require("../service/CommentService");


const service_commnet = new CommentService();

// *** Needs Refactoring ***
exports.postComment = async(req, res) => {
    const {
        user: {
            _id
        }
    } = req.session;
    const { id } = req.params
    const { comment } = req.body;
    try{
        const result = await service_commnet.WriteComment({comment, id, _id});
        console.log(result)
        return res.redirect(`/post/view/${id}`)
    }catch(err){
        return res.redirect(`/post/view/${id}`)
    }   
}
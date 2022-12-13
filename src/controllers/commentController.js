const { CommentModel, PostModel } = require("../db/models");
const CommentService = require("../service/CommentService");

const service_commnet = new CommentService();

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
        return res.redirect(`/post/view/${id}`)
    }catch(err){
        return res.redirect(`/post/view/${id}`)
    }   
}
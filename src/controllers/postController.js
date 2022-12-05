const PostService = require("../service/PostService");

const service_post = new PostService();

exports.getPosting = (req, res) => {
    return res.render("write")
}

exports.postPosting = async (req, res) => {
    try{
        const {
            user: {
                _id
            }
        } = req.session;
        const { title, content } = req.body;
        const { data } = service_post.CreatePost({title, content, _id})

    }catch(err){
        return res.render("wrtie")
    }
}
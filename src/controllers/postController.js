const logger = require("../logger");
const PostService = require("../service/PostService");

const service_post = new PostService();

exports.getPage = async(req, res) => {
    let { id } = req.query;
    id? id : 1;
    const length = await service_post.CountingPost();
    const { data } = await service_post.ListingPost({id});
    return res.render("see", {
        length,
        data: data.post
    })
}

exports.getPosting = async(req, res) => {
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
        const { data } = await service_post.WritePost({title, content, _id})
        return res.redirect("/post")
    }catch(err){
        return res.render("write")
    }
}

exports.viewPost = async(req, res) => {
    const { id } = req.params;
    const { data } = await service_post.FindPost({id})
    // console.log(data)
    logger.info(`GET/${id}`)
    return res.render("view", {
        data: data.post
    })
}
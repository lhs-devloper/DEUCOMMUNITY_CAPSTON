const PostRepository = require("../db/repository/PostRepository");
const { FormateData } = require("../utils");

class PostService{
    constructor() {
        this.repository = new PostRepository();
    }
    async WritePost(userInputs) {
        const {title, content, _id} = userInputs
        try{
            const post = await this.repository.CreatePost({title, content, _id});
            return FormateData({
                msg: 'SUCCESS',
                post: post
            })
        }catch{
            return "BODY_ERROR"
        }
    }

    async FindPost(userInputs) {
        const { id } = userInputs;
        try{
            const postResult = await this.repository.FindPost({id});
            return FormateData({
                msg: "SUCCESS",
                post: postResult
            })
        }catch(err){
            return "BODY_ERROR"
        }
    }
    async CountingPost(){
        try{
            const postLength = await this.repository.CountPost();
            return postLength
        }catch(err){
            return "BODY_ERROR"
        }
    }
    async ListingPost(userInputs){
        const { id } = userInputs
        try{
            const postResult = await this.repository.FindList({id});
            return FormateData({
                msg: "SUCCESS",
                post: postResult
            })
        }catch(err){
            return "BODY_ERROR"
        }
    }

    async UpdatePost(userInputs) {

    }

    async DeletePost(userInputs) {

    }
}

module.exports = PostService
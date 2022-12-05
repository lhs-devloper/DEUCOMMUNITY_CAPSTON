const PostRepository = require("../db/repository/PostRepository");
const { FormateData } = require("../utils");

class PostService{
    constructor() {
        this.repository = new PostRepository();
    }
    async WritePost(userInputs) {
        const {title, content, _id} = userInputs
        try{
            const post = this.repository.CreatePost({title, content, _id});
            return FormateData({
                msg: 'SUCCESS',
                post: post
            })
        }catch{
            return "BODY_ERROR"
        }
    }

    async FindPost(userInputs) {

    }

    async UpdatePost(userInputs) {

    }

    async DeletePost(userInputs) {

    }
}

module.exports = PostService
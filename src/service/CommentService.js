
class CommentService{
    constructor() {
        this.repository = new PostRepository();
    }
    async WritePost(userInputs) {
        const {title, content, _id} = userInputs
        try{
            const post = this.repository.CreatePost({title, content, _id});
            return FormateData({
                msg: 'SUCCESS',
                comment: comment
            })
        }catch{
            return "BODY_ERROR"
        }
    }
}

module.exports = CommentService
const CommentRepository = require("../db/repository/CommentRepository");

class CommentService{
    constructor() {
        this.repository = new CommentRepository();
    }
    async WriteComment(userInputs) {
        const {title, content, _id} = userInputs
        try{
            const comment = this.repository.CreateComment({title, content, _id});
            return FormateData({
                msg: 'SUCCESS',
                comment: comment
            })
        }catch{
            return "BODY_ERROR"
        }
    }

    async FindComment(userInputs){

    }

    
}

module.exports = CommentService
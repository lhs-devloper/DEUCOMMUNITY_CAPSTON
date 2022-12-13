const CommentRepository = require("../db/repository/CommentRepository");
const { FormateData } = require("../utils");

class CommentService{
    constructor() {
        this.repository = new CommentRepository();
    }
    async WriteComment(userInputs) {
        const {comment, id, _id} = userInputs
        try{
            const result = await this.repository.CreateComment({comment, id, _id});
            return FormateData({
                msg: 'SUCCESS',
                'comment': result
            })
        }catch(err){
            console.log(err)
            return "BODY_ERROR"
        }
    }

    async FindComment(userInputs){

    }

    
}

module.exports = CommentService
const UserRepository = require("../db/repository/UserRepository");
const logger = require("../logger");
const { GenerateSalt, GeneratePassword, ValidatePassword, FormateData } = require("../utils");

class UserService {
    constructor() {
        this.repository = new UserRepository();
    }
    // 로그인
    async SignIn(userInputs){
        const { email, password } = userInputs;
        try{
            const existingCustomer = await this.repository.FindCustomer({ email});
            if(existingCustomer){
                const validPassword = await ValidatePassword(password, existingCustomer.password, existingCustomer.salt);
                if(validPassword){
                    return FormateData({
                        email: existingCustomer.email,
                        _id: existingCustomer._id,
                        login: "SUCCESS"
                    })
                } 
                return FormateData({
                    msg: '비밀번호가 틀렸습니다',
                    login: "False"
                })
            }
            return FormateData({
                msg: '존재하지 않는 회원입니다',
                login: "False"
            })
        } catch(err){
            logger.error("REQUEST BODY ERROR")
            return "BODY ERROR"
        }
    }
    // 회원가입
    async SignUp(userInputs){
        const { email, password, phone } = userInputs;
        try{
            // create salt
            let salt = await GenerateSalt();
            let userPassword = await GeneratePassword(password, salt);
            const customer = await this.repository.CreateUser({ email, password: userPassword, phone, salt});   
            return FormateData({
                msg: "회원가입에 성공하였습니다",
                join: "SUCCESS"
            })
        }catch(err){
            console.log(err)
            logger.error("REQUEST BODY ERROR")
            return "BODY ERROR"
        }
    }
}

module.exports = UserService;
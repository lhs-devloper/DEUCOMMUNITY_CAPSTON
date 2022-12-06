const logger = require("../logger");
const UserService = require("../service/UserService");

const service_user = new UserService();

exports.getJoin = (req, res) => {
    return res.render("join")
}

exports.postJoin = async (req, res) => {
    const { email, password, phone } = req.body;
    try{
        const { data } = await service_user.SignUp({email, password, phone});
        if(data.join === "SUCCESS"){
            return res.redirect("/login")
        }else{
            return res.render("join", {
                error: data
            })
        }
    }catch(err){
        logger.error(err)
        return res.render("join")
    }
}

exports.getLogin = (req, res) => {
    return res.render("login")
}

exports.postLogin = async (req, res) => {
    const { email, password } = req.body;
    try{
        const { data } = await service_user.SignIn({email, password});
        if(data.login === "SUCCESS"){
            req.session.loggedIn = true;
            req.session.user = data
            return res.redirect("/")
        }else{
            return res.render("login", {
                error: data.msg
            })
        }
    }catch(err){
        logger.error(err)
        return res.render("login")
    }
}

exports.logOut = (req, res) => {
    req.session.destroy();
    logger.info("/logout")
    return res.redirect("/")
}
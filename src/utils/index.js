const brcypt = require('brcypt');
const jwt = require('jsonwebtoken');
// 해싱횟수 랜덤하게 생성
module.exports.GenerateSalt = async() => {
    return await brcypt.genSalt();
}

// 패스워드 해싱
module.exports.GenearetPassword = async(password, salt) => {
    return await brcypt.hash(password, salt);
}
// 패스워드 검증
module.exports.ValidatePassword = async(
    inputPassword,
    savedPassword,
    salt
) => {
    return (await this.GenearetPassword(inputPassword, salt)) === savedPassword
}

// jwt생성
module.exports.GenearetSignature = async(payload) => {
    return await jwt.sign(payload, process.env.SECRET, {
        expiresIn: '6h'
    })
}

// jwt검증
module.exports.ValidateSignature = async(req) => {
   const signature = req.headers.Authorization;
   if(signature){
        const payload = await jwt.verify(signature,process.env.SECRET)
        req.user = payload;
        return true;
   }
   return false;
}
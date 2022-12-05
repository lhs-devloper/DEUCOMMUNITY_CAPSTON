const bcrypt = require('bcrypt');

// 해싱횟수 랜덤하게 생성
module.exports.GenerateSalt = async() => {
    return await bcrypt.genSalt();
}

// 패스워드 해싱
module.exports.GenearetPassword = async(password, salt) => {
    return await bcrypt.hash(password, salt);
}
// 패스워드 검증
module.exports.ValidatePassword = async(
    inputPassword,
    savedPassword,
    salt
) => {
    return (await this.GenearetPassword(inputPassword, salt)) === savedPassword
}

module.exports.FormateData = (data) => {
    if(data){
        return { data }
    }else{
        throw new Error('Data Not found!')
    }
}
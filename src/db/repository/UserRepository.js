const mongoose = require('mongoose');
const { UserModel } = require('../models')

class UserRepository{
    async CreateUser({ email, password, phone, salt }){
        try{
            const user = new UserModel({
                email,
                password,
                phone,
                salt,
            })
            const userReulst = await user.save();
            return userReulst
        }catch(err){
            return "Error"
        }
    }
    async DeleteUser({ email }){
        const deleteResult = await UserModel.deleteOne({email})
        return deleteResult;
    }
}

module.exports = UserRepository;
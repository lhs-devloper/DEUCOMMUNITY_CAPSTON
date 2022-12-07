const { RoomModel, ChatModel, UserModel } = require("../db/models");
const { GenerateSalt, GeneratePassword } = require("../utils")

exports.getRoom = async (req, res) => {
    const rooms = await RoomModel.find().populate("owner");
    return res.render("chat/main", { rooms })
}

exports.getCreateRoom = (req, res) => {
    return res.render("chat/create")
}

exports.postCreateRoom = async(req, res) => {
    const {
        user: {
            _id
        }
    } = req.session
    const { title, max } = req.body;
    try{
        const newRoom = await RoomModel.create({
            title,
            max,
            owner: _id,
        })
        const io = req.app.get('io');
        io.of('/room').emit('newRoom', newRoom);
        return res.redirect(`/room/${newRoom._id}`)
    }catch(err){
        return res.render("chat/create")
    }    
}

// http://localhost:8000/room/6390a569615a108268e7a8aa
exports.getEnterRoom = async(req, res) => {
    const { id } = req.params;
    try{
        const room = await RoomModel.findById(id).populate("owner");
        const io = req.app.get('io')
        const chats = await ChatModel.find({room: room._id}).sort({"createdAt": 1});
        return res.render('chat/chat', {
            room,
            chats,
        })
    }catch(err){
        return res.render("chat/room")
    }
}

exports.postChatting = async(req, res) => {
    const { id } = req.params;
    const { chatContent } = req.body
    const {
        user: {
            _id
        }
    } = req.session
    try{
        const user = await UserModel.findById(_id)
        const chat = await ChatModel.create({
            room: id,
            user: user.email,
            chat: chatContent
        })
        req.app.get('io').of('/chat').to(id).emit('chat', chat)
        return res.send('ok');
    }catch(error){
        console.log(error)
        return res.send("error")
    }
}


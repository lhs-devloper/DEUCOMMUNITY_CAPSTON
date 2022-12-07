// const { Server } = require('socket.io')
// const logger = require('./logger')

// exports.runSocketIO = (server) => {
//     const io = new Server(server)

//     io.on('connection', (socket) => {
//         disconnect(socket)
//         joinRoom(socket)
//         message(socket)
//     })
// }

// const disconnect = (socket) => {
//     socket.on('disconnect', ()=> {
//         logger.info('소켓 연결 해제')
//     })
// }

// const joinRoom = (socket) => {
//     socket.on('join_room', (room_id, done) => {
//         socket.join(room_id);
//         done()
//         logger.info(`${room_id}에 들어감`);
//         socket.to(room_id).emit("welcome");
//     })
// }

// const message = (socket) => {
//     socket.on('chat message', (msg, room_id, done) => {
//         socket.to(room_id).emit('chat message', msg);
//         console.log(msg)
//         done();
//     })
// }

const { Server } = require('socket.io');

module.exports = (server, app) => {
    const io = new Server(server)
    app.set('io', io)
    const room = io.of('/rooms');
    const chat = io.of('/chat')

    room.on('connection', (socket) => {
        socket.on('disconnect', ()=> {
            console.log('room 해제')
        })
        console.log("입장")
    })

    chat.on('connection', (socket)=> {
        const req = socket.request
        const { headers: { referer }} = req;
        const roomId = referer
        .split("/")[referer.split("/").length -1]
        .replace(/\?.+/, '')
        socket.join(roomId);

        socket.on('disconnect', () => {
            socket.leave(roomId)
        })
    })
}
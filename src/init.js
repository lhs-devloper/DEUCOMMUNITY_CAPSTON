require('dotenv').config();
const app = require('./server');
const db = require('./db/index');
const { runSocketIO } = require('./socket');
const http = require('http');
const server = http.createServer(app)
const runSocket = require('./socket');
const Port = process.env.PORT || 8000

async function StartServer(){
    server.listen(Port, ()=>{
        console.log(`http://localhost:8000`)
    })
    await db.databaseConnection();
    // runSocketIO(server);
    runSocket(server, app)
};

StartServer()
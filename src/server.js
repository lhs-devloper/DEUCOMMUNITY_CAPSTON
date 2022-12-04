const express = require("express");
const logger = require("./logger");
const router = require('./routers/router')
const app = express();
const path = require('path');

app.set('view engine', 'ejs')
app.set('views', process.cwd()+"/src/views");
app.use('/tinymce', express.static(process.cwd()+'/node_modules/tinymce'));
app.use('/public', express.static(path.join(__dirname, "public/")))
app.get("/", (req, res)=>{
    logger.info("home")
    res.render("home")
})

module.exports = app;
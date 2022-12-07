const express = require("express");
const logger = require("./logger");
const router = require('./routers/router')
const app = express();
const path = require('path');
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require('express-flash');
const { localsMiddleware } = require("./middlewares");


app.use(flash())
app.set('view engine', 'ejs');
app.set('views', process.cwd()+"/src/views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ 
        mongoUrl: process.env.DB_URL,
    }),
  })
);

app.use(localsMiddleware);
app.use('/tinymce', express.static(process.cwd()+'/node_modules/tinymce'));
app.use('/public', express.static(path.join(__dirname, "public/")))
app.get("/", (req, res)=>{
    logger.info("home")
    return res.render("home")
});
app.use("/", router.user);
app.use("/post", router.post);
// app.use("/comment", router.comment);
app.use("/room", router.chat);
module.exports = app;
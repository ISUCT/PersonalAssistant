const express = require("express");
const app = express();
const connect = require('camo').connect;
const bodyParser = require("body-parser");
const userRouter = require("./routes/userRouter.js");
const homeRouter = require("./routes/homeRouter.js");
var path = require('path');

app.set('views', path.join(__dirname, './views'));
app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: false }));
 
app.use("/users", userRouter);;
app.use("/", homeRouter);
 
app.use(function (req, res, next) {
    res.status(404).send("Not Found")
});

var database;
var uri = 'nedb://./BD';
connect(uri).then(function(db) {
    database = db;
    app.listen(3000, function(){
        console.log("Сервер ожидает подключения...");
    })
})
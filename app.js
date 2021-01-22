const express = require('express');
var todoController = require('./controllers/todo_ccontroller');
var app  = express();

//Setup Template engine
app.set('view engine', 'ejs');


//Static files
app.use(express.static('./public'));


//Fire controllers
todoController(app);


//Listening to the port
app.listen(3000);
console.log('you are listening to port 3000');

 

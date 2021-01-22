const bodyParser = require('body-parser');

var data = [{item:'get milk'}, {item:'walk dog'}, {item: 'Drink a lot of beer'}]
var urlencodedParser = bodyParser.urlencoded({extended: false});


module.exports = function(app){

app.get('/todo', (req, res)=>{
res.render('todo', {todos: data});
});


app.post('/todo', urlencodedParser, (req, res)=>{
   data.push(req.body);
   res.json({todos:data}); 

});


app.delete('/todo/:item', (req, res)=>{
    data = data.filter(function(todo){
        return todo.item.replace(/ /g, '-') !== req.params.item;
    })
    res.json({todos:data}); 

});


};
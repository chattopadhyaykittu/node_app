const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Connect to the databse

mongoose.connect('mongodb+srv://test:test@cluster0.hnkr3.mongodb.net/todo?retryWrites=true&w=majority');

//Create a schema - this is like a blueprint

var todoSchema = new mongoose.Schema({
    item: String
});

var Todo = mongoose.model('Todo',todoSchema);

//var data = [{item: 'sing me to sleep'},{item: 'the day will end too soon'}, {item: 'this is it'}];

var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {
       
app.get('/todo', (req,res) => {
    
    //get data from mongodb and pass it to view
    Todo.find({},(err,data) => {
        if(err) throw err;
        res.render('todo', {todos: data});
    });        
});
    
app.post('/todo',urlencodedParser, (req,res) => {
      //get data from the view and add it to mongodb
      var newTodo = Todo(req.body).save((err,data) => {
          if(err) throw err;
          res.json(data);
      });      
});

app.delete('/todo/:item', (req,res) => {
        //delete the requested item from mongodb
        Todo.find({item: req.params.item.replace(/\-/g,"")}).remove(function(err,data) {
            if(err) throw err;
             res.json(data);
          });
      });
}       



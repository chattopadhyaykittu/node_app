/*module.exports.values = [10,20,30,40,50];

module.exports.calculate = (values) => {
       values.forEach((value) => {
            console.log (value * 3);
  });
}

module.exports.filter = values.filter((value) => {
    console.log(value < 50); 
  });   

module.exports.map = values.map((value) => {
        return value * 2;
});*/   


//calculate(values);
//console.log(filter,map);


/*module.exports = values;
module.exports.calculate = calculate;
module.exports.filter = filter;
module.exports.map = map;*/


//importing the events module
/*var events = require('events');
//importing the util module
var util = require('util');

const Person = function(name){
    this.name = name;
}

util.inherits(Person,events);


var paula = new Person('paula');
var jimmy = new Person('jimmy');
var shaun = new Person('shaun');

var people = [shaun,paula,jimmy];

people.forEach((person) => {
    person.on('speak',(mssg) => {
        console.log(person.name + ' said' + ' ' + mssg);
    });
});


jimmy.emit('speak', 'Hello');*/

/*var fs = require('fs');

/*fs.readFile('readFile.txt','utf8',(err,data) => {
    //fs.writeFile('writeFile.txt',data);
    con
});*/

//console.log('Hi');

/*fs.unlink('readFile.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});*/

/*fs.mkdir('stuff',() => {
    fs.readFile('ReadFile.txt','utf8',(err,data) => {
        fs.writeFile('./stuf/WriteFile.txt',data,'utf8',(err) =>{
            if(err){
                console.log(err);
            }
            else{
                console.log('File written successfully');
                }
        });
    });

});*/


/*fs.unlink('./stuff/WriteFile.txt', () => {
    fs.rmdir('stuff',() => {
        console.log('Directory has been removed succesfully');
    });
});*/


/*var http = require('http');

var server = http.createServer(function(req,res){
    console.log('The request is' + req);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello from the Server')
    res.end();
});

var port = 3000;
server.listen(port);
console.log('The server is listening on port ' + port);

/*var request = require("request");
	request("http://127.0.0.1:3000",function(error,response,body)
	{
		console.log(body);
	});*/

/*var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  //var txt = q.year + " " + q.month;
  res.end(q);
}).listen(3000);


console.log('The server has started');*/

/*const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req,res){
    console.log('The request is' + req.url);
    
    if(req.url === '/' || req.url === '/about'){
       res.writeHead(200, {'Content-Type': 'text/html'});
       fs.createReadStream(__dirname + '/index.html','utf8').pipe(res);  
    }
    else if(req.url === '/contact-us/details'){
       res.writeHead(200, {'Content-Type': 'text/html'});
       fs.createReadStream(__dirname + '/contact.html','utf8').pipe(res);   
    }
    else{
       res.writeHead(404, {'Content-Type': 'text/html'});
       fs.createReadStream(__dirname + '/404.html','utf8').pipe(res);    
    }
});

var port = 3000;
server.listen(port);
console.log('The server is listening on port ' + port);*/

/*const util = require('util');
const events = require('events');

function MyStream() {
    events.call(this);
}

util.inherits(MyStream, events);

MyStream.prototype.write = function(data) {
  this.emit('data', data);
};

const stream = new MyStream();

console.log(stream instanceof events); // true
console.log(MyStream.super_ === events); // true

stream.on('data', (data) => {
  console.log(`Received data: "${data}"`);
});

stream.write('Hello');*/

//Integrating the different methods of node

/*const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')

app.set('view engine','ejs');

app.use(express.static('./assets'));

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/',(req,res) => {
    res.render('home');
});

app.get('/contact-us',(req,res) => {
    console.log(req.query);
    res.render('contact', {qu: req.query});
});

app.post('/info',urlencodedParser, (req,res) => {
    console.log(req.body);
    res.render('contact-success', {qd: req.body});
});

app.get('/profile/:name', (req,res) => {
    var data = {age: 30, job: 'ninja', hobbies: ['eating','fishing','drinking']};
    res.render('profile',{person: req.params.name, data: data});
});

const port = 4000;

app.listen(port);
console.log(`Server started at port ${port} of the local host`);*/


//Implementing the exports from another file for node.js

/*const values = [5,12,56,78,89,90];

/*const filtered = (values) => {
    values.filter(value => {
        return value > 60;
    });
}

const mapped = (values) => {
    values.map(value => {
        return value/2;
    });
}*/

/*const filtered = values.forEach(value => {
    return (value * 3);
});

console.log(filtered);*/



/*module.exports.values = values;
module.exports.filtered = filtered;
module.exports.mapped = mapped;*/

//console.log(filtered,mapped);

/*exports.values = [5,56,2,12,9];

exports.calculate = (values) => {
       values.forEach((value) => {
            console.log (value * 3);
  });
}

exports.filtered = (values) => {
 const filter = values.filter((value) => {
       return (value < 50); 
  }); 
  console.log(filter);
}*/

//Event Emitter in node.js


/*const events = require('events');

const myEmitter = new events.EventEmitter();

 myEmitter.on('someEvent', function(message) {
     console.log(message);
 });

myEmitter.emit('someEvent', 'The event was emitted');*/


//util mode in node.js

/*const events = require('events');
const util = require('util');

const Person = function(name,age){
    this.name = name;
    this.age = age;    
}

util.inherits(Person,events);

const james = new Person('James',20);
const shaun = new Person('Shaun',30);
const jackson = new Person('Jackson',40);

const people = [james,shaun,jackson];

people.forEach((person) => {
    person.on('someEvent', (message) => {
        console.log(person.name + message);
    });
});

jackson.emit('someEvent',' has laughed');*/

//File reading in node js



/*fs.readFile('ReadFile.txt',(err,data) => {
    if(data){
        fs.writeFile('NewFile.txt',data,() => {
           console.log('Data has been written to the newly created file');    
        });
    }
    else{
        console.log(err);
    }
});*/

//Creating directories using node.js


/*fs.mkdir('stuff',() => {
    fs.readFile('ReadFile.txt','utf8',(err,data) => {
        if(data){
            fs.writeFile('./stuff/NewFile.txt',data,() => {
                console.log('Data has been written to the file at the proper location');
            });
        }
    });
});*/

/*fs.unlink('./stuff/NewFile.txt',() => {
    fs.rmdir('./stuff',() => {
        console.log('The directory has been properly removed');
    });
});*/

//Create an http server in nodejs 

/*const http = require('http');

const serverCreate = function() {
    
    return new Promise(function(resolve,reject) {
      console.log('Connection being established');
      const server = http.createServer(function (req, res) {

      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('<p>Hello from the server</p>',function() {
          console.log('Data received successfully from the server');
       });
      res.end();
      
});

  server.listen(2000);                    
 });
});
}*/

//Reading and writing data using streams

/*const fs = require('fs');

const streamData = async() => {
    
  return new Promise((resolve,reject) => {
        const myReadStream = fs.createReadStream(__dirname + '/NewFile.txt');
        const myWriteStream = fs.createWriteStream(__dirname + '/NewFile2.txt');
    
        myReadStream.on('data',function(data) {
           await myWriteStream.write(data,function(data){        
            return ('Data written successfully');
       });
   });

      myReadStream.on('error',function(data) {
        return ('There is a problem with the data');
});     
});
}

streamData().then(data => console.log(data)).catch(err => console.log(err));*/


/*const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req,res){
    console.log('The request is' + req.url,req.body);
    
    if(req.url === '/' || req.url === '/about'){
       res.writeHead(200, {'Content-Type': 'text/html'});
       const readStream = fs.createReadStream(__dirname + '/ReadFile.txt','utf8');
       readStream.on('open',function(){
           console.log('Stream Reading possible');
           readStream.pipe(res);
       });
        
        readStream.on('err',function(){
           res.end(err)
       });
    }
});

const port = 3000;
server.listen(port);
console.log(`The server is listening on port ${port}`);*/

//.............Connecting MongoDB to the server...................

//Importing the node apis
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Creating the express object
app = express();

//Establishing the connection to MongoDB
const dbURI = 'mongodb+srv://dbUser:Nabhoneil@99@cluster0.wbms4.mongodb.net/TestNode?retryWrites=true&w=majority';
mongoose.connect(dbURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then((result) => {
    app.listen(3000);
    console.log('Sever listening on port 3000 and the connection to the db is successful');
  })
  .catch(err => console.log(err));

//Creating the schema for the DB
/*const testSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String
});*/

//Setting up the model schema
const Schema = mongoose.Schema;

//defining the model schema for mongoose
const test = mongoose.model('TestNode', new Schema({
    name: String,
    age: Number,
    password: String|Number,
    gender: String
},{timestamps: true}));

//Setting up the view engine as ejs
app.set('view engine', 'ejs');

//Defining the body parser middleware for handling the post requests
const urlencodedParser = bodyParser.urlencoded({ extended: false })

//Using the express for the static files
app.use(express.static('path'));

//.......Creating the different routes using express...................


app.get('/del', (req, res) => { 
  res.send("DELETE Request Called") 
}) 

//Setting the name of the user who has logged in with his name
app.get('/login/:name',(req,res) => {
    res.render('credentialInfo',{name: req.params.name, title: 'Login Page'})
});

//Retrieving the information of all the users present
app.get('/get-every',(req,res) => {
    test.find({}).sort({createdAt: -1}).limit(10)
    .then(response =>{
         res.render('data',{res: response, title: 'All Users'});              
    }).catch(err => console.log(err))
});

//Deleting the particular name specified by the user
/*app.delete('/delete/:name',(req,res) => {
    test.deleteMany({name: req.params.name})
    .then(response => {
        //res.redirect('/get-every')
        res.send(req.params.name)
    }).catch(err => console.log(err))
});*/

/*
app.delete('/delete', (req, res) => { 
  res.send("DELETE Request Called") 
})  
*/

//Retrieving all the data form the database by their individual id's
app.get('/info/:id',(req,res) => {
    test.findById(req.params.id)
    .then(response => {
        res.render('details', {rs: response, title: 'User Details'})
    }).catch(err => console.log(err));
});

//Submitting the data to the database to be stored
app.post('/submit',urlencodedParser, (req,res) => {
    var newData = new test(req.body); //creating an instance of the mongoose model
     newData.save() //saving the instance on the database
     .then(response => {
         res.render('credentialDetails',{title: 'Login Successful',rq: response})
       }).catch(err => console.log(err));
});
















































































































































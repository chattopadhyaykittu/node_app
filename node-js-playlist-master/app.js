const express = require('express');
const todoController = require('./controllers/todoControllers');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('./public'));

todoController(app);

app.listen(3000);
console.log('The server is listening  on port 3000 of the local host');




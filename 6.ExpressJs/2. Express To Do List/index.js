//This is a simple Express.js application that server a to-do list
const express = require('express');

//Create an instance of an express application 
const app = express();

//Define the port on which the server will listen
const port = 8000;

//Middleware to parse JSON bodies
//This allows us to handle JSON data sent in reqests
app.use(express.json());

//Simple to-do list data
const toDoList = ["Vaishnvai Mali", "Oracle", "Sencir Software Engineer"]

//Define router for the application 
//The root routerserver a simple message
//htpp://localhost:8000/
app.get('/',(req,res) => {
    res.status(200).send('Home Page !!');
});

//Router to get the to-do list
//This  router responds with current to-do list
//http://localhost:8000/todos
app.get('/todos', (req,res) => {
    res.status(200).send(toDoList);
});

//Router to add a new item to the to-do list
//It expects a JSON body with an "item" field
//http://localhost:8000/todos
app.post('/todos', (req, res) => {

    let newTodo = req.body.item;   // ✅ use req.body

    toDoList.push(newTodo);

    res.status(201).send({
        message: "Task added successfully !!"
    });

});

//Router to delete an item from the to-do list
//It expect a JSON body with an "item" field
//http://localhost:8000/todos
app.delete('/todos',(req,res) => {
    const itemToDelete = req.body.item;

    toDoList.find((elem,index) => {
        if(itemToDelete === elem){
            toDoList.splice(index,1)
        }
    })
    res.status(204).send({
        message: `Delect item ${req.body.item}`
    })
});
app.listen(port,() => {
    console.log(`Example app listening at http://localhost:${port}`); 
});


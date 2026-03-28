//importing express module
const express = require('express');

//creating an express application 
const app = express();

//middleware to parse JSON bodies
app.use(express.json());

//port number
const port = 8081;

//a sample get route
app.get('/',(req,res) =>{
    res.status(200).send('Hello World!');
})

//listener method
app.listen(port,() =>{
    console.log(`Server in runing on http://localhost:${port}`);  
});

// npm init
//npm i nodemon --dev
// 
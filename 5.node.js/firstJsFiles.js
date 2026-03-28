//Creating a frist Node Server

//imporing http protocol
const http = require('http');

// function asimpleServer(req, res) {
//    console.log(req);
// }
//creating a server

const app = http.createServer((req, res) => {
    console.log(req); 
})

//prot num
const PORT = 4000;
//application listen to the port 4000
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
    
});
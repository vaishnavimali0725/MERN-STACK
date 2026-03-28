const { log } = require('console');
const http = require('http');

const PORT = 8081;

const toDoList = ["Vaishnvai Mali", "Oracle", "Sencir Software Engineer"]

http.createServer((req, res) =>{

    const {method, url } = req;

    if(url === '/todos'){
        if(method === 'GET'){
            res.writeHead(200, {"Content-Type":"text/html"})
            res.write(toDoList.toString())
        }else if(method === 'POST'){
            let body= '';
            req.on('error', (err) =>{
                console.log(err);
            }).on('data',(chunk)=>{
                body += chunk;
                // console.log("Chunk: ",chunk);
            }).on('end',()=>{
                body = JSON.parse(body)
                // console.log("Body: ",body);
                   let newTodo = toDoList
                   newTodo.push(body.item)
            })
        }else if(method === 'DELETE'){
            let body ='';
            req.on('error',(err) =>{
                console.log(err);                
            }).on('data',(chunk)=>{
                body += chunk;
            }).on('end',() =>{
                body = JSON.parse(body);
                // const index = toDoList.indexOf(body.item);
                // if(index > -1){
                //     toDoList.splice(index, 1);
                // }
                let deleteThis = body.item;
                for(let i=0; i< toDoList.length; i++){
                    if(toDoList[i] === deleteThis){
                        toDoList.splice(i, 1);
                        break;
                    }
                }
            })
        }
        else{
            res.writeHead(501)
            res.write("Method Not Implemented")
        }
    }else{
        res.writeHead(404)
        res.write("Page Not Found")
    }

    res.end();
    
}).listen(PORT,()=>{
    console.log(`To do List Server got started on http://localhost:${PORT}`);
})
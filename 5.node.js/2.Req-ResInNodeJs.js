//import http
const http= require('http');

//create a server
const server=http.createServer((req,res)=>{
    //req is request object and res is response object
    //req details
    console.log(req.url,req.method,req.headers);  
    
    //res 
   //  res.setHeader('Content-type','json')
   res.setHeader('Content-type','text/html')
   // res.write('<h1>Hello World-Vaishnavi Mali</h1>')
   // res.write(`
   //    <html>
   //       <head>
   //          <title>Node.js Server</title>
   //       </head>
   //       <body>
   //          <h2>Heading2</h2>
   //          <P>hey para</P>
   //       </body>
   //    </html>
      
   //    `)

   res.write(`<html>`)
   res.write(`<head><title>Node.js Server</title></head>`)
   res.write(`<body><h2>HELLO EVEYONE!!</body>`)
   res.write(`</html>`)
    //Exiting out of event loop(stop event loop)
   //  process.exit();
 })

 //prot num
 const PORT=4000;

 //server listening to port
 server.listen(PORT,()=>{
    console.log(`Our Server is up and running on http://localhost:${PORT}`);
 })


 //GET,POST, PSUH, PATCH & DELETE are the HTTP methods
//GET is used to fetch data from server
//POST is used to send data to server
//PUT is used to update data on server
//PATCH is used to update partial data on server
//DELETE is used to delete data from server



// HTTP  response status code(https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status)
// 200-OK
// 201-Created    

// HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:

// Informational responses (100 – 199)
// Successful responses (200 – 299)
// Redirection messages (300 – 399)
// Client error responses (400 – 499)
// Server error responses (500 – 599)
const http = require('http');

// store server in variable
const app = http.createServer((req, res) => {

    if(req.url==='/home'){
        res.write('<h1>Home Page</h1>')
        return res.end()
    }else if((req.url==='/about')){
        res.write('<h1>About us</h1>')
        return res.end()
    }else if((req.url==='/contact')){
        res.write('<h1>Contact</h1>')
        return res.end()
    }else if((req.url==='/admin')){
        res.write('<h1>Admin/h1>')
        return res.end()
    }else if((req.url==='/user')){
        res.write('<h1>User</h1>')
        return res.end()
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Navbar Page</title>
        </head>

        <body>

            <nav>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About us</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/admin">Admin</a></li>
                    <li><a href="/user">User</a></li>
                </ul>
            </nav>

            <h1>Welcome to Node.js Server</h1>

        </body>
        </html>
    `);

    res.end();
});

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Node server is up and running - http://localhost:${PORT}`);
});
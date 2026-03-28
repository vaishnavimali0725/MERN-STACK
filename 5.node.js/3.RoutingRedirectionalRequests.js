const http= require('http');
const fs = require('fs');

const app=http.createServer((req,res)=>{
    
    // if(req.url === '/'){
    //     res.write('<h1>Home/Default Page</h1>');
    //     res.end();
    // }else if(req.url.toLowerCase() === '/products'){
    //     res.write('<h2>Products Page</h2>');
    //     res.end();
    // }else if(req.url.toLowerCase() === '/about-us'){
    //     res.write('<h3>About-Us Page</h3>');
    //     res.end();
    // }
    // res.write('<h1>Vaishnvai Mali</h1>');
    // res.end();

    if(req.url === '/form'){
        res.write('<h1>User Login page:</h1>');
        res.write(`
            <form action='/submitted-data' mtthod='POST'>
                <label>UserName:</label>
                <input type="text" id='name' name='name' placeholder="Enter username"/>
                <br/><br/>
                <label>Gender:</label>
                <input type='radio' name='gender' value='male'/> 
                <label>Male</label>
                <input type='radio' name='gender' value='female'/>
                 <label>Female</label>
                 <br/><br/>
                 <button type="submit">Submit</button>
            </form>`)
            res.statusCode=201;
            return res.end();
    }else if(res.url=='/redirected'){
        res.write('<h1>Redirected</h1>');
        return res.end()
    }
    else if(req.method=== 'POST' && req.url.toLowerCase() === '/submitted-data'){
        res.startsCode=302;
        fstat.writeFileSync('user-data.txt','Vaishnavi Mali')
        res.setHeader('Location','/redirected');
        return res.end()
    }
    res.write('<h1>No user input!!</h1>')
})

const PORT=4000;
 
app.listen(PORT,()=>{
    console.log(`NodeJs Server id up and runing -http://localhost:${PORT}`);
    
})


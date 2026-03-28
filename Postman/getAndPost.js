const express =  require ('express')

const app = express()

const PORT = 8000

const moivesList = [
    {
        id:1,
        name:'Dei hard'    
    },
    {
        id:2,
        name:'Transformers'
    },
    {
        id:3,
        name:'Termintor'
    }
]

app.listen(PORT, () => console.log(`Server is running ${PORT}`))

app.get('/movies', (req,res) => {
    res.send(moivesList)
})

app.post('/moives', (req,res) =>{
    console.log(req.body);
    res.send(201)   
})
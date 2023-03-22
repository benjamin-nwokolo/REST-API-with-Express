const express = require('express');
const app = express();
const path = require('path')

const PORT = process.env.PORT || 3000

//middleware for parsing json 

app.use(express.json())

//routes 
app.get('/infos' , (req,res) =>{
    res.status(200).send({
        "name" : "chucky",
        "age":19
    })
})
app.post('/infos/:id', (req,res) =>{
    const {id} = req.params;
    const {name} = req.body;


    if(!name) {
        res.status(418).send({message : "name is needed here"})
    }
    res.send({
        name:`this user with an  ${id} of  is ${name} `
    })
})
app.listen(PORT, () =>{
    console.log('API is up and Running');
});
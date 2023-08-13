const express = require('express');
const app = express();
const path = require('path')
app.use(express.static(path.join(__dirname, './public')))
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './view/home.html'))
})
app.get('/login',  (req,res) =>{
    res.sendFile(path.join(__dirname, '/view/ingresar.html'))
})
app.get('/register',  (req,res) =>{
    res.sendFile(path.join(__dirname, '/view/registro.html'))
})
app.listen(8080, ()=> console.log("esta andando"))
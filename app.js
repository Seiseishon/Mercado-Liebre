const { log } = require('console');
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './views/home.html'))
});

app.get('/login',  (req,res) =>{
    res.sendFile(path.join(__dirname, '/views/ingresar.html'))
});

app.get('/register',  (req,res) =>{
    res.sendFile(path.join(__dirname, '/views/registro.html'))
});

app.listen(PORT,()=> console.log(`Servidor corriendo en el puerto ${PORT}`));
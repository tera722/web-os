const express = require('express');
const bodyparser = require ('body-parser');
const db = require ('./db');
const path = require ('path');
const app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('public'));
app.post('/login',(req,res)=>{
    const {usuario,contrasena} = req.body;
    const sql = 'SELECT * FROM usuarios WHERE usuario =? AND contrasena = ?';
    db.query (sql,[usuario,contrasena], (err , resultados) =>{
        if (err)throw err;
        if(resultados.length > 0){
            res.send ('inicio de sesion exitoso');

        }else{
            res.send ('crendenciales incorrectas');
        }
    });
});
app.listen(3000,()=>{
    console.log('servidor corriendo en http://localhost:3000');
});
const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'usuario',
    password: 'contrasena',
    database: 'login_db'
})

db.connect((err)=>{
    if(err)throw err;
    console.log('conectado a mysql');
});
module.exports=db;
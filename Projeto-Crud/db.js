//arquivo para conexão (módulo)
const mysql = require('mysql2');

//criar a conexão (credencias de acesso)
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin123',
    database: 'userdb_2',
    port: '3306' //catolica: 3307
});

//estabelecer a conexão
db.connect(err =>{
    if (err) throw err;
    console.log("conectou ao banco!");
});

//exportar o módulo de conexão do banco de dados
module.exports = db;

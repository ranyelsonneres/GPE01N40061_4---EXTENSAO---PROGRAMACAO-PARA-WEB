//importar o express
const express = require('express');

//middleware (recebe e processa a requisição e encaminha)
const router = express.Router();

//trazer a conexão do banco de dados
const db = require('../db');

//criar as rotas
//cadastrar um usuário: /api/users/
router.post('/', (req, res) =>{
    const {nome, email} = req.body;

    //executar a instrução SQL
    db.query('INSERT INTO users (nome, email) VALUES (?, ?)', [nome, email], 
        (err, result) =>{
            if (err) return res.status(500).send(err);
            res.status(201).json({id: result.insertId, nome, email});
    });
});

//exportar as rotas
module.exports = router;

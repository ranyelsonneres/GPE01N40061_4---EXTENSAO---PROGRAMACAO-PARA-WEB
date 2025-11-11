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
            if (err) return res.status(500).send(err); //erro do lado do servidor
            res.status(201).json({id: result.insertId, nome, email}); //criou o registro
    });
});


//carrregar os usuários (salvos no Banco de Dados)
router.get('/', (req, res)=>{
    //instrução SQL
    db.query('SELECT * FROM users', (err, results) =>{
        if (err) return res.status(500).send(err);
        res.json(results);
    })
})

//rota para editar, pode-se utilizar o Patch para atualizar partes específicas
router.put('/:id', (req, res) => {
    //extrair os dados
    const {nome, email} = req.body;
    const {id} = req.params; //de acordo com o ID do usuário para realizar as ações

    //NÃO FAÇA UPDATE SEM WHERE
    //executar a instrução SQL
    db.query('UPDATE users SET nome = ?, email = ? WHERE id = ?', [nome, email, id], (err) =>{
        if(err) return res.status(500).send(err);
        res.json({id, nome, email});
    });
});

//rota para excluir
router.delete('/:id', (req, res) =>{
    //pegar o ID do usuário
    //NÃO FAÇA DELETE SEM WHERE
    const {id} = req.params;

    //executar a instrução SQL
    db.query('DELETE FROM users WHERE id = ?', [id], (err)=>{
        if(err) return res.status(500).send(err);
        res.sendStatus(204);
    });
});


//exportar as rotas
module.exports = router;

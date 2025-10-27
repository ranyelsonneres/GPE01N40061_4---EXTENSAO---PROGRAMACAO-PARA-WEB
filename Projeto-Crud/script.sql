-- criar o banco de dados
create database userdb_2;

-- criar a tabela de usuários
create table users (
	id int auto_increment primary key,
    nome varchar(100) not null,
    email varchar(100) not null
);

-- dados de acesso:
-- usuário: root
-- senha: catolica ou c@tolic@

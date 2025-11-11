const form = document.getElementById('user-form'); //trazer o formulário do cliente

const userList = document.getElementById('user-list');

carregarUsuarios(); //carregar os usuários cadastrados no banco

//função para tratar os eventos do meu formulário
form.addEventListener('submit', e=>{
    //evitar que a página seja recarregada
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    //chamar a função para cadastrar
    cadastrarUsuario(nome, email);
})

//função para cadastrar
function cadastrarUsuario(nome, email){
    //fetch() - requisição para o servidor HTTP 
    //POST, PUT, DELETE, GET, PATCH
    //endpoint (/api/users/) - rota para o nosso servidor
    fetch('/api/users/', {
        method: 'POST',
        headers: { 'Content-Type':'application/json'},
        body: JSON.stringify({nome, email})
    })
    .then(() =>{
        //limpar o formulário
        form.reset();
        carregarUsuarios();
    })
}

//função para carregar os usuários do Banco de Dados
function carregarUsuarios(){
    //requisição via fetch
    fetch('/api/users/')
    .then(res => res.json())
    .then(data =>{
        userList.innerHTML = '';
        data.forEach(user =>{
            const li = document.createElement('li');
            li.innerHTML = `${user.nome} (${user.email}) 
                <button onclick="atualizarUsuario(${user.id})">Editar</button>
                <button onclick="excluirUsuario(${user.id})">Excluir</button>`;
                userList.append(li);
        })
    })
}

//função para atualizar
function atualizarUsuario(id) {
    const nome = prompt('Digite o novo nome:');
    const email = prompt('Digite o novo email:');
    fetch(`/api/users/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email })
    })
    .then(() => {
        carregarUsuarios();
    })
}

//função para excluir
function excluirUsuario(id) {
    const confirmacao = confirm('Tem certeza que deseja excluir este usuário?');

    if (!confirmacao) {
        return;
    }

    fetch(`/api/users/${id}`, {
        method: 'DELETE'
    })
    .then(() => {
        carregarUsuarios();
    })
}

const form = document.getElementById('user-form'); //trazer o formulário do cliente

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
    })
}

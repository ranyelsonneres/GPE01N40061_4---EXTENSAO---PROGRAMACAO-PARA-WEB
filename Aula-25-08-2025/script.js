//propriedades:
let meuBotao1 = document.getElementById("meuBotao1");
console.log(meuBotao1);

/* meuBotao1.onclick = function() {
    alert("Primeiro Evento");
} */

meuBotao1.onclick = function() { //propriedade: clique
    meuBotao1.textContent = "Texto alterado";
}

let meuBotao2 = document.getElementById("meuBotao2");
meuBotao2.onmouseover = function(){
    meuBotao2.style.backgroundColor = "red";
}
meuBotao2.onmouseout = function(){
    meuBotao2.style.backgroundColor = "";
}
meuBotao2.ondblclick = function(){
    meuBotao2.style.backgroundColor = "blue";
    meuBotao2.textContent = "Duplo clique";
}

let campoEntrada = document.getElementById("meuInput1");
let resultado1 = document.getElementById("resultado1");
campoEntrada.onkeydown = function(event){
    if(event.key == "Enter"){
        resultado1.innerHTML = campoEntrada.value;
    }
};

let botaoLimpar1 = document.getElementById("limparTexto1");
botaoLimpar1.onclick = function(){
    resultado1.textContent = "";
    campoEntrada.value = "";
}

//addEventListener
let meuBotao3 = document.getElementById("meuBotao3");
let mensagem1 = document.getElementById("msg1");
let mensagem2 = document.getElementById("msg2");

meuBotao3.addEventListener("click", function(){
    mensagem1.textContent = "Primeiro evento";
});

meuBotao3.addEventListener("click", function(){
    mensagem2.textContent = "Segundo evento";
    alert("Teste");
});

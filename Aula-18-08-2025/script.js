let meuElemento = document.getElementById("paragrafo");
console.log(meuElemento);
console.log(meuElemento.textContent);

let paragrafo1 = document.getElementsByClassName("paragrafo");
console.log(paragrafo1);

//console.log(paragrafo1[0].textContent);

for (let i=0; i< paragrafo1.length; i++) {
    console.log(paragrafo1[i].textContent);
}

console.log("buscando todos os elementos que contenham a tag P")
let paragrafo2 = document.getElementsByTagName("p");
for (let i=0; i< paragrafo2.length; i++) {
    console.log(paragrafo2[i].textContent);
}

//criar uma calculadora (soma)
function somar(){
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);

    console.log(typeof n1);
    console.log(typeof n2);

    let soma = n1 + n2;

    let saida = `<strong>Resultado: ${soma}</strong>`;
    document.getElementById("resultado").innerHTML = saida;
}

//criar elemento de forma dinâmica
let destino = document.getElementById("elemento");
let p = document.createElement("p");
p.textContent = "Elemento criado via JavaScript";
destino.append(p);

let ul = document.createElement("ul");
let itens = ["Item 1", "Item 2", "Item 3"];

for(let i=0; i < itens.length; i++){
    let li = document.createElement("li");
    li.textContent = itens[i];
    ul.append(li);
}
destino.append(ul);

let botao1 = document.getElementById("botao1");
botao1.onclick = function(){
    alert("Clicou!");
    botao1.style.background = "green";
}

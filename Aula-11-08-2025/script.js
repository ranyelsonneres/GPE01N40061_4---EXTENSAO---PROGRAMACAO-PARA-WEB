console.log("Olá, mundo!");
//alert("Olá");

//let nome = window.prompt("Nome: ");
//console.log("Nome: " + nome);

//document.write("Escrever no HTML");

//variáveis
var animal = "gato";
console.log(animal);
let nomeCompleto = "Fulano da Silva";
console.log(nomeCompleto);
const valor = "10";
console.log(valor);

//valor = 20;
console.log(valor);

var status = true;

//verificar o tipo da variável
console.log(typeof animal);
console.log(typeof valor);
console.log(status);

//operadores aritméticos
var num1 = 10;
var num2 = 20;
var soma = num1 + num2;
console.log(soma);

//operadores de comparação
console.log(5 == "5"); //igualdade (valor)
console.log(5 === "5"); //estritamente igual (valor e tipo)

console.log(10 != "10"); //desigualdade
console.log(10 !== "10"); //estritamente desigual

//dados de entrada (input)
var idade = parseInt(window.prompt("Idade: "));
console.log(typeof idade);

var resultado = idade + 10;
console.log(`Olá ${nomeCompleto} você possui ${idade}`); //template literal

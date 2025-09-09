//criar o objeto
const pessoa = {
    nome: "Fulano",
    idade: 13
}

const pessoa2 = {};
pessoa2.nome = "Ciclano";
pessoa2.idade = 13;


const carro = new Object();
carro.marca = "VW";
carro.ano = 2025;

//usando um construtor
function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
}

const p1 = new Pessoa("Ana", 12);
const p2 = new Pessoa("Maria", 12);

class Animal {
    constructor(tipo, nome){
        this.tipo = tipo;
        this.nome = nome;
    }

    emitirSom(){
        return `${this.nome} faz um som`;
    }

}
const gato = new Animal("Felino", "Bixano");
const cachorro = new Animal("Canino", "Rex");
console.log(gato.emitirSom());
cachorro.nome = "Max";
console.log(cachorro.emitirSom());

//Array (vetor)
let numeros = [1, 2, 3, 4, 5];
console.log(numeros);
console.log(numeros[0]);

let frutas = ["maça", "uva", 1];
console.log(frutas);

let nomes = [];
nomes[0] = "Fulano";
nomes[1] = "Beltrano";
nomes[2] = "Ciclano";
console.log(nomes);

//remover
//nomes.pop(); //remover o último elemento
console.log(nomes);

//remover numa posição específica
nomes.splice(1,1);
console.log(nomes);

//remover o primeiro elemento
nomes.shift();

//adicionar um elemento ao inicio
nomes.unshift("Teste");
console.log(nomes);

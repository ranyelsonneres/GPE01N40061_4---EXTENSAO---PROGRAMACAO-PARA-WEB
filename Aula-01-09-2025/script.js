//preços dos combustiveis
const precoGasolina = 6.19;
const precoEtanol = 4.80;
const precoDiesel = 5.30;

//funcao atualizar os valores 
function atualizarValor(){
    let tipo = document.getElementById("combustivel").value;
    let litros = parseFloat(document.getElementById("litros").value);
    let precoPorLitro;

    switch (tipo) {
        case "gasolina":
            precoPorLitro = precoGasolina;
            break;
        case "etanol":
            precoPorLitro = precoEtanol;
            break;
        case "diesel":
            precoPorLitro = precoDiesel;
            break;
        default:
            console.log("escolha uma opção");
            return;
    }

    //chamar a função aqui!
    calcularValorAbastecimento(precoPorLitro, litros);

}

//calcular o abastecimento
function calcularValorAbastecimento(precoCombustivel, litros){
    if (litros<=0 || isNaN(litros)){
        document.getElementById("resultado").textContent = "Insira valor válido";
        return
    } else {
        const valorTotal = precoCombustivel * litros;
        document.getElementById("resultado").textContent = `Valor: ${formatarMoeda(valorTotal)}`;
    }
}

function formatarMoeda(valor){
    return "R$ " + valor.toLocaleString("pt-br", 
        {minimumFractionDigits: 2, maximumFractionDigits: 2})
}

//atualizarValor(); //chamar a função
let btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", atualizarValor);
document.getElementById("combustivel").addEventListener("change", atualizarValor);
document.getElementById("litros").addEventListener("input", atualizarValor);

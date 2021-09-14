function nome(){
    elNome = document.getElementById("nome");
    nomeP = document.getElementById("nomeP");
    nomeP.innerText = `Digite o salário de ${String(elNome.value)}:`;
}

function imposto(){
    var taxa = valorFixo = plBruto = plLiquido = impRenda = 0;
    elSalario = document.getElementById("salario");
    salario = Number(elSalario.value);
    if (salario < 300){
        taxa =  0.70;
        valorFixo = 500;
    } else if (salario < 1000){
        taxa = 0.50;
        valorFixo = 200;
    } else {
        taxa = 0.30;
        valorFixo = 0;
    }
    plBruto = valorFixo + (salario * taxa);
    impRenda = 0.25 * plBruto;
    plLiquido = plBruto - impRenda;
    elResult = document.getElementById("resultado");
    elResult.innerText = `A participação nos lucros de ${elNome.value} foi de R$${plLiquido}!`;
}
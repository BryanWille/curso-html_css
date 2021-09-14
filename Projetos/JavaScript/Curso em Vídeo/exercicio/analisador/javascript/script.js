var selectId = document.getElementById("listaNumeros");
var divRes = document.getElementById("resp");
var vetor = [];

function colocar(){
    divRes.innerHTML = '';
    let numeros = document.getElementById("leitor");
    let num = Number(numeros.value);

    if(vetor.indexOf(num) >= 0 || num > 100 || num < 0){
        window.alert('Número já colocado ou inválido')
    } else {
        vetor.push(num);
        repeticao(vetor);
    }
}

function finalizar(){
    let maior = 0, menor = 0, soma = 0, media;
    let res = [];
    console.log("finalizar acionado")
    for(let cont = 0; cont < vetor.length; cont++){
        if(cont === 0){
            maior = vetor[cont];
            menor = vetor[cont];
        } else if (menor > vetor[cont]){
            menor = vetor[cont];
        } else if (maior < vetor[cont]){
            maior = vetor[cont];
        }
        soma += vetor[cont];
    }
    media = soma/vetor.length;
    res[0] = `Ao todo tivemos ${vetor.length} números cadastrados<br>`;
    res[1] = `O maior valor informado foi ${maior} <br>`;
    res[2] = `O menor valor informado foi ${menor} <br>`;
    res[3] = `A soma de todos os valores foi de ${soma} <br>`;
    res[4] = `A média de todos os valores foi ${media} <br>`;
    divRes.innerHTML = res[0] + res[1] + res[2] + res[3] + res[4];
}

function repeticao (array){
    selectId.innerHTML = '';
    for(let cont = 0; cont < array.length; cont++){
        opcao = document.createElement('option');
        opcao.text = `Número ${array[cont]} foi adicionado`;
        opcao.value = `num${cont}`;
        selectId.appendChild(opcao);
    }
}

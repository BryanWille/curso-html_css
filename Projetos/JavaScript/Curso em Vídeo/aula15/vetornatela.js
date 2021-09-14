let valores = [8, 1, 7, 4, 2, 9];

valores.sort();

for (let cont = 0; cont < valores.length; cont++){
    console.log("Na posição " +cont +"está atribuido ao valor " +valores[cont]);
}

for(let val in valores){
    console.log(valores[val]);
}

console.log('\n \n' +valores.indexOf(3));
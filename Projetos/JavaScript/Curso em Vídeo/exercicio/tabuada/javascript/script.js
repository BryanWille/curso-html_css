function verificar(){
    let select, numId, num, option, cont;

    select = document.getElementById("areaTabuada");
    numId = document.getElementById("numero");
    num = Number(numId.value);
    
    if(numId.value.length == 0){
        window.alert("Por favor insira um número!");
    
    } else {
        select.innerHTML = '';
        for(cont = 1; cont <= 10; cont++){
            option = document.createElement('option');
            option.text = `${num} x ${cont} = ${num * cont}`;
            option.value = `tab${cont}`;
            select.appendChild(option);
        }
    }
}
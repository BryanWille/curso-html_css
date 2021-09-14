function repetidor(){
    let inicializacao, incremento, finalizacao, repeticoes, repet;
    let numInicio, numFinal, numIncre;

    inicializacao = document.getElementById("inicio");
    incremento = document.getElementById("incremento");
    finalizacao = document.getElementById("finalizacao");

    numInicio = Number(inicializacao.value);
    numFinal = Number(finalizacao.value);
    numIncre = Number(incremento.value);

    repeticoes = '';

    if(numInicio > numFinal && numIncre >= 0){
        window.alert("Você colocou um número final menor que o inicial, com incremento positivo!")
    }else if((incremento.value === "") || (inicializacao.value === "") || ( finalizacao.value == "")) {
        window.alert("Você não preencheu um dado!"); 
    } else {
        if( numIncre == 0){
            window.alert("Passo é zero, então vamos considerar como 1");
            numIncre = 1;
        }
        for (numInicio; numInicio <= numFinal; numInicio += numIncre){
            repeticoes += (numInicio.toString() + String.fromCodePoint(0x1F449));
            
        }
    }
    repeticoes += String.fromCodePoint(0x1F3C1);
    
    repet = document.getElementById("repet");

    repet.innerHTML = '<p id="par">' +repeticoes +"</p>";
} 